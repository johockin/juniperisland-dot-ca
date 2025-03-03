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
        
    def is_valid_url(self, url):
        """Check if URL belongs to the same domain as base_url"""
        parsed_url = urlparse(url)
        base_domain = urlparse(self.base_url).netloc
        return parsed_url.netloc == base_domain and not any(ext in url.lower() for ext in ['.jpg', '.jpeg', '.png', '.gif', '.pdf', '.zip'])
    
    def extract_nav_links(self, soup):
        """Extract navigation links from the page"""
        print("\nAnalyzing page structure...")
        
        # Look for navigation elements with specific classes found in the site
        nav_elements = soup.find_all(class_=re.compile('navbar|nav-menu|nav-link|menu-button'))
        
        print(f"\nFound {len(nav_elements)} navigation elements")
        for element in nav_elements:
            print(f"Element classes: {element.get('class', [])}")
            
            # Look for links within these elements
            for link in element.find_all('a'):
                href = link.get('href', '')
                if href and self.is_valid_url(href):
                    full_url = urljoin(self.base_url, href)
                    self.nav_links.add(full_url)
                    print(f"Found navigation link: {full_url}")
        
        # Look for links in the nav menu specifically
        nav_menu = soup.find(class_='nav-menu')
        if nav_menu:
            print("\nFound nav-menu element")
            for link in nav_menu.find_all('a'):
                href = link.get('href', '')
                if href and self.is_valid_url(href):
                    full_url = urljoin(self.base_url, href)
                    self.nav_links.add(full_url)
                    print(f"Found nav-menu link: {full_url}")
        
        # Look for links in the navbar header
        navbar_header = soup.find(class_='navbar-header')
        if navbar_header:
            print("\nFound navbar-header element")
            for link in navbar_header.find_all('a'):
                href = link.get('href', '')
                if href and self.is_valid_url(href):
                    full_url = urljoin(self.base_url, href)
                    self.nav_links.add(full_url)
                    print(f"Found navbar-header link: {full_url}")
        
        # Look for links in the footer
        footer = soup.find(class_='footer-main-section')
        if footer:
            print("\nFound footer element")
            for link in footer.find_all('a'):
                href = link.get('href', '')
                if href and self.is_valid_url(href):
                    full_url = urljoin(self.base_url, href)
                    self.nav_links.add(full_url)
                    print(f"Found footer link: {full_url}")
        
        # Look for any links with specific Webflow classes
        webflow_links = soup.find_all('a', class_=re.compile('w-nav-link|w-button|nav-link|link-2|link-3|link-4'))
        print(f"\nFound {len(webflow_links)} Webflow-specific links")
        for link in webflow_links:
            href = link.get('href', '')
            if href and self.is_valid_url(href):
                full_url = urljoin(self.base_url, href)
                self.nav_links.add(full_url)
                print(f"Found Webflow link: {full_url}")
    
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
                response = requests.get(current_url)
                soup = BeautifulSoup(response.text, 'html.parser')
                
                # Extract navigation links first
                print("Extracting navigation links...")
                self.extract_nav_links(soup)
                
                # Store page data
                self.pages_data[current_url] = {
                    'title': soup.title.string if soup.title else 'No title',
                    'meta_description': soup.find('meta', {'name': 'description'})['content'] if soup.find('meta', {'name': 'description'}) else 'No description',
                    'headings': [h.text for h in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])],
                }
                
                # Collect assets
                for img in soup.find_all('img'):
                    src = img.get('src', '')
                    if src:
                        self.assets[current_url].append(urljoin(current_url, src))
                
                # Collect forms
                for form in soup.find_all('form'):
                    form_data = {
                        'action': form.get('action', ''),
                        'method': form.get('method', 'get'),
                        'inputs': [{'type': input.get('type', 'text'), 'name': input.get('name', '')} 
                                 for input in form.find_all('input')]
                    }
                    self.forms[current_url].append(form_data)
                
                # Collect scripts
                for script in soup.find_all('script'):
                    src = script.get('src', '')
                    if src:
                        self.scripts[current_url].append(urljoin(current_url, src))
                
                # Collect styles
                for style in soup.find_all('link', {'rel': 'stylesheet'}):
                    href = style.get('href', '')
                    if href:
                        self.styles[current_url].append(urljoin(current_url, href))
                
                # Find new URLs to visit
                print("Finding new URLs to visit...")
                for link in soup.find_all('a'):
                    href = link.get('href', '')
                    if href and self.is_valid_url(href):
                        full_url = urljoin(current_url, href)
                        if full_url not in self.visited_urls and full_url not in urls_to_visit:
                            urls_to_visit.append(full_url)
                            print(f"Added to visit queue: {full_url}")
                
                self.visited_urls.add(current_url)
                pages_crawled += 1
                
                # Be nice to the server
                time.sleep(1)
                
            except Exception as e:
                print(f"Error crawling {current_url}: {str(e)}")
    
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
            'styles': dict(self.styles)
        }
        
        with open(filename, 'w') as f:
            json.dump(report, f, indent=2)
        
        print(f"\nCrawling completed! Report saved to {filename}")
        print(f"Total pages crawled: {len(self.visited_urls)}")
        print(f"Total assets found: {sum(len(assets) for assets in self.assets.values())}")
        print(f"Total forms found: {sum(len(forms) for forms in self.forms.values())}")

if __name__ == "__main__":
    site_url = "https://juniperisland.webflow.io"
    crawler = WebflowCrawler(site_url)
    crawler.crawl()
    crawler.save_report() 