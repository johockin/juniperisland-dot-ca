<template>
  <div class="blog-post-page">
    <div v-if="isLoading" class="loading">
      <div class="spinner"></div>
      <p>Loading post...</p>
    </div>

    <div v-else-if="error" class="error-container">
      <h2>Post Not Found</h2>
      <p>{{ error }}</p>
      <router-link to="/blog" class="back-link">Return to Blog</router-link>
    </div>

    <template v-else>
      <section class="post-header">
        <div class="container">
          <div class="post-meta">
            <span class="post-category">{{ post.category }}</span>
            <span class="post-date">{{ formatDate(post.date) }}</span>
          </div>
          <h1>{{ post.title }}</h1>
          <div class="post-author" v-if="post.author">
            <img v-if="post.author_image" :src="post.author_image" :alt="post.author" class="author-image">
            <span class="author-name">{{ post.author }}</span>
          </div>
        </div>
      </section>

      <section class="post-featured-image" v-if="post.thumbnail">
        <div class="container">
          <img :src="post.thumbnail" :alt="post.title" class="featured-image">
        </div>
      </section>

      <section class="post-content">
        <div class="container">
          <div class="content" v-html="post.content"></div>
          
          <div class="tags-container" v-if="post.tags && post.tags.length">
            <h3>Tags</h3>
            <div class="tags">
              <span v-for="(tag, index) in post.tags" :key="index" class="tag">{{ tag }}</span>
            </div>
          </div>
          
          <div class="share-container">
            <h3>Share this post</h3>
            <div class="share-buttons">
              <a :href="'https://twitter.com/intent/tweet?text=' + encodeURIComponent(post.title) + '&url=' + encodeURIComponent(fullUrl)" target="_blank" rel="noopener noreferrer" class="share-button twitter">
                <i class="fab fa-twitter"></i> Twitter
              </a>
              <a :href="'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(fullUrl)" target="_blank" rel="noopener noreferrer" class="share-button linkedin">
                <i class="fab fa-linkedin"></i> LinkedIn
              </a>
              <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(fullUrl)" target="_blank" rel="noopener noreferrer" class="share-button facebook">
                <i class="fab fa-facebook"></i> Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="related-posts" v-if="relatedPosts.length">
        <div class="container">
          <h2>Related Posts</h2>
          <div class="posts-grid">
            <div v-for="(post, index) in relatedPosts" :key="index" class="blog-post">
              <div class="post-image">
                <img :src="post.thumbnail" :alt="post.title">
              </div>
              <div class="post-content">
                <div class="post-meta">
                  <span class="post-category">{{ post.category }}</span>
                  <span class="post-date">{{ formatDate(post.date) }}</span>
                </div>
                <h3 class="post-title">{{ post.title }}</h3>
                <p class="post-excerpt">{{ post.excerpt }}</p>
                <router-link :to="`/blog/${post.path}`" class="read-more">Read More <span class="arrow">→</span></router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2>Want to create video content that drives results?</h2>
            <router-link to="/contact" class="cta-button">Get in Touch</router-link>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script>
import { getBlogPost, getBlogPosts } from '@/utils/xml.js'

