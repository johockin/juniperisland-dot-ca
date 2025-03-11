<template>
  <div class="blog">
    <div class="navbar-dark-section"></div>
    
    <section class="blog-posts">
      <div class="container">
        <div class="posts-layout">
          <router-link 
            v-for="(post, index) in blogPosts" 
            :key="index" 
            :to="`/blog/${post.path || 'post'}`" 
            class="blog-post"
            :class="{ 'post-even': index % 2 === 1 }"
          >
            <div class="post-content">
              <div class="post-number">{{ String(index + 1).padStart(2, '0') }}</div>
              <h2 class="post-title">{{ post.title }}</h2>
              <p class="post-excerpt">{{ post.excerpt }}</p>
              <div class="hover-indicator"></div>
            </div>
            <div class="post-image">
              <div class="placeholder-image">
                <div class="placeholder-grid">
                  <div></div><div></div><div></div><div></div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <section class="newsletter">
      <div class="container">
        <div class="cta-label">Stay Updated</div>
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest video marketing insights delivered to your inbox monthly. Our newsletter includes exclusive tips, industry trends, and special offers.</p>
        <form class="newsletter-form" @submit.prevent="subscribeToNewsletter">
          <input type="email" v-model="newsletterEmail" placeholder="Your email address" required>
          <button type="submit">
            <div class="button-content">Subscribe</div>
            <div class="scan-line"></div>
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { getBlogPosts } from '@/utils/xml.js'

export default {
  name: 'Blog',
  data() {
    return {
      newsletterEmail: '',
      isLoading: true,
      blogPosts: []
    }
  },
  async created() {
    try {
      console.log('Blog component created - about to fetch blog posts')
      const posts = await getBlogPosts()
      console.log('Blog posts returned from getBlogPosts:', posts)
      
      // If we got posts, use them. Otherwise fall back to placeholders.
      if (posts && posts.length > 0) {
        this.blogPosts = posts
        console.log('Setting blog posts from markdown:', this.blogPosts)
      } else {
        console.warn('No blog posts found, using fallback data')
        // Fallback to placeholder data if necessary
        this.blogPosts = [
          {
            title: 'How to Create a Brand Story That Resonates with Your Audience',
            category: 'Brand Strategy',
            date: '2024-03-15',
            excerpt: 'Learn the key elements of a compelling brand story.',
            thumbnail: '/src/assets/blog-1.jpg',
            path: 'placeholder-1'
          },
          {
            title: 'Video Production Trends to Watch in 2024',
            category: 'Industry Trends',
            date: '2024-03-08',
            excerpt: 'Discover the top video trends shaping the industry this year.',
            thumbnail: '/src/assets/blog-2.jpg',
            path: 'placeholder-2'
          }
        ]
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error)
      console.error('Error stack:', error.stack)
      // Fallback to placeholder data
      this.blogPosts = [
        {
          title: 'How to Create a Brand Story That Resonates with Your Audience',
          category: 'Brand Strategy',
          date: '2024-03-15',
          excerpt: 'Learn the key elements of a compelling brand story.',
          thumbnail: require('@/assets/blog-1.jpg'),
          path: 'placeholder-1'
        },
        {
          title: 'Video Production Trends to Watch in 2024',
          category: 'Industry Trends',
          date: '2024-03-08',
          excerpt: 'Discover the top video trends shaping the industry this year.',
          thumbnail: '/src/assets/blog-2.jpg',
          path: 'placeholder-2'
        }
      ]
    } finally {
      this.isLoading = false
      console.log('Final blog posts set:', this.blogPosts)
    }
  },
  methods: {
    subscribeToNewsletter() {
      // Newsletter subscription logic would be implemented here
      console.log('Subscribed with email:', this.newsletterEmail)
      this.newsletterEmail = ''
      alert('Thank you for subscribing to our newsletter!')
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    }
  }
}
</script>

<style scoped>
.blog {
  padding-top: 0;
  background-color: #e8e8e8;
}

.navbar-dark-section {
  height: 120px;
  background-color: var(--primary-color);
  position: relative;
  z-index: 1;
}

.hero {
  background-color: var(--light-color);
  color: var(--primary-color);
  padding: 7rem 0 2rem;
  padding-top: calc(7rem + 80px);
  position: relative;
  margin-top: -80px;
}

.blog-title {
  font-family: var(--font-secondary);
  font-size: 4rem;
  font-weight: 400;
  color: var(--primary-color);
  letter-spacing: -0.02em;
  text-align: center;
}

.blog-posts {
  padding: 4rem 0 8rem;
  background-color: #e8e8e8;
}

