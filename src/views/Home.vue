<template>
  <div class="home">
    <!-- Hero Section: Full-Width Video -->
    <section class="hero full-width">
      <div class="video-background">
        <video autoplay muted loop playsinline poster="@/assets/video-thumbnail.jpg">
          <source src="@/assets/hero.mp4" type="video/mp4">
        </video>
        <div class="overlay"></div>
      </div>
      
      <div class="grid">
        <div class="hero-content col-span-7 col-start-3">
          <div class="label">Branded Content & High-End Video Production</div>
          <h1>We help brands tell better stories.</h1>
          <p>You'll know you're telling your brand's story well when the audience comes clamouring to you</p>
        </div>
      </div>
    </section>
    
    <!-- Introduction Strip -->
    <section class="intro section-sm bg-neutral">
      <div class="grid">
        <div class="intro-content col-span-10 col-start-2">
          <div class="partners-strip">
            <img src="@/assets/logo-strip.png" alt="Trusted brands including Olympus, RedBull, Nike, Dentsu Creative, Riley, Subway" class="partners-image">
          </div>
        </div>
      </div>
    </section>
    
    <!-- Video Preview Section -->
    <section class="video-feature section bg-light">
      <div class="grid">
        <div class="section-heading col-span-12">
          <div class="label">Our Approach</div>
        </div>
        
        <div class="feature-content col-span-6 col-start-4">
          <h2>Watch this 60-second video—because the fastest way to know if we're your people is to hear it straight from us.</h2>
        </div>
        
        <div class="feature-media col-span-10 col-start-2">
          <div class="video-preview">
            <div class="image-container">
              <img src="@/assets/video-thumbnail.jpg" alt="Our team explaining how we can help your brand" class="image-full">
              <div class="overlay">
                <button class="play-button" aria-label="Play video">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M12 8L24 16L12 24V8Z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Stats Section -->
    <section class="stats-section section bg-dark">
      <div class="grid">
        <div class="stats-heading col-span-6 col-start-4 text-center">
          <h2>We Know What Makes Audiences Watch, Share, and Engage.</h2>
          <p>Brands don't struggle with storytelling—they struggle with getting their stories seen and shared.</p>
        </div>
        
        <div class="stats-content col-span-12">
          <div class="stats-grid">
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
        </div>
      </div>
    </section>
    
    <!-- Services/Process Grid -->
    <section class="process-section section bg-light">
      <div class="grid">
        <div class="section-heading col-span-12">
          <div class="label">Our Process</div>
        </div>
        
        <div class="process-grid col-span-12">
          <div class="process-card">
            <div class="process-number">01</div>
            <h3>Discover & Define</h3>
            <p>We start with a thorough consultation to grasp your brand's specific needs. Delving into your story and market position, we craft a creative direction aligned with your goals.</p>
          </div>
          
          <div class="process-card">
            <div class="process-number">02</div>
            <h3>Create & Craft</h3>
            <p>Our experts turn your narrative into striking video content, covering scriptwriting, storyboarding, filming, and editing, to echo your brand's voice and vision.</p>
          </div>
          
          <div class="process-card">
            <div class="process-number">03</div>
            <h3>Deliver & Drive Impact</h3>
            <p>Deliver the final video content along with a tailored distribution strategy to maximize impact, engagement, and meet your marketing goals.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Featured Projects Grid -->
    <section class="projects-section section bg-neutral">
      <div class="grid">
        <div class="section-heading col-span-12">
          <div class="label">Selected Work</div>
        </div>
        
        <div class="projects-grid col-span-12">
          <router-link to="/work" class="project-card">
            <div class="image-container">
              <img src="@/assets/video-thumbnail.jpg" alt="Project 1" class="image-full">
              <div class="overlay">
                <div class="project-info">
                  <div class="project-title">Brand Film</div>
                  <div class="project-client">Client Name</div>
                </div>
              </div>
            </div>
          </router-link>
          
          <router-link to="/work" class="project-card">
            <div class="image-container">
              <img src="@/assets/video-thumbnail.jpg" alt="Project 2" class="image-full">
              <div class="overlay">
                <div class="project-info">
                  <div class="project-title">Social Campaign</div>
                  <div class="project-client">Client Name</div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        
        <div class="view-more col-span-12 text-center">
          <router-link to="/work" class="btn btn-outline">View All Projects</router-link>
        </div>
      </div>
    </section>
    
    <!-- Testimonial Section -->
    <section class="testimonial-section section bg-dark">
      <div class="grid">
        <div class="testimonial-content col-span-8 col-start-3">
          <blockquote>
            "The Juniper Island team are ideal partners, anticipating our needs and exceeding our expectations at every turn. They take time to understand the "why" of everything we're doing, and then put in the work to make sure it's as creative and beautiful as possible."
            <cite>
              <span>Andrew Addison</span>
              <span>Vice-President, Communications, Marketing & Membership</span>
              <span>The Canadian Media Producers Association (CMPA)</span>
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
    
    <!-- Newsletter Section -->
    <section class="newsletter-section section bg-light">
      <div class="grid">
        <div class="newsletter-content col-span-6 col-start-4 text-center">
          <h2>Subscribe to our quarterly industry insights</h2>
          <p>Essential perspectives for brand marketers determined to make a real impact in a saturated market.</p>
          
          <form class="newsletter-form">
            <input type="email" placeholder="Your work email" required>
            <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
