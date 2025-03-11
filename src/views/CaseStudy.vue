<template>
  <div class="case-study-page">
    <div v-if="isLoading" class="loading">
      <div class="spinner"></div>
      <p>Loading case study...</p>
    </div>

    <div v-else-if="error" class="error-container">
      <h2>Case Study Not Found</h2>
      <p>{{ error }}</p>
      <router-link to="/work" class="back-link">View All Work</router-link>
    </div>

    <template v-else>
      <section class="case-study-hero">
        <div class="hero-background" :style="{ backgroundImage: `url(${caseStudy.thumbnail})` }">
          <div class="overlay"></div>
        </div>
        <div class="hero-content container">
          <div class="client-tag">{{ caseStudy.client }}</div>
          <h1>{{ caseStudy.title }}</h1>
          <p class="subtitle">{{ caseStudy.subtitle }}</p>
          
          <div class="case-study-meta">
            <div class="meta-item" v-if="caseStudy.services && caseStudy.services.length">
              <div class="meta-label">Services</div>
              <div class="meta-content">
                <span v-for="(service, index) in caseStudy.services" :key="index">
                  {{ service }}{{ index < caseStudy.services.length - 1 ? ', ' : '' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="case-study-overview">
        <div class="container">
          <h2>Overview</h2>
          <p>{{ caseStudy.overview }}</p>
        </div>
      </section>

      <section class="case-study-content">
        <div class="container">
          <div class="content" v-html="caseStudy.content"></div>
        </div>
      </section>

      <section class="testimonial-section" v-if="caseStudy.testimonial">
        <div class="container">
          <div class="testimonial">
            <div class="quote-mark">"</div>
            <div class="testimonial-content">
              <p class="testimonial-text">{{ caseStudy.testimonial.quote }}</p>
              <div class="testimonial-author" v-if="caseStudy.testimonial.author">
                <p class="author-name">{{ caseStudy.testimonial.author }}</p>
                <p class="author-title" v-if="caseStudy.testimonial.title">
                  {{ caseStudy.testimonial.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="related-case-studies" v-if="relatedCaseStudies.length">
        <div class="container">
          <h2>Related Projects</h2>
          <div class="case-studies-grid">
            <div v-for="(study, index) in relatedCaseStudies" :key="index" class="case-study-card">
              <div class="card-image">
                <img :src="study.thumbnail" :alt="study.title">
              </div>
              <div class="card-content">
                <div class="client-tag">{{ study.client }}</div>
                <h3 class="case-study-title">{{ study.title }}</h3>
                <p class="case-study-excerpt">{{ study.overview }}</p>
                <router-link :to="`/work/${study.path}`" class="view-project">View Project</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2>Ready to create your own success story?</h2>
            <router-link to="/contact" class="cta-button">Start a Project</router-link>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script>
import { getCaseStudy, getCaseStudies } from '@/utils/xml.js'
import { updateMetaTags, createArticleStructuredData } from '@/utils/seo.js'

export default {
  name: 'CaseStudy',
  data() {
    return {
      caseStudy: null,
      isLoading: true,
      error: null,
      relatedCaseStudies: []
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
      
      // Fetch the case study data
      this.caseStudy = await getCaseStudy(slug)
      
      if (!this.caseStudy) {
        this.error = 'The requested case study could not be found.'
        return
      }
      
      // Update page metadata for SEO
      this.updatePageMetadata()
      
      // Get related case studies
      const allCaseStudies = await getCaseStudies()
      // Filter by services for relevance
      this.relatedCaseStudies = allCaseStudies
        .filter(study => {
          if (study.path === slug) return false
          if (!this.caseStudy.services || !study.services) return false
          // Check if there's service overlap
          return this.caseStudy.services.some(service => 
            study.services.includes(service)
          )
        })
        .slice(0, 2) // Limit to 2 related case studies
        
      // If we don't have enough related case studies by service, add some random ones
      if (this.relatedCaseStudies.length < 2) {
        const remainingCaseStudies = allCaseStudies
          .filter(study => 
            study.path !== slug && 
            !this.relatedCaseStudies.find(s => s.path === study.path)
          )
          .slice(0, 2 - this.relatedCaseStudies.length)
          
        this.relatedCaseStudies = [...this.relatedCaseStudies, ...remainingCaseStudies]
      }
      
    } catch (error) {
      console.error('Error loading case study:', error)
      this.error = 'There was a problem loading this case study.'
    } finally {
      this.isLoading = false
    }
  },
  methods: {
    updatePageMetadata() {
      if (!this.caseStudy) return
      
      const frontmatter = this.caseStudy.frontmatter
      const title = `${frontmatter.title} - ${frontmatter.client} | Juniper Island`
      const description = frontmatter.overview || 'Case study by Juniper Island'
      
      // Update meta tags
      updateMetaTags({
        title,
        description,
        url: window.location.href,
        type: 'article',
        image: frontmatter.thumbnail,
        keywords: [...(frontmatter.services || []), 'case study', 'video production', frontmatter.client]
      })
      
      // Add structured data
      createArticleStructuredData({
        title: frontmatter.title,
        excerpt: frontmatter.overview,
        thumbnail: frontmatter.thumbnail,
        date: frontmatter.date,
        path: this.$route.params.slug,
        author: 'Juniper Island'
      }, window.location.origin)
    }
  }
}
</script>

<style scoped>
.case-study-page {
  padding-top: 0;
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

.case-study-hero {
  position: relative;
  height: 80vh;
  min-height: 600px;
  color: white;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(12, 35, 44, 0.7), rgba(12, 35, 44, 0.9));
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 2rem;
}

.client-tag {
  display: inline-block;
  background-color: var(--accent-color);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  border-radius: 2px;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  max-width: 800px;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 600px;
  opacity: 0.9;
}

.case-study-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3rem;
}

.meta-item {
  display: flex;
  flex-direction: column;
}

.meta-label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
  color: var(--accent-color);
}

.meta-content {
  font-size: 1.125rem;
}

.case-study-overview {
  padding: 5rem 0;
  background-color: var(--background-color);
}

.case-study-overview h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

.case-study-overview p {
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 800px;
  color: var(--text-color);
}

.case-study-content {
  padding: 5rem 0;
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

.testimonial-section {
  background-color: var(--primary-color);
  padding: 5rem 0;
  color: white;
}

.testimonial {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.quote-mark {
  font-size: 6rem;
  line-height: 1;
  font-family: Georgia, serif;
  position: absolute;
  top: -3rem;
  left: 0;
  color: var(--accent-color);
  opacity: 0.5;
}

.testimonial-text {
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-style: italic;
}

.testimonial-author {
  margin-top: 1.5rem;
}

.author-name {
  font-weight: 600;
  font-size: 1.125rem;
}

.author-title {
  font-size: 0.9rem;
  opacity: 0.8;
}

.related-case-studies {
  padding: 5rem 0;
  background-color: var(--background-color);
}

.related-case-studies h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  color: var(--primary-color);
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 3rem;
}

.case-study-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.case-study-card:hover {
  transform: translateY(-5px);
}

.card-image {
  height: 220px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.case-study-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 1.5rem;
}

.case-study-title {
  font-size: 1.5rem;
  margin: 1rem 0;
  line-height: 1.3;
}

.case-study-excerpt {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.view-project {
  display: inline-block;
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  position: relative;
}

.view-project::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--accent-color);
  transition: width 0.3s ease;
}

.view-project:hover::after {
  width: 100%;
}

.cta-section {
  background-color: var(--primary-color);
  padding: 5rem 0;
  text-align: center;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: var(--accent-color);
  color: var(--primary-color);
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.125rem;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #c4ac4d;
}

@media (max-width: 768px) {
  .case-study-hero {
    height: auto;
    min-height: 500px;
    padding: 6rem 0 3rem;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.25rem;
  }
  
  .case-studies-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonial-text {
    font-size: 1.25rem;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>
