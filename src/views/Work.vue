<template>
  <div class="work">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-label">Portfolio</div>
          <h1 class="hero-title">Our Work</h1>
          <p class="hero-subtext">We create compelling video content that helps brands connect with their audience and achieve their goals.</p>
        </div>
      </div>
    </section>

    <section class="case-studies-section">
      <div class="container">
        <div v-if="isLoading" class="loading-container">
          <div class="spinner"></div>
          <p>Loading case studies...</p>
        </div>
        
        <div v-else-if="error" class="error-container">
          <p>{{ error }}</p>
        </div>

        <div v-else>
          <!-- Section intro -->
          <div v-if="caseStudies.length > 0" class="work-intro">
            <div class="section-label">Showcase</div>
            <h2 class="section-title">Featured Projects</h2>
            <p class="section-description">Explore our portfolio of creative work across various industries and mediums.</p>
          </div>
          
          <div class="case-studies-grid">
            <div 
              v-for="caseStudy in filteredCaseStudies" 
              :key="caseStudy.path"
              class="case-study-card"
            >
              <router-link :to="`/work/${caseStudy.path}`" class="card-link">
                <div class="card-image" :style="{ backgroundImage: `url(${caseStudy.thumbnail})` }">
                  <div class="overlay"></div>
                  <div class="client-tag">{{ caseStudy.client }}</div>
                </div>
                <div class="card-content">
                  <h3>{{ caseStudy.title }}</h3>
                  <p class="subtitle">{{ caseStudy.subtitle }}</p>
                  <div class="services-list">
                    <span v-for="(service, index) in caseStudy.services" :key="index" class="service-tag">
                      {{ service }}
                    </span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <div v-if="filteredCaseStudies.length === 0" class="no-results">
            <p>No case studies found for the selected filter.</p>
            <button class="reset-filter" @click="setFilter('all')">View All Work</button>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <div class="cta-label">Next Steps</div>
        <h2>Ready to Create?</h2>
        <p>Let's discuss how we can bring your vision to life with our team of experts ready to help you tell your story in a compelling and authentic way.</p>
        <router-link to="/contact" class="cta-button">
          <div class="button-content">Get in Touch</div>
          <div class="scan-line"></div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { getCaseStudies } from '@/utils/xml.js';

export default {
  name: 'Work',
  data() {
    return {
      caseStudies: [],
      isLoading: true,
      error: null,
      activeFilter: 'all'
    };
  },
  computed: {
    availableServices() {
      // Extract all unique services from case studies
      const services = new Set();
      this.caseStudies.forEach(caseStudy => {
        if (caseStudy.services && Array.isArray(caseStudy.services)) {
          caseStudy.services.forEach(service => services.add(service));
        }
      });
      return Array.from(services).sort();
    },
    filteredCaseStudies() {
      if (this.activeFilter === 'all') {
        return this.caseStudies;
      }
      return this.caseStudies.filter(caseStudy => 
        caseStudy.services && 
        Array.isArray(caseStudy.services) && 
        caseStudy.services.includes(this.activeFilter)
      );
    }
  },
  async created() {
    try {
      this.caseStudies = await getCaseStudies();
    } catch (error) {
      console.error('Error fetching case studies:', error);
      this.error = 'There was a problem loading our case studies. Please try again later.';
    } finally {
      this.isLoading = false;
    }
  },
  methods: {
    setFilter(filter) {
      this.activeFilter = filter;
    }
  }
};
</script>

<style scoped>
.work {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding-top: 0;
}

.hero {
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

.hero-content {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.hero-label, .section-label {
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.8;
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

.hero-title, .section-title {
  font-family: var(--font-secondary);
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.hero-subtext, .section-description {
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--secondary-color);
  opacity: 0.95;
  margin-bottom: 1.5rem;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.case-studies-section {
  padding: 8rem 0;
  background-color: var(--background-color);
  position: relative;
}

.case-studies-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%);
  z-index: 0;
}

.work-intro {
  text-align: left;
  margin-bottom: 5rem;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
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
  text-align: center;
  padding: 2rem;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 4px;
  max-width: 800px;
  margin: 0 auto;
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 3rem;
  position: relative;
  z-index: 1;
}

.case-study-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  background-color: white;
  position: relative;
}

.case-study-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.card-image {
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.card-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}

.case-study-card:hover .card-image::before {
  opacity: 0.2;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7));
  z-index: 2;
}

.client-tag {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background-color: var(--accent-color);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 4px;
  z-index: 3;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.case-study-card:hover .client-tag {
  transform: translateY(-5px);
}

.card-content {
  padding: 2rem;
  background-color: white;
  position: relative;
}

.card-content::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: var(--accent-color);
  transition: width 0.4s ease;
}

.case-study-card:hover .card-content::after {
  width: 100%;
}

.card-content h3 {
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
  color: var(--primary-color);
  font-weight: 600;
  letter-spacing: -0.01em;
  transition: color 0.3s ease;
}

.case-study-card:hover .card-content h3 {
  color: var(--accent-color);
}

.subtitle {
  color: var(--text-color-secondary);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.services-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.service-tag {
  padding: 0.25rem 0.75rem;
  background-color: var(--background-color);
  font-size: 0.75rem;
  border-radius: 30px;
  color: var(--text-color-secondary);
}

.no-results {
  text-align: center;
  padding: 3rem 0;
}

.reset-filter {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--accent-color);
  color: var(--primary-color);
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
}

.cta {
  padding: 8rem 0;
  background: var(--primary-color);
  color: white;
  position: relative;
  overflow: hidden;
}

.cta::before {
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

.cta .container {
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

.cta h2 {
  font-size: 3.5rem;
  margin-bottom: 2rem;
  text-align: left;
  max-width: 24ch;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--light-gold);
}

.cta p {
  font-size: 1.25rem;
  width: 40%;
  max-width: 500px;
  margin: 0 0 2.5rem 45%;
  opacity: 0.9;
  text-align: justify;
  margin-top: -5rem;
  line-height: 1.6;
  color: var(--light-gold);
}

.cta-button {
  display: inline-block;
  background: var(--accent-color);
  color: var(--primary-color);
  padding: 1rem 2.5rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-left: 45%;
  position: relative;
  overflow: hidden;
}

.cta-button:hover {
  background-color: #c4ac4d;
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 0 4rem;

    .hero-label {
      width: 80%;
      margin-bottom: 1rem;
    }

    .hero-title {
      font-size: 10vw;
    }

    .hero-subtext {
      width: 80%;
      margin-left: 0;
      margin-top: 2rem;
      font-size: 5vw;
    }
  }

  .work-grid {
    padding: 4rem 0;
  }

  .work-category {
    h2 {
      font-size: 2rem;
    }
  }

  .work-intro {
    .section-label {
      width: 80%;
    }

    .section-title {
      font-size: 2.5rem;
    }

    .section-description {
      width: 80%;
      margin-left: 0;
      margin-top: 1.5rem;
    }
  }

  .cta {
    padding: 6rem 0 4rem;

    .cta-label {
      width: 80%;
    }

    h2 {
      font-size: 2.5rem;
    }

    p {
      width: 80%;
      margin-left: 0;
      margin-top: 1.5rem;
      font-size: 1rem;
    }

    .cta-button {
      margin-left: 0;
    }
  }
}
</style> 