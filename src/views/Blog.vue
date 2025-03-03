<template>
  <div class="blog">
    <section class="hero">
      <div class="container">
        <h1>Video Marketing Insights</h1>
        <p class="subtitle">Tips, trends, and strategies to elevate your brand through video</p>
      </div>
    </section>

    <section class="blog-posts">
      <div class="container">
        <div class="posts-grid">
          <div v-for="(post, index) in blogPosts" :key="index" class="blog-post">
            <div class="post-image">
              <img :src="post.image" :alt="post.title">
            </div>
            <div class="post-content">
              <div class="post-meta">
                <span class="post-category">{{ post.category }}</span>
                <span class="post-date">{{ post.date }}</span>
              </div>
              <h2 class="post-title">{{ post.title }}</h2>
              <p class="post-excerpt">{{ post.excerpt }}</p>
              <a href="#" class="read-more">Read More <span class="arrow">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="newsletter">
      <div class="container">
        <div class="newsletter-content">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest video marketing insights delivered to your inbox monthly.</p>
          <form class="newsletter-form" @submit.prevent="subscribeToNewsletter">
            <input type="email" v-model="newsletterEmail" placeholder="Your email address" required>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      newsletterEmail: '',
      blogPosts: [
        {
          title: 'How to Create a Brand Story That Resonates with Your Audience',
          category: 'Brand Strategy',
          date: 'March 15, 2024',
          excerpt: 'Learn the key elements of a compelling brand story and how to craft one that connects with your target audience on an emotional level.',
          image: require('@/assets/blog-1.jpg')
        },
        {
          title: 'Video Production Trends to Watch in 2024',
          category: 'Industry Trends',
          date: 'March 8, 2024',
          excerpt: 'From vertical video to AI-enhanced production, discover the top video trends that are shaping the industry this year.',
          image: require('@/assets/blog-2.jpg')
        },
        {
          title: 'The ROI of Video Marketing: Measuring Success Beyond Views',
          category: 'Marketing Strategy',
          date: 'February 28, 2024',
          excerpt: 'Discover how to track and measure the true impact of your video marketing efforts with metrics that matter to your business.',
          image: require('@/assets/blog-3.jpg')
        },
        {
          title: 'Behind the Scenes: Creating a Corporate Documentary',
          category: 'Case Study',
          date: 'February 15, 2024',
          excerpt: 'Take a look at our process for creating an award-winning corporate documentary that elevated our client\'s brand perception.',
          image: require('@/assets/blog-4.jpg')
        },
        {
          title: 'How to Optimize Your Videos for Different Social Media Platforms',
          category: 'Social Media',
          date: 'February 5, 2024',
          excerpt: 'Each social platform has unique requirements and audience expectations. Learn how to tailor your video content for maximum engagement.',
          image: require('@/assets/blog-5.jpg')
        },
        {
          title: 'The Psychology of Color in Video Marketing',
          category: 'Creative Strategy',
          date: 'January 25, 2024',
          excerpt: 'Explore how color choices in your videos can influence viewer emotions and drive specific actions.',
          image: require('@/assets/blog-6.jpg')
        }
      ]
    }
  },
  methods: {
    subscribeToNewsletter() {
      // Newsletter subscription logic would be implemented here
      console.log('Subscribed with email:', this.newsletterEmail)
      this.newsletterEmail = ''
      alert('Thank you for subscribing to our newsletter!')
    }
  }
}
</script>

<style scoped>
.blog {
  padding-top: 80px;
}

.hero {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 6rem 0;
  text-align: center;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.8;
}

.blog-posts {
  padding: 6rem 0;
  background-color: var(--secondary-color);
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 3rem;
}

.blog-post {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  background-color: #fff;
}

.blog-post:hover {
  transform: translateY(-5px);
}

.post-image {
  height: 200px;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-post:hover .post-image img {
  transform: scale(1.05);
}

.post-content {
  padding: 1.5rem;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.post-category {
  color: var(--accent-color);
  font-weight: 600;
}

.post-date {
  color: #666;
}

.post-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.post-excerpt {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.read-more {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
}

.arrow {
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.read-more:hover .arrow {
  transform: translateX(5px);
}

.newsletter {
  padding: 6rem 0;
  background-color: var(--background-color);
}

.newsletter-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.newsletter-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.newsletter-content p {
  margin-bottom: 2rem;
  color: #666;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
}

.newsletter-form input {
  flex: 1;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.newsletter-form button {
  padding: 1rem 2rem;
  background-color: var(--accent-color);
  color: var(--primary-color);
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 4px 4px 0 var(--accent-secondary);
  transition: transform 0.3s ease;
}

.newsletter-form button:hover {
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .posts-grid {
    grid-template-columns: 1fr;
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .newsletter-form button {
    width: 100%;
  }
}
</style> 