import requests
from bs4 import BeautifulSoup

def fetch_site_html(url):
    response = requests.get(url)
    return response.text

def save_content_to_file(content, filename):
    with open(filename, 'w', encoding='utf-8') as file:
        file.write(content)

def main():
    url = 'https://www.juniperisland.ca'  # Change to the site you want to crawl
    html_content = fetch_site_html(url)
    save_content_to_file(html_content, 'site_content.html')

    soup = BeautifulSoup(html_content, 'html.parser')
    css_links = soup.find_all('link', {'rel': 'stylesheet'})

    for link in css_links:
        if 'http' in link['href']:  # Absolute URL
            css_content = fetch_site_html(link['href'])
        else:  # Relative URL
            css_content = fetch_site_html(url + link['href'])
        save_content_to_file(css_content, link['href'].split('/')[-1])

if __name__ == '__main__':
    main()