/* Hero Section */
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  color: var(--secondary-color);
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: var(--z-negative);
  background-color: var(--primary-color); /* Fallback for missing video */
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  color: var(--primary-color); /* Make hero text dark for fallback */
  max-width: 900px; /* Make hero text area wider */
  width: 100%;
  margin: 0 auto;
  
  .label {
    font-family: var(--font-accent);
    font-size: var(--text-sm);
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  
  h1 {
    font-size: var(--text-6xl);
    line-height: 1.1;
    margin-bottom: var(--space-4);
    font-weight: 600; /* Make headline bolder */
    max-width: none; /* Remove restrictive max-width */
  }
  
  p {
    font-size: var(--text-xl);
    font-weight: 300;
    max-width: 700px; /* Make subhead wider */
  }
}

/* Introduction Section */
.intro {
  overflow: hidden;
}

.partners-strip {
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    max-width: 1000px;
    height: auto;
  }
}

/* Section Headings */
.section-heading {
  margin-bottom: var(--space-8);
  text-align: center;
  
  .label {
    display: inline-block;
    font-family: var(--font-accent);
    font-size: var(--text-sm);
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: currentColor;
      opacity: 0.5;
    }
  }
}

/* Video Preview Section */
.feature-content {
  text-align: center;
  margin-bottom: var(--space-6);
  
  h2 {
    font-size: var(--text-2xl);
    line-height: 1.4;
  }
}

.video-preview {
  position: relative;
  
  .image-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    overflow: hidden;
    
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-base), filter var(--transition-base);
    }
    
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.2);
      transition: background-color var(--transition-base);
    }
    
    &:hover {
      img {
        transform: scale(1.05);
        filter: brightness(1.1);
      }
      
      .overlay {
        background-color: rgba(0, 0, 0, 0.3);
      }
      
      .play-button {
        transform: scale(1.1);
      }
    }
  }
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
  cursor: pointer;
  transition: transform var(--transition-base);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  
  svg {
    width: 24px;
    height: 24px;
    margin-left: 4px;
    color: var(--primary-color);
  }
}

/* Stats Section */
.stats-heading {
  margin-bottom: var(--space-8);
  
  h2 {
    margin-bottom: var(--space-4);
  }
  
  p {
    opacity: 0.8;
  }
}

.stats-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: var(--space-6);
}