export default {
  name: 'BlogPost',
  data() {
    return {
      post: null,
      isLoading: true,
      error: null,
      relatedPosts: []
    }
  },
  computed: {
    fullUrl() {
      return window.location.href
    }
  },
  async created() {
    try {
      // Get the slug from the route params
      const slug = this.$route.params.slug
      
      // Fetch the post data
      this.post = await getBlogPost(slug)
      
      if (!this.post) {
        this.error = 'The requested post could not be found.'
        return
      }
      
      // Get related posts with the same category
      const allPosts = await getBlogPosts()
      this.relatedPosts = allPosts
        .filter(post => post.category === this.post.category && post.path !== slug)
        .slice(0, 3)
        
      // Update page metadata for SEO
      this.updatePageMetadata()
      
    } catch (error) {
      console.error('Error loading blog post:', error)
      this.error = 'There was a problem loading this post.'
    } finally {
      this.isLoading = false
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    },
    updatePageMetadata() {
      if (!this.post) return
      
      // Update document title
      document.title = `${this.post.title} | Juniper Island`
      
      // Find or create meta description
      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        document.head.appendChild(metaDescription)
      }
      metaDescription.setAttribute('content', this.post.excerpt)
      
      // Add Open Graph tags
      this.setMetaTag('og:title', this.post.title)
      this.setMetaTag('og:description', this.post.excerpt)
      this.setMetaTag('og:type', 'article')
      this.setMetaTag('og:url', window.location.href)
      
      if (this.post.thumbnail) {
        this.setMetaTag('og:image', this.post.thumbnail)
      }
      
      // Add Twitter Card tags
      this.setMetaTag('twitter:card', 'summary_large_image')
      this.setMetaTag('twitter:title', this.post.title)
      this.setMetaTag('twitter:description', this.post.excerpt)
      
      if (this.post.thumbnail) {
        this.setMetaTag('twitter:image', this.post.thumbnail)
      }
    },
    setMetaTag(name, content) {
      let meta = document.querySelector(`meta[property="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('property', name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }
  }
}
</script>

<style scoped>
.blog-post-page {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding-top: 0;
}

.post-header {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 7rem 0 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 400px;
  margin-top: 0;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

h1, h2, .post-category, .post-date, .author-name {
  font-family: var(--font-secondary);
  font-weight: 600;
  color: var(--secondary-color);
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.spinner {
  width: 40px;
  height: 40px;
  margin-bottom: 1rem;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: var(--accent-color);
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-container {
  max-width: 600px;
  margin: 6rem auto;
  text-align: center;
  padding: 2rem;
}

.back-link {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.75rem 1.25rem;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
}

.post-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.post-header h1 {
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.post-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.author-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.post-featured-image {
  padding: 0;
  margin-bottom: 2rem;
}

.featured-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
}

.post-content {
  padding: 3rem 0 5rem;
}

.content {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-color);
}

.content h2 {
  font-size: 2rem;
  margin: 2rem 0 1rem;
  color: var(--primary-color);
}

.content h3 {
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem;
  color: var(--primary-color);
}

.content p {
  margin-bottom: 1.5rem;
}

.content img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin: 2rem 0;
}

.content a {
  color: var(--accent-color);
  text-decoration: none;
  border-bottom: 1px solid currentColor;
}

.content ul, .content ol {
  margin: 1.5rem 0;
  padding-left: 1.5rem;
}

.content li {
  margin-bottom: 0.5rem;
}

.content blockquote {
  border-left: 4px solid var(--accent-color);
  padding-left: 1.5rem;
  font-style: italic;
  margin: 2rem 0;
  color: #666;
}

.tags-container {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}

.tags-container h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: #f0f0f0;
  color: #666;
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  font-size: 0.875rem;
}

.share-container {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}

.share-container h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.share-buttons {
  display: flex;
  gap: 1rem;
}

.share-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #f0f0f0;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.875rem;
  transition: background-color 0.3s, color 0.3s;
}

.share-button.twitter:hover {
  background-color: #1DA1F2;
  color: white;
}

.share-button.linkedin:hover {
  background-color: #0A66C2;
  color: white;
}

.share-button.facebook:hover {
  background-color: #1877F2;
  color: white;
}

.related-posts {
  background-color: #f8f8f8;
  padding: 4rem 0;
}

.related-posts h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.blog-post {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
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

.post-title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.post-excerpt {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
  line-height: 1.5;
}

.read-more {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.arrow {
  transition: transform 0.3s ease;
}

.read-more:hover .arrow {
  transform: translateX(3px);
}

.cta-section {
  background-color: var(--primary-color);
  padding: 4rem 0;
  text-align: center;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  color: white;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: var(--accent-color);
  color: var(--primary-color);
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #c4ac4d;
}

@media (max-width: 768px) {
  .post-header h1 {
    font-size: 2rem;
  }
  
  .post-content .container {
    padding: 0 1.5rem;
  }
  
  .share-buttons {
    flex-wrap: wrap;
  }
  
  .content {
    font-size: 1rem;
  }
}
</style>
