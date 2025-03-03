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
        self.assets = defaultdict(list)
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
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
    def is_valid_url(self, url):
        """Check if URL belongs to the same domain as base_url"""
        parsed_url = urlparse(url)
        base_domain = urlparse(self.base_url).netloc
        return parsed_url.netloc == base_domain or parsed_url.netloc == f"www.{base_domain}" or f"www.{parsed_url.netloc}" == base_domain
    
    def extract_nav_links(self, soup):
        """Extract navigation links from the page"""
        print("\nAnalyzing page structure...")
        
        # Look for navigation elements
        nav_elements = soup.find_all(['nav', 'header', 'div'], class_=re.compile('navbar|nav-menu|nav-link|menu-button|navigation|header', re.I))
        
        print(f"\nFound {len(nav_elements)} navigation elements")
        for element in nav_elements:
            print(f"Element classes: {element.get('class', [])}")
            
            # Look for links within these elements
            for link in element.find_all('a'):
                href = link.get('href', '')
                if href and not href.startswith('#') and not href.startswith('mailto:'):
                    full_url = urljoin(self.base_url, href)
                    if self.is_valid_url(full_url):
                        self.nav_links.add(full_url)
                        print(f"Found navigation link: {full_url}")
        
        # Look for links in the footer
        footer = soup.find(['footer', 'div'], class_=re.compile('footer', re.I))
        if footer:
            print("\nFound footer element")
            for link in footer.find_all('a'):
                href = link.get('href', '')
                if href and not href.startswith('#') and not href.startswith('mailto:'):
                    full_url = urljoin(self.base_url, href)
                    if self.is_valid_url(full_url):
                        self.nav_links.add(full_url)
                        print(f"Found footer link: {full_url}")
    
    def crawl(self, max_pages=50):
        """Crawl the website starting from base_url"""
        urls_to_visit = [urljoin(self.base_url, page) for page in self.known_pages]
        pages_crawled = 0
        
        while urls_to_visit and pages_crawled < max_pages:
            current_url = urls_to_visit.pop(0)
            
            if current_url in self.visited_urls:
                continue
                
            try:
                print(f"\nCrawling: {current_url}")
                response = requests.get(current_url, headers=self.headers, timeout=10)
                response.raise_for_status()  # Raise an exception for bad status codes
                soup = BeautifulSoup(response.text, 'html.parser')
                
                # Extract navigation links first
                print("Extracting navigation links...")
                self.extract_nav_links(soup)
                
                # Store page data
                self.pages_data[current_url] = {
                    'title': soup.title.string if soup.title else 'No title',
                    'meta_description': soup.find('meta', {'name': 'description'})['content'] if soup.find('meta', {'name': 'description'}) else 'No description',
                    'headings': [h.text.strip() for h in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']) if h.text.strip()],
                    'content': [p.text.strip() for p in soup.find_all('p') if p.text.strip()]
                }
                
                # Collect assets
                for img in soup.find_all('img'):
                    src = img.get('src', '')
                    if src:
                        self.assets[current_url].append({
                            'url': urljoin(current_url, src),
                            'alt': img.get('alt', ''),
                            'width': img.get('width', ''),
                            'height': img.get('height', '')
                        })
                
                # Collect forms
                for form in soup.find_all('form'):
                    form_data = {
                        'action': form.get('action', ''),
                        'method': form.get('method', 'get'),
                        'class': form.get('class', []),
                        'inputs': [{'type': input.get('type', 'text'), 
                                  'name': input.get('name', ''),
                                  'placeholder': input.get('placeholder', ''),
                                  'required': input.has_attr('required'),
                                  'class': input.get('class', [])} 
                                 for input in form.find_all('input')]
                    }
                    self.forms[current_url].append(form_data)
                
                # Collect scripts
                for script in soup.find_all('script'):
                    src = script.get('src', '')
                    if src:
                        self.scripts[current_url].append({
                            'url': urljoin(current_url, src),
                            'type': script.get('type', 'text/javascript'),
                            'async': script.has_attr('async'),
                            'defer': script.has_attr('defer')
                        })
                
                # Collect styles
                for style in soup.find_all(['link', 'style']):
                    if style.name == 'link' and style.get('rel', [''])[0] == 'stylesheet':
                        href = style.get('href', '')
                        if href:
                            self.styles[current_url].append({
                                'url': urljoin(current_url, href),
                                'media': style.get('media', 'all')
                            })
                    elif style.name == 'style':
                        self.styles[current_url].append({
                            'inline': True,
                            'content': style.string if style.string else ''
                        })
                
                # Find new URLs to visit
                print("Finding new URLs to visit...")
                for link in soup.find_all('a'):
                    href = link.get('href', '')
                    if href and not href.startswith('#') and not href.startswith('mailto:'):
                        full_url = urljoin(current_url, href)
                        if self.is_valid_url(full_url) and full_url not in self.visited_urls and full_url not in urls_to_visit:
                            urls_to_visit.append(full_url)
                            print(f"Added to visit queue: {full_url}")
                
                self.visited_urls.add(current_url)
                pages_crawled += 1
                
                # Be nice to the server
                time.sleep(2)
                
            except requests.exceptions.RequestException as e:
                print(f"Error crawling {current_url}: {str(e)}")
            except Exception as e:
                print(f"Unexpected error crawling {current_url}: {str(e)}")
    
    def save_report(self, filename='webflow_analysis.json'):
        """Save the crawling results to a JSON file"""
        report = {
            'base_url': self.base_url,
            'total_pages': len(self.visited_urls),
            'known_pages': self.known_pages,
            'pages_data': dict(self.pages_data),
            'assets': dict(self.assets),
            'forms': dict(self.forms),
            'scripts': dict(self.scripts),
            'styles': dict(self.styles),
            'nav_links': list(self.nav_links)
        }
        
        with open(filename, 'w') as f:
            json.dump(report, f, indent=2)
        
        print(f"\nCrawling completed! Report saved to {filename}")
        print(f"Total pages crawled: {len(self.visited_urls)}")
        print(f"Total assets found: {sum(len(assets) for assets in self.assets.values())}")
        print(f"Total forms found: {sum(len(forms) for forms in self.forms.values())}")
        print(f"Total scripts found: {sum(len(scripts) for scripts in self.scripts.values())}")
        print(f"Total styles found: {sum(len(styles) for styles in self.styles.values())}")

if __name__ == "__main__":
    site_url = "http://www.juniperisland.ca"
    crawler = WebflowCrawler(site_url)
    crawler.crawl()
    crawler.save_report() 