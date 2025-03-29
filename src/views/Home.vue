<template>
  <div class="home">
    <!-- Hero Section with Full-Width Video -->
    <section class="hero">
      <div class="hero-video">
        <video autoplay muted loop playsinline poster="@/assets/video-thumbnail.jpg">
          <source src="@/assets/hero.mp4" type="video/mp4">
        </video>
      </div>
      
      <GridLayout>
        <div class="hero-content grid-span-6 grid-start-4">
          <div class="hero-text">
            <div class="hero-label">Branded Content & High-End Video Production</div>
            <h1>Brand Stories.<br>Beautifully Filmed.</h1>
            <p>Great Stories Deserve an Audience—We Make Sure They Find One</p>
          </div>
        </div>
      </GridLayout>
    </section>
    
    <!-- Brand Strip -->
    <section class="brand-logos">
      <GridLayout>
        <div class="brand-logos-content grid-span-12">
          <img src="@/assets/logo-strip.png" alt="Trusted brands including Olympus, RedBull, Nike, Dentsu Creative, Riley, Subway" class="brands-image">
        </div>
      </GridLayout>
    </section>
    
    <!-- Video Preview Section -->
    <section class="video-preview">
      <GridLayout>
        <div class="section-title grid-span-12">
          <h2>Our Approach</h2>
        </div>
        
        <div class="video-content grid-span-8 grid-start-3">
          <div class="video-text">
            <h3>Watch this 60-second video—because the fastest way to know if we're your people is to hear it straight from us.</h3>
          </div>
          
          <div class="video-container">
            <div class="video-wrapper">
              <img src="@/assets/video-thumbnail.jpg" alt="Our team explaining how we can help your brand" class="video-thumbnail">
              <div class="video-overlay">
                <button class="play-button" aria-label="Play video">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M12 8L24 16L12 24V8Z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </GridLayout>
    </section>
    
    <!-- Value Proposition Section -->
    <section class="value-prop">
      <GridLayout>
        <div class="value-content grid-span-6 grid-start-4">
          <h2>We Know What Makes Audiences Watch, Share, and Engage.</h2>
          <p>Brands don't struggle with storytelling—they struggle with getting their stories seen and shared. We craft social-first, strategy-driven videos that don't just look great—they break through.</p>
        </div>
        
        <div class="stats-grid grid-span-12">
          <div class="stat-item">
            <div class="stat-number">1M+</div>
            <div class="stat-label">Average Views per Campaign</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">300%</div>
            <div class="stat-label">Average ROI for Clients</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">Brands Trust Us</div>
          </div>
        </div>
      </GridLayout>
    </section>
    
    <!-- Process Section -->
    <section class="process">
      <GridLayout>
        <div class="section-title grid-span-12">
          <h2>Our Process</h2>
        </div>
        
        <div class="process-steps grid-span-12">
          <div class="process-step">
            <h3>01</h3>
            <h4>Discover & Define</h4>
            <p>We start with a thorough consultation to grasp your brand's specific needs. Delving into your story and market position, we craft a creative direction aligned with your goals.</p>
          </div>
          
          <div class="process-step">
            <h3>02</h3>
            <h4>Create & Craft</h4>
            <p>Our experts turn your narrative into striking video content, covering scriptwriting, storyboarding, filming, and editing, to echo your brand's voice and vision.</p>
          </div>
          
          <div class="process-step">
            <h3>03</h3>
            <h4>Deliver & Drive Impact</h4>
            <p>Deliver the final video content along with a tailored distribution strategy to maximize impact, engagement, and meet your marketing goals.</p>
          </div>
        </div>
      </GridLayout>
    </section>
    
    <!-- Testimonial Section -->
    <section class="testimonial">
      <GridLayout>
        <div class="testimonial-content grid-span-8 grid-start-3">
          <div class="quote-content">
            <p>"The Juniper Island team are ideal partners, anticipating our needs and exceeding our expectations at every turn. They take time to understand the "why" of everything we're doing, and then put in the work to make sure it's as creative and beautiful as possible."</p>
            <div class="quote-author">
              <p>Andrew Addison, Vice-President, Communications, Marketing & Membership</p>
              <p>The Canadian Media Producers Association (CMPA)</p>
            </div>
          </div>
        </div>
      </GridLayout>
    </section>
    
    <!-- Newsletter Section -->
    <section class="newsletter">
      <GridLayout>
        <div class="newsletter-content grid-span-6 grid-start-4">
          <h2>Our quarterly newsletter offers essential insights for brand marketers determined to make a real impact in a saturated market.</h2>
          <form class="newsletter-form">
            <input type="email" placeholder="Your work email" class="email-input" required>
            <button type="submit" class="submit-button">Subscribe</button>
          </form>
        </div>
      </GridLayout>
    </section>
  </div>
