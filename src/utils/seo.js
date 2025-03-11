/**
 * SEO utility functions for managing meta tags
 */

/**
 * Update page metadata (title, meta description, OG tags, etc.)
 * 
 * @param {Object} config - Configuration object
 * @param {string} config.title - Page title
 * @param {string} config.description - Meta description
 * @param {string} [config.type='website'] - Open Graph type
 * @param {string} [config.url] - Canonical URL
 * @param {string} [config.image] - Image URL for social sharing
 * @param {Array} [config.keywords] - Keywords for meta tags
 */
export function updateMetaTags(config) {
  // Set the document title
  document.title = config.title || 'Juniper Island - Toronto\'s Premier Video Production Company';
  
  // Update or create meta description
  setMetaTag('description', config.description);
  
  // Set Open Graph tags
  setMetaTag('og:title', config.title);
  setMetaTag('og:description', config.description);
  setMetaTag('og:type', config.type || 'website');
  
  if (config.url) {
    setMetaTag('og:url', config.url);
  }
  
  if (config.image) {
    setMetaTag('og:image', config.image);
  }
  
  // Set Twitter Card tags
  setMetaTag('twitter:card', 'summary_large_image');
  setMetaTag('twitter:title', config.title);
  setMetaTag('twitter:description', config.description);
  
  if (config.image) {
    setMetaTag('twitter:image', config.image);
  }
  
  // Set keywords if provided
  if (config.keywords && Array.isArray(config.keywords)) {
    setMetaTag('keywords', config.keywords.join(', '));
  }
  
  // Set canonical URL
  if (config.url) {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', config.url);
  }
}

/**
 * Set a meta tag value, creating it if it doesn't exist
 * 
 * @param {string} name - Meta tag name or property
 * @param {string} content - Meta tag content
 */
export function setMetaTag(name, content) {
  if (!content) return;
  
  // Check if the meta tag exists (try both name and property)
  let metaTag = document.querySelector(`meta[name="${name}"]`);
  if (!metaTag) {
    metaTag = document.querySelector(`meta[property="${name}"]`);
  }
  
  // If the meta tag doesn't exist, create it
  if (!metaTag) {
    metaTag = document.createElement('meta');
    
    // Determine whether to use name or property attribute
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      metaTag.setAttribute('property', name);
    } else {
      metaTag.setAttribute('name', name);
    }
    
    document.head.appendChild(metaTag);
  }
  
  // Set the content
  metaTag.setAttribute('content', content);
}

/**
 * Generate a structured data JSON-LD script for the given type
 * 
 * @param {string} type - Type of structured data (Article, BreadcrumbList, etc.)
 * @param {Object} data - Structured data object
 */
export function addStructuredData(type, data) {
  // Remove any existing structured data of this type
  const existingScript = document.querySelector(`script[data-type="${type}"]`);
  if (existingScript) {
    existingScript.remove();
  }
  
  // Create the new structured data script
  const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.setAttribute('data-type', type);
  
  // Set the script content
  script.textContent = JSON.stringify(data);
  
  // Add the script to the document
  document.head.appendChild(script);
}

/**
 * Create article structured data for blog posts
 * 
 * @param {Object} post - Blog post data
 * @param {string} baseUrl - Base URL for the website
 */
export function createArticleStructuredData(post, baseUrl) {
  const url = `${baseUrl}/blog/${post.path}`;
  
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.thumbnail ? [post.thumbnail] : [],
    "datePublished": post.date,
    "dateModified": post.modified || post.date,
    "author": {
      "@type": "Person",
      "name": post.author || "Juniper Island"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Juniper Island",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/assets/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
  
  addStructuredData('Article', articleData);
}

/**
 * Create organization structured data
 * 
 * @param {string} baseUrl - Base URL for the website
 */
export function createOrganizationStructuredData(baseUrl) {
  const orgData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Juniper Island",
    "url": baseUrl,
    "logo": `${baseUrl}/assets/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "email": "hello@juniperisland.ca",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://instagram.com/juniperisland",
      "https://linkedin.com/company/juniper-island"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
    }
  };
  
  addStructuredData('Organization', orgData);
}