.posts-layout {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.blog-post {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  padding: 2.5rem 2rem;
  text-decoration: none;
  position: relative;
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  transform-style: preserve-3d;
  perspective: 1000px;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  background-color: transparent;
}

.post-even {
  grid-template-columns: 1fr 2fr;
}

.post-even .post-content {
  order: 2;
  padding-left: 4rem;
  padding-right: 2rem;
  align-items: flex-end;
  text-align: right;
}

.post-even .post-image {
  order: 1;
}

.post-even .post-number {
  right: 0;
  left: auto;
}

.post-even .hover-indicator {
  right: 0;
  left: auto;
  transform-origin: right;
}

@keyframes timelineProgress {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

.blog-post:hover .hover-indicator {
  animation: timelineProgress 5s linear forwards;
  transform: none;
}



.blog-post:hover {
  transform: translateY(-5px) rotateX(2deg);
  z-index: 1;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.6),
    inset 0 0 0 2px rgba(0, 0, 0, 0.05);
  background: rgba(235, 235, 235, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.blog-post::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(to right, 
    rgba(255, 255, 255, 0) 0%, 
    rgba(255, 255, 255, 0.3) 50%, 
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(30deg) translateX(-200%);
  transition: opacity 0.3s ease;
  opacity: 0;
  pointer-events: none;
}

.blog-post:hover::after {
  animation: glassShimmer 15s infinite linear;
  opacity: 1;
}

@keyframes glassShimmer {
  0% { transform: rotate(30deg) translateX(-100%); }
  100% { transform: rotate(30deg) translateX(100%); }
}



.blog-post:hover .placeholder-grid div {
  opacity: 1;
  transform: scale(1);
  animation: gridPulse 2s infinite alternate;
}

@keyframes gridPulse {
  0% { opacity: 0.5; }
  100% { opacity: 1; }
}

.post-image {
  height: 240px;
  overflow: hidden;
  position: relative;
}



.placeholder-image {
  width: 100%;
  height: 100%;
  background-color: #d0d0d0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  transform: translateZ(0);
}

.blog-post:hover .placeholder-image {
  background-color: #d0d0d0; /* Keep same color for better contrast */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transform: translateZ(30px);
}

.placeholder-grid {
  width: 60%;
  height: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
}

.placeholder-grid div {
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  opacity: 0.5;
  transform: scale(0.9);
}

.placeholder-grid div:nth-child(1) { transition-delay: 0s; }
.placeholder-grid div:nth-child(2) { transition-delay: 0.1s; }
.placeholder-grid div:nth-child(3) { transition-delay: 0.2s; }
.placeholder-grid div:nth-child(4) { transition-delay: 0.3s; }



.post-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.post-number {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--primary-color);
  opacity: 0.5;
  font-family: var(--font-mono, monospace);
}

.hover-indicator {
  position: absolute;
  bottom: -10px;
  left: 0;
  height: 2px;
  width: 90%;
  background-color: var(--accent-color);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 8s cubic-bezier(0.19, 1, 0.22, 1);
}

.post-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: var(--primary-color);
  font-weight: 500;
  letter-spacing: -0.02em;
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  transform: translateZ(0);
}

.blog-post:hover .post-title {
  transform: translateZ(20px);
  /* Keep original color for better contrast */
}

.post-even:hover .post-title {
  transform: translateZ(20px);
  /* Keep original color for better contrast */
}

.post-excerpt {
  color: var(--primary-color);
  opacity: 0.7;
  line-height: 1.6;
  font-size: 1.1rem;
  max-width: 40ch;
  margin-bottom: 1.5rem;
}



.newsletter {
  padding: 8rem 0;
  background: var(--primary-color);
  color: var(--light-gold);
  position: relative;
  overflow: hidden;
}

.newsletter::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/grid-pattern.png');
  background-size: 50px 50px;
  opacity: 0.1;
  z-index: 1;
}

.newsletter .container {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.cta-label {
  font-size: min(1vw, 16px);
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  color: var(--light-gold);
  opacity: 0.9;
  text-align: left;
  width: 40%;
  max-width: 500px;
}

.newsletter h2 {
  font-size: 3.5rem;
  margin-bottom: 2rem;
  text-align: left;
  max-width: 24ch;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--light-gold);
}

.newsletter p {
  font-size: 1.25rem;
  width: 40%;
  max-width: 500px;
  margin: 0 0 2.5rem 45%;
  opacity: 0.9;
  text-align: justify;
  margin-top: -5rem;
  line-height: 1.6;
  color: white;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  width: 40%;
  margin-left: 45%;
}

.newsletter-form input {
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  color: var(--primary-color);
}

.newsletter-form button {
  padding: 1rem 2.5rem;
  background: var(--accent-color);
  color: var(--primary-color);
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.button-content {
  position: relative;
  z-index: 2;
}

.scan-line {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  z-index: 1;
  animation: scan 2s infinite;
}

@keyframes scan {
  0% {
    left: -100%;
  }
  100% {
    left: 200%;
  }
}

.newsletter-form button:hover {
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 0 2rem;
    padding-top: calc(4rem + 80px);
  }

  .blog-title {
    font-size: 3rem;
  }
  
  .blog-post,
  .post-even {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 3rem 0;
  }
  
  .post-content,
  .post-even .post-content {
    order: 2;
    padding-left: 2rem;
    text-align: left;
    align-items: flex-start;
  }
  
  .post-image,
  .post-even .post-image {
    order: 1;
    height: 200px;
  }
  
  .post-title {
    font-size: 1.8rem;
  }
  
  .post-excerpt {
    font-size: 1rem;
    max-width: 100%;
  }
  
  .post-number,
  .post-even .post-number {
    left: 0;
    right: auto;
  }
  
  .hover-indicator,
  .post-even .hover-indicator {
    left: 0;
    right: auto;
    transform-origin: left;
  }
  
  .blog-post:hover {
    transform: translateY(-5px);
    background: rgba(235, 235, 235, 0.95);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08),
      inset 0 0 0 1px rgba(255, 255, 255, 0.6);
  }
  
  .blog-post::after {
    transform: rotate(30deg) translateX(-200%);
  }
  
  .blog-post:hover::after {
    animation: glassShimmer 12s infinite linear;
    opacity: 1;
  }
  
  .newsletter {
    padding: 4rem 0;
  }
  
  .newsletter h2 {
    font-size: 2rem;
  }

  .newsletter p {
    width: 100%;
    margin-left: 0;
    margin-top: 1rem;
    font-size: 1rem;
  }

  .newsletter-form {
    flex-direction: column;
    width: 100%;
    margin-left: 0;
  }
  
  .newsletter-form button {
    width: 100%;
  }
}
</style>