</template>

<script>
import GridLayout from '@/components/GridLayout.vue';

export default {
  name: 'Home',
  components: {
    GridLayout
  }
}
</script>

<style lang="scss" scoped>
.home {
  color: var(--text-color);
}

/* Hero Section */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  color: var(--secondary-color);
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hero-label {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-family: var(--font-accent);
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 400;
  line-height: 1.1;
  margin: 0;
  font-family: var(--font-secondary);
}

.hero p {
  font-size: 1.2rem;
  font-weight: 300;
  max-width: 500px;
}

/* Brand Logos Section */
.brand-logos {
  padding: 4rem 0;
  background-color: #fff;
}

.brand-logos-content {
  display: flex;
  justify-content: center;
  
  img {
    max-width: 100%;
    height: auto;
  }
}

/* Video Preview Section */
.video-preview {
  padding: 6rem 0;
  background-color: var(--secondary-color);
}

.section-title {
  margin-bottom: 3rem;
  text-align: center;
  
  h2 {
    font-family: var(--font-secondary);
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--primary-color);
  }
}

.video-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.video-text {
  h3 {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.4;
    font-family: var(--font-secondary);
    color: var(--primary-color);
  }
}

.video-container {
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    
    .video-thumbnail {
      filter: brightness(1.15) contrast(1.05);
    }
    
    .video-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    
    .play-button {
      transform: scale(1.1);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }
  }
}

.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
}

.video-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease;
}

.play-button {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
  cursor: pointer;
  
  svg {
    width: 24px;
    height: 24px;
    margin-left: 5px;
    color: var(--primary-color);
  }
}

/* Value Proposition Section */
.value-prop {
  padding: 6rem 0;
  background-color: var(--primary-color);
  color: var(--secondary-color);
}

.value-content {
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
    font-family: var(--font-secondary);
  }
  
  p {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.6;
  }
}

.stats-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
}

.stat-item {
  text-align: center;
  
  .stat-number {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    font-family: var(--font-accent);
    color: var(--accent-color);
  }
  
  .stat-label {
    font-size: 1rem;
    font-weight: 300;
  }
}

/* Process Section */
.process {
  padding: 6rem 0;
  background-color: var(--secondary-color);
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.process-step {
  padding: 2rem;
  
  h3 {
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 1rem;
    font-family: var(--font-accent);
    color: var(--primary-color);
  }
  
  h4 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
    font-family: var(--font-secondary);
    color: var(--primary-color);
  }
  
  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.6;
  }
}

/* Testimonial Section */
.testimonial {
  padding: 6rem 0;
  background-color: var(--primary-color);
  color: var(--secondary-color);
}

.testimonial-content {
  text-align: center;
}

.quote-content {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.6;
  font-family: var(--font-secondary);
  
  p {
    margin-bottom: 2rem;
  }
}

.quote-author {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6;
}

/* Newsletter Section */
.newsletter {
  padding: 6rem 0;
  background-color: var(--secondary-color);
}

.newsletter-content {
  text-align: center;
  
  h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 2rem;
    font-family: var(--font-secondary);
    color: var(--primary-color);
  }
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  
  .email-input {
    padding: 1rem;
    border: 1px solid var(--primary-color);
    border-radius: 0;
    background-color: transparent;
    font-size: 1rem;
    color: var(--primary-color);
    
    &::placeholder {
      color: rgba(6, 29, 32, 0.5);
    }
  }
  
  .submit-button {
    padding: 1rem;
    border: none;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: darken(#061D20, 10%);
    }
  }
}

/* Mobile styles */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .section-title h2,
  .value-content h2 {
    font-size: 2rem;
  }
  
 .video-text h3 {
    font-size: 1.5rem;
  }
  
  .play-button {
    width: 60px;
    height: 60px;
  }
  
  .process-steps {
    grid-template-columns: 1fr;
  }
  
  .quote-content {
    font-size: 1.2rem;
  }
}
</style>