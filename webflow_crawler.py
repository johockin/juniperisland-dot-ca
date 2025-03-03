import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import json
from collections import defaultdict
import time
import re

class WebflowCrawler:
    def __init__(self, base_url):
        self.base_url = base_url
        self.visited_urls = set()
        self.pages_data = defaultdict(dict)
        self.assets = {
            'images': set(),
            'videos': set(),
            'styles': set(),
            'scripts': set()
        }
        self.forms = defaultdict(list)
        self.scripts = defaultdict(list)
        self.styles = defaultdict(list)
        self.nav_links = set()
        
        # Known pages to crawl
        self.known_pages = [
            "/",
            "/our-work",
            "/blog"
        ]
        
        # Headers to mimic a browser
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
        }
        
    def is_valid_url(self, url):
        """Validate if URL belongs to same domain"""
        parsed_base = urlparse(self.base_url)
        parsed_url = urlparse(url)
        return parsed_url.netloc == parsed_base.netloc or not parsed_url.netloc

    def get_page_content(self, url):
        """Fetch page content with error handling and rate limiting"""
        try:
            time.sleep(1)  # Rate limiting
            response = requests.get(url, headers=self.headers)
            response.raise_for_status()
            return response.text
        except Exception as e:
            print(f"Error fetching {url}: {str(e)}")
            return None

    def extract_nav_links(self, soup):
        """Extract navigation links from page"""
        for link in soup.find_all('a', href=True):
            href = link['href']
            if href.startswith('/') or self.is_valid_url(href):
                full_url = urljoin(self.base_url, href)
                if self.is_valid_url(full_url):
                    self.nav_links.add(full_url)

    def extract_assets(self, soup, page_url):
        """Extract all assets from page"""
        # Images
        for img in soup.find_all('img', src=True):
            self.assets['images'].add(urljoin(page_url, img['src']))

        # Videos
        for video in soup.find_all(['video', 'source']):
            if video.get('src'):
                self.assets['videos'].add(urljoin(page_url, video['src']))

        # Styles
        for style in soup.find_all('link', rel='stylesheet'):
            if style.get('href'):
                self.assets['styles'].add(urljoin(page_url, style['href']))

        # Scripts
        for script in soup.find_all('script', src=True):
            self.assets['scripts'].add(urljoin(page_url, script['src']))

    def extract_styles(self, soup):
        """Extract inline and external styles"""
        styles = []
        # Inline styles
        for style in soup.find_all('style'):
            styles.append({
                'type': 'inline',
                'content': style.string
            })
        # External stylesheets
        for link in soup.find_all('link', rel='stylesheet'):
            if link.get('href'):
                stylesheet_url = urljoin(self.base_url, link['href'])
                content = self.get_page_content(stylesheet_url)
                if content:
                    styles.append({
                        'type': 'external',
                        'url': stylesheet_url,
                        'content': content
                    })
        return styles

    def crawl(self, known_pages=None):
        """Main crawling function"""
        pages_to_visit = set([self.base_url])
        if known_pages:
            pages_to_visit.update(known_pages)

        while pages_to_visit:
            url = pages_to_visit.pop()
            if url in self.visited_urls:
                continue

            content = self.get_page_content(url)
            if not content:
                continue

            soup = BeautifulSoup(content, 'html.parser')
            self.extract_nav_links(soup)
            self.extract_assets(soup, url)
            
            # Store page data
            self.pages_data[url] = {
                'title': soup.title.string if soup.title else '',
                'content': content,
                'styles': self.extract_styles(soup)
            }

            self.visited_urls.add(url)
            
            # Add new navigation links to visit
            new_links = {link for link in self.nav_links 
                        if link not in self.visited_urls}
            pages_to_visit.update(new_links)

    def save_results(self):
        """Save crawling results to file"""
        results = {
            'pages': dict(self.pages_data),
            'assets': dict(self.assets),
            'forms': dict(self.forms),
            'scripts': dict(self.scripts),
            'styles': dict(self.styles),
            'nav_links': list(self.nav_links)
        }
        
        with open('webflow_analysis.json', 'w') as f:
            json.dump(results, f, indent=2)

def main():
    base_url = 'https://www.juniperisland.ca'
    known_pages = [
        '/',
        '/our-work',
        '/blog'
    ]
    
    crawler = WebflowCrawler(base_url)
    crawler.crawl([urljoin(base_url, page) for page in known_pages])
    crawler.save_results()

if __name__ == '__main__':
    main() 