import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

// Fallback data
const fallbackCaseStudies = [
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

const fallbackBlogPosts = [
  {
    title: 'Video Marketing Trends for 2025',
    category: 'Industry Trends',
    date: '2025-03-01T10:00:00-04:00',
    excerpt: 'Explore the emerging video marketing trends that will shape the industry in 2025.',
    thumbnail: '/src/assets/blog-1.jpg',
    path: 'video-marketing-trends-2025'
  },
  {
    title: 'Storytelling for Brands: How to Connect Emotionally with Your Audience',
    category: 'Brand Strategy',
    date: '2025-02-15T10:00:00-04:00',
    excerpt: 'Learn how effective storytelling can create powerful emotional connections with your target audience.',
    thumbnail: '/src/assets/blog-2.jpg',
    path: 'storytelling-for-brands'
  },
  {
    title: 'How to Create a Brand Story That Resonates',
    category: 'Brand Strategy',
    date: '2025-01-20T10:00:00-04:00',
    excerpt: 'Discover the key elements of creating a brand story that truly resonates with your audience.',
    thumbnail: '/src/assets/blog-1.jpg',
    path: 'how-to-create-a-brand-story'
  }
];

// Helper function to safely parse markdown
export function parseMarkdown(markdown) {
  try {
    if (!markdown || typeof markdown !== 'string') {
      console.error('Invalid markdown content', typeof markdown);
      return null;
    }
    
    console.log('Parsing markdown content:', markdown.substring(0, 100) + '...');
    
    try {
      const { data, content } = matter(markdown);
      const html = md.render(content);
      
      return {
        frontmatter: data,
        content: html
      };
    } catch (matterError) {
      console.error('Error in gray-matter parsing:', matterError);
      console.error('First 100 chars of content:', markdown.substring(0, 100));
      return null;
    }
  } catch (error) {
    console.error('Error in parseMarkdown:', error);
    console.error('Error stack:', error.stack);
    return null;
  }
}

// Primary function to get blog posts
export async function getBlogPosts() {
  console.log('Using fallback blog post data');
  // For now, just return the fallback data to ensure the website works
  return fallbackBlogPosts;
}

// Primary function to get case studies
export async function getCaseStudies() {
  console.log('Using fallback case study data');
  // For now, just return the fallback data to ensure the website works
  return fallbackCaseStudies;
}

// Function to get a single blog post
export async function getBlogPost(slug) {
  console.log(`Looking for blog post with slug: ${slug} in fallback data`);
  try {
    // Using fallback data directly
    const fallbackPost = fallbackBlogPosts.find(post => post.path === slug);
    
    if (fallbackPost) {
      // Create a synthetic markdown parsed result
      return {
        frontmatter: { ...fallbackPost },
        content: `<p>${fallbackPost.excerpt}</p><p>This is placeholder content for the blog post.</p>`
      };
    }
    
    console.error(`Blog post not found: ${slug}`);
    return null;
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

// Function to get a single case study
export async function getCaseStudy(slug) {
  console.log(`Looking for case study with slug: ${slug} in fallback data`);
  try {
    // Using fallback data directly
    const fallbackStudy = fallbackCaseStudies.find(study => study.path === slug);
    
    if (fallbackStudy) {
      // Create a synthetic markdown parsed result
      return {
        frontmatter: { ...fallbackStudy },
        content: `<p>${fallbackStudy.overview}</p><h2>The Challenge</h2><p>This is placeholder content for the case study.</p>`
      };
    }
    
    console.error(`Case study not found: ${slug}`);
    return null;
  } catch (error) {
    console.error(`Error loading case study ${slug}:`, error);
    return null;
  }
}