.stat-item {
  text-align: center;
  
  .stat-number {
    font-family: var(--font-accent);
    font-size: var(--text-5xl);
    margin-bottom: var(--space-2);
    color: var(--accent-color);
  }
  
  .stat-label {
    font-size: var(--text-base);
    font-weight: 300;
    opacity: 0.8;
  }
}

/* Process Section */
.process-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.process-card {
  padding: var(--space-6);
  
  .process-number {
    font-family: var(--font-accent);
    font-size: var(--text-4xl);
    color: var(--accent-color);
    margin-bottom: var(--space-4);
  }
  
  h3 {
    font-size: var(--text-xl);
    margin-bottom: var(--space-3);
  }
  
  p {
    font-size: var(--text-base);
    opacity: 0.8;
  }
}

/* Projects Section */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.project-card {
  overflow: hidden;
  
  .image-container {
    position: relative;
    padding-bottom: 75%; /* 4:3 aspect ratio */
    
    img {
      transition: transform var(--transition-inout), filter var(--transition-inout);
    }
    
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      padding: var(--space-4);
      transition: background-color var(--transition-inout);
      
      .project-info {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity var(--transition-inout), transform var(--transition-inout);
        color: var(--secondary-color);
      }
    }
    
    &:hover {
      img {
        transform: scale(1.05);
        filter: brightness(0.8);
      }
      
      .overlay {
        background-color: rgba(0, 0, 0, 0.3);
        
        .project-info {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }
  
  .project-title {
    font-family: var(--font-secondary);
    font-size: var(--text-xl);
    margin-bottom: var(--space-1);
  }
  
  .project-client {
    font-size: var(--text-sm);
    opacity: 0.8;
  }
}

/* Testimonial Section */
.testimonial-content {
  blockquote {
    font-family: var(--font-secondary);
    font-size: var(--text-2xl);
    line-height: 1.5;
    text-align: center;
    margin: 0;
    
    cite {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
      margin-top: var(--space-6);
      font-style: normal;
      font-family: var(--font-primary);
      font-size: var(--text-base);
      opacity: 0.8;
      
      span:first-child {
        font-weight: 500;
        opacity: 1;
      }
    }
  }
}

/* Newsletter Section */
.newsletter-content {
  h2 {
    margin-bottom: var(--space-3);
  }
  
  p {
    margin-bottom: var(--space-6);
    opacity: 0.8;
  }
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 400px;
  margin: 0 auto;
  
  input {
    padding: var(--space-3);
    border: 1px solid currentColor;
    background-color: transparent;
    font-size: var(--text-base);
    
    &::placeholder {
      opacity: 0.5;
    }
  }
  
  button {
    width: 100%;
  }
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .hero-content {
    h1 {
      font-size: var(--text-5xl);
    }
  }
}

@media (max-width: 991px) {
  .hero-content {
    h1 {
      font-size: var(--text-4xl);
    }
    
    p {
      font-size: var(--text-lg);
    }
  }
  
  .process-grid {
    grid-template-columns: repeat(1, 1fr);
    gap: var(--space-8);
  }
  
  .testimonial-content {
    blockquote {
      font-size: var(--text-xl);
    }
  }
  
  .newsletter-content {
    grid-column: span 8;
    grid-column-start: 3;
  }
}

@media (max-width: 767px) {
  .hero {
    min-height: 500px;
  }
  
  .hero-content {
    grid-column: span 10;
    grid-column-start: 2;
    
    h1 {
      font-size: var(--text-3xl);
    }
    
    p {
      font-size: var(--text-base);
    }
  }
  
  .feature-content {
    grid-column: span 10;
    grid-column-start: 2;
    
    h2 {
      font-size: var(--text-xl);
    }
  }
  
  .stats-heading {
    grid-column: span 10;
    grid-column-start: 2;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonial-content {
    grid-column: span 10;
    grid-column-start: 2;
  }
  
  .newsletter-content {
    grid-column: span 10;
    grid-column-start: 2;
  }
  
  .play-button {
    width: 60px;
    height: 60px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
}
</style>