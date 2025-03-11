import { parseStringPromise } from 'xml2js';
import fs from 'fs';
import path from 'path';

// Function to read and parse XML files
export async function parseXmlFile(filePath) {
  try {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      // In browser, use fetch instead of fs
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${filePath}: ${response.status} ${response.statusText}`);
      }
      const content = await response.text();
      const result = await parseStringPromise(content, {
        explicitArray: false,
        normalize: true,
        normalizeTags: false
      });
      return result;
    } else {
      // In Node.js environment
      const content = fs.readFileSync(filePath, 'utf-8');
      const result = await parseStringPromise(content, {
        explicitArray: false,
        normalize: true,
        normalizeTags: false
      });
      return result;
    }
  } catch (error) {
    console.error(`Error parsing XML file ${filePath}:`, error);
    return null;
  }
}

// Function to convert XML content sections to HTML
function contentToHtml(content) {
  if (!content || !content.section) return '';
  
  let html = '';
  const sections = Array.isArray(content.section) ? content.section : [content.section];
  
  for (const section of sections) {
    if (section.heading) {
      html += `<h2>${section.heading}</h2>`;
    }
    
    if (section.paragraph) {
      const paragraphs = Array.isArray(section.paragraph) 
        ? section.paragraph 
        : [section.paragraph];
      
      for (const paragraph of paragraphs) {
        html += `<p>${paragraph}</p>`;
      }
    }
    
    if (section.list && section.list.item) {
      html += '<ul>';
      const items = Array.isArray(section.list.item) ? section.list.item : [section.list.item];
      for (const item of items) {
        html += `<li>${item}</li>`;
      }
      html += '</ul>';
    }
  }
  
  return html;
}

// Case Studies Functions
export async function getCaseStudies() {
  try {
    const caseStudiesDir = path.resolve('content/xml/case-studies');
    const files = fs.readdirSync(caseStudiesDir).filter(file => file.endsWith('.xml'));
    
    const caseStudies = [];
    for (const file of files) {
      const filePath = path.join(caseStudiesDir, file);
      const data = await parseXmlFile(filePath);
      
      if (data && data['case-study']) {
        const caseStudy = data['case-study'];
        const services = caseStudy.services && caseStudy.services.service 
          ? (Array.isArray(caseStudy.services.service) 
              ? caseStudy.services.service 
              : [caseStudy.services.service])
          : [];
          
        caseStudies.push({
          title: caseStudy.title,
          subtitle: caseStudy.subtitle,
          date: caseStudy.date,
          thumbnail: caseStudy.thumbnail,
          client: caseStudy.client,
          services: services,
          overview: caseStudy.overview,
          path: file.replace('.xml', '')
        });
      }
    }
    
    return caseStudies.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error getting case studies:', error);
    return getFallbackCaseStudies();
  }
}

export async function getCaseStudy(path) {
  try {
    const filePath = `content/xml/case-studies/${path}.xml`;
    const data = await parseXmlFile(filePath);
    
    if (!data || !data['case-study']) {
      throw new Error(`Case study not found: ${path}`);
    }
    
    const caseStudy = data['case-study'];
    const services = caseStudy.services && caseStudy.services.service 
      ? (Array.isArray(caseStudy.services.service) 
          ? caseStudy.services.service 
          : [caseStudy.services.service])
      : [];
    
    return {
      title: caseStudy.title,
      subtitle: caseStudy.subtitle,
      date: caseStudy.date,
      thumbnail: caseStudy.thumbnail,
      client: caseStudy.client,
      services: services,
      overview: caseStudy.overview,
      content: contentToHtml(caseStudy.content),
      testimonial: caseStudy.testimonial ? {
        quote: caseStudy.testimonial.quote,
        author: caseStudy.testimonial.author,
        title: caseStudy.testimonial.title
      } : null,
      path: path
    };
  } catch (error) {
    console.error(`Error getting case study ${path}:`, error);
    return getFallbackCaseStudy(path);
  }
}

// Blog Posts Functions
export async function getBlogPosts() {
  try {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      // In browser, we can't use fs to list files, so we'll use a manifest approach
      // or fallback to hardcoded list of known blog posts
      const knownPosts = [
        'behind-the-scenes',
        'storytelling-for-brands',
        'video-marketing-trends-2025'
      ];
      
      const blogPosts = [];
      for (const postPath of knownPosts) {
        try {
          const filePath = `/content/xml/blog/${postPath}.xml`;
          const data = await parseXmlFile(filePath);
          
          if (data && data['blog-post']) {
            const post = data['blog-post'];
            blogPosts.push({
              title: post.title,
              category: post.category,
              date: post.date,
              thumbnail: post.thumbnail,
              excerpt: post.excerpt,
              path: postPath
            });
          }
        } catch (err) {
          console.warn(`Could not load blog post ${postPath}:`, err);
        }
      }
      
      if (blogPosts.length === 0) {
        console.warn('No blog posts could be loaded, using fallback data');
        return getFallbackBlogPosts();
      }
      
      return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      // In Node.js environment
      const blogDir = path.resolve('content/xml/blog');
      const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.xml'));
      
      const blogPosts = [];
      for (const file of files) {
        const filePath = path.join(blogDir, file);
        const data = await parseXmlFile(filePath);
        
        if (data && data['blog-post']) {
          const post = data['blog-post'];
          blogPosts.push({
            title: post.title,
            category: post.category,
            date: post.date,
            thumbnail: post.thumbnail,
            excerpt: post.excerpt,
            path: file.replace('.xml', '')
          });
        }
      }
      
      return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  } catch (error) {
    console.error('Error getting blog posts:', error);
    return getFallbackBlogPosts();
  }
}

export async function getBlogPost(path) {
  try {
    // Adjust the path for browser environment
    const filePath = `/content/xml/blog/${path}.xml`;
    console.log('Fetching blog post from:', filePath);
    const data = await parseXmlFile(filePath);
    
    if (!data || !data['blog-post']) {
      console.error(`Blog post not found at ${filePath}`);
      throw new Error(`Blog post not found: ${path}`);
    }
    
    const post = data['blog-post'];
    console.log('Successfully loaded blog post:', post.title);
    
    return {
      title: post.title,
      category: post.category,
      date: post.date,
      thumbnail: post.thumbnail,
      excerpt: post.excerpt,
      content: contentToHtml(post.content),
      author: post.author ? {
        name: post.author.name,
        title: post.author.title,
        bio: post.author.bio
      } : null,
      path: path
    };
  } catch (error) {
    console.error(`Error getting blog post ${path}:`, error);
    return getFallbackBlogPost(path);
  }
}

// Fallback data for blog posts
export function getFallbackBlogPost(path) {
  console.log(`Using fallback blog post data for ${path}`);
  const blogPosts = getFallbackBlogPosts();
  const post = blogPosts.find(p => p.path === path);
  
  if (!post) {
    return null;
  }
  
  const contentMap = {
    'video-marketing-trends-2025': {
      content: `<h2>The Future of Video Marketing</h2>
      <p>As we move into 2025, video continues to dominate the digital landscape. From AI-generated content to immersive experiences, brands are finding new ways to connect with audiences.</p>
      <h2>Key Trends</h2>
      <p>Interactive video experiences, personalized content delivery, and short-form vertical videos are becoming essential components of successful marketing strategies.</p>
      <h2>Measuring Success</h2>
      <p>Analytics tools are evolving to provide deeper insights into viewer engagement and conversion metrics, allowing marketers to optimize their video content for maximum impact.</p>`,
      author: {
        name: 'Jane Smith',
        title: 'Marketing Director',
        bio: 'Jane has over 15 years of experience in digital marketing and content strategy.'
      }
    },
    'storytelling-for-brands': {
      content: `<h2>Why Stories Matter</h2>
      <p>Humans are wired for stories. They help us make sense of the world and connect with others on an emotional level.</p>
      <h2>Elements of a Compelling Brand Story</h2>
      <p>Authenticity, emotional resonance, and clear values are essential components of stories that drive customer loyalty and engagement.</p>
      <h2>Implementing Storytelling in Your Marketing</h2>
      <p>From video content to social media campaigns, there are numerous ways to integrate storytelling into your marketing strategy.</p>`,
      author: {
        name: 'Michael Johnson',
        title: 'Creative Director',
        bio: 'Michael specializes in helping brands find and amplify their unique voice.'
      }
    },
    'behind-the-scenes': {
      content: `<h2>Pre-Production Planning</h2>
      <p>Successful videos start with thorough planning, from concept development to storyboarding and scheduling.</p>
      <h2>On-Set Considerations</h2>
      <p>Lighting, sound quality, and direction all play crucial roles in creating professional-looking corporate videos.</p>
      <h2>Post-Production Magic</h2>
      <p>Editing, color grading, and sound design transform raw footage into polished, engaging content that achieves business objectives.</p>`,
      author: {
        name: 'Sarah Williams',
        title: 'Production Manager',
        bio: 'Sarah has overseen the production of over 200 corporate videos for Fortune 500 companies.'
      }
    }
  };
  
  return {
    ...post,
    ...contentMap[path]
  };
}

// Fallback data in case XML parsing fails
export function getFallbackBlogPosts() {
  console.log('Using fallback blog posts data');
  return [
    {
      title: 'Video Marketing Trends to Watch in 2025',
      category: 'Industry Trends',
      date: '2025-01-15',
      thumbnail: '/assets/images/blog-1.jpg',
      excerpt: 'Discover the emerging video marketing trends that will dominate in 2025.',
      path: 'video-marketing-trends-2025'
    },
    {
      title: 'The Art of Storytelling for Brands',
      category: 'Brand Strategy',
      date: '2024-12-10',
      thumbnail: '/assets/images/blog-2.jpg',
      excerpt: 'Learn how effective storytelling can transform your brand narrative and connect with customers on a deeper level.',
      path: 'storytelling-for-brands'
    },
    {
      title: 'Behind the Scenes: Creating Impactful Corporate Videos',
      category: 'Production',
      date: '2024-11-05',
      thumbnail: '/assets/images/blog-3.jpg',
      excerpt: 'A look at what goes into producing high-quality corporate videos that drive results.',
      path: 'behind-the-scenes'
    }
  ];
}

function getFallbackCaseStudies() {
  console.log('Using fallback case studies data');
  return [
    {
      title: 'Elevate Financial Brand Film',
      subtitle: 'Humanizing Wealth Management Through Cinematic Storytelling',
      date: '2025-02-15T10:00:00-04:00',
      thumbnail: '/assets/uploads/elevate-financial.jpg',
      client: 'Elevate Financial Services',
      services: ['Brand Films', 'Creative Direction', 'Cinematic Production'],
      overview: 'Elevate Financial needed to differentiate itself in the crowded wealth management sector by connecting emotionally with their ideal clients. We created a cinematic brand film that highlighted the human stories behind financial planning.',
      path: 'elevate-financial-brand-film'
    },
    {
      title: 'Harmony Festival Documentary',
      subtitle: 'Capturing the Spirit of Music and Community',
      date: '2025-01-20T10:00:00-04:00',
      thumbnail: '/assets/uploads/harmony-festival.jpg',
      client: 'Harmony Music Festival',
      services: ['Documentary', 'Event Coverage', 'Aerial Videography'],
      overview: 'The Harmony Music Festival needed a documentary that would capture the essence of their three-day event and drive ticket sales for future years.',
      path: 'harmony-festival-documentary'
    },
    {
      title: 'North Outdoors Product Launch',
      subtitle: 'Showcasing Innovation in Outdoor Equipment',
      date: '2024-12-10T10:00:00-04:00',
      thumbnail: '/assets/uploads/north-outdoors.jpg',
      client: 'North Outdoors',
      services: ['Product Videos', 'Commercial Production', 'Social Media Content'],
      overview: 'North Outdoors was launching a revolutionary new line of camping equipment and needed a video campaign that would demonstrate the products in action.',
      path: 'north-outdoors-product-launch'
    },
    {
      title: 'RedBull Brand Campaign',
      subtitle: 'Energizing Audiences with Extreme Sports Content',
      date: '2024-11-05T10:00:00-04:00',
      thumbnail: '/assets/uploads/redbull-campaign.jpg',
      client: 'RedBull',
      services: ['Brand Films', 'Sports Videography', 'Content Strategy'],
      overview: 'RedBull wanted to expand their extreme sports content with a series of short films showcasing emerging athletes in urban environments.',
      path: 'redbull-brand-campaign'
    }
  ];
}

function getFallbackCaseStudy(path) {
  console.log(`Using fallback case study data for ${path}`);
  const caseStudies = getFallbackCaseStudies();
  const caseStudy = caseStudies.find(cs => cs.path === path);
  
  if (!caseStudy) {
    return null;
  }
  
  return {
    ...caseStudy,
    content: `
      <h2>The Challenge</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h2>Our Approach</h2>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <h2>The Result</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    `,
    testimonial: {
      quote: 'Juniper Island delivered beyond our expectations. Their creative approach and technical expertise resulted in content that truly resonated with our audience.',
      author: 'Jane Smith',
      title: 'Marketing Director'
    }
  };
}
