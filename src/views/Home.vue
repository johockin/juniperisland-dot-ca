<template>
  <div class="home">
    <section class="hero">
      <div class="hero-background">
        <video autoplay muted loop playsinline poster="@/assets/video-thumbnail.jpg">
          <source src="@/assets/hero.mp4" type="video/mp4">
        </video>
      </div>
      <div class="technical-overlay"></div>
      <div class="hero-content">
        <div class="hero-text-container">
          <div class="hero-label">Branded Content & High-End Video Production for Bold Brands</div>
          <h1 class="hero-title">Brand Stories.<br>Beautifully Filmed.</h1>
          <p class="hero-subtext">Great Stories Deserve an Audience—We Make Sure They Find One</p>
          <div class="hero-cta-container">
            <a href="#contact" class="cta-button">
              <div class="button-content">WORK WITH US</div>
              <div class="scan-line"></div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="trusted-brands">
      <div class="container">
        <div class="brands-grid">
          <router-link to="/work" class="brands-image-container">
            <img src="@/assets/logo-strip.png" alt="Trusted brands including Olympus, RedBull, Nike, Dentsu Creative, Riley, Subway" class="brands-image">
          </router-link>
        </div>
      </div>
    </section>

    <section class="video-preview">
      <div class="container">
        <div class="video-preview-content">
          <div class="video-preview-text">
            <h3>The fastest way to know if we're the right fit?</h3>
            <p>Watch this 60-second video.</p>
          </div>
          <div class="video-preview-container">
            <img src="@/assets/video-thumbnail.jpg" alt="Preview of our 60-second introduction video" class="video-thumbnail">
            <button class="play-button">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M12 8L24 16L12 24V8Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="value-proposition">
      <div class="value-content">
        <h2 class="value-headline">We Know What Makes Audiences Watch, Share, and Engage.</h2>
        <p class="value-copy">Brands don't struggle with storytelling—they struggle with getting their stories seen and shared. We craft social-first, strategy-driven videos that don't just look great—they break through.</p>
        
        <div class="value-stats">
          <div class="stat-card">
            <div class="stat-number">1M+</div>
            <div class="stat-label">Average Views per Campaign</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">300%</div>
            <div class="stat-label">Average ROI for Clients</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">50+</div>
            <div class="stat-label">Brands Trust Us</div>
          </div>
        </div>

        <div class="value-cta">
          <a href="/work" class="cta-button">See Our Work</a>
        </div>
      </div>
    </section>

    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <p>🎬 300+ video projects</p>
          </div>
          <div class="stat-item">
            <p>👀 25 million+ views</p>
          </div>
          <div class="stat-item">
            <p>📺 Broadcast television</p>
          </div>
          <div class="stat-item">
            <p>📸 Instagram</p>
          </div>
          <div class="stat-item">
            <p>🎥 YouTube</p>
          </div>
          <div class="stat-item">
            <p>🎵 TikTok</p>
          </div>
        </div>
      </div>
    </section>

    <section class="sustainability">
      <div class="container">
        <div class="sustainability-content">
          <div class="sustainability-item">
            <img src="@/assets/bullfrog.png" alt="Bullfrog Power" class="sustainability-logo">
            <p>Proudly 100% Bullfrog Powered</p>
          </div>
          <div class="sustainability-item">
            <img src="@/assets/green-guide.png" alt="Green Production Guide" class="sustainability-logo">
            <p>Our sets voluntarily adhere to the Green Production Guide for on-set sustainability</p>
          </div>
        </div>
      </div>
    </section>

    <section class="process-section">
      <div class="container">
        <h2 class="process-title">Here's how...</h2>
        <div class="process-steps">
          <div class="process-step">
            <h3 class="step-number">1.</h3>
            <h3 class="step-title">Discover & Define</h3>
            <p class="step-description">We start with a thorough consultation to grasp your brand's specific needs. Delving into your story and market position, we craft a creative direction aligned with your goals.</p>
          </div>
          <div class="process-step">
            <h3 class="step-number">2.</h3>
            <h3 class="step-title">Create & Craft</h3>
            <p class="step-description">Our experts turn your narrative into striking video content, covering scriptwriting, storyboarding, filming, and editing, to echo your brand's voice and vision.</p>
          </div>
          <div class="process-step">
            <h3 class="step-number">3.</h3>
            <h3 class="step-title">Deliver & Drive Impact</h3>
            <p class="step-description">Deliver the final video content along with a tailored distribution strategy to maximize impact, engagement, and meet your marketing goals.</p>
          </div>
        </div>
        <div class="process-cta">
          <a href="#contact" class="cta-button">WORK WITH US</a>
          <router-link to="/work" class="secondary-button">VIEW OUR WORK</router-link>
        </div>
      </div>
    </section>

    <section class="testimonial-section">
      <div class="container">
        <div class="testimonial">
          <div class="quote-mark">"</div>
          <div class="testimonial-content">
            <p class="testimonial-text">"The Juniper Island team are ideal partners, anticipating our needs and exceeding our expectations at every turn.</p>
            <p class="testimonial-text">They take time to understand the "why" of everything we're doing, and then put in the work to make sure it's as creative and beautiful as possible."</p>
            <div class="testimonial-author">
              <p class="author-name">Andrew Addison, Vice-President, Communications, Marketing & Membership</p>
              <p class="author-company">The Canadian Media Producers Association (CMPA)</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="newsletter-section" id="contact">
      <div class="container">
        <div class="newsletter-content">
          <h2>Our quarterly newsletter offers essential insights for brand marketers determined to make a real impact in a saturated market.</h2>
          <form class="newsletter-form">
            <input type="email" placeholder="Your work email" class="email-input" required>
            <button type="submit" class="submit-button">
              <div class="button-content">Subscribe</div>
              <div class="scan-line"></div>
            </button>
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
.home {
  padding-top: 0;
  font-family: var(--font-primary);
  color: var(--text-color);
}

.process-guide-section {
  padding: 4rem 0;
  background-color: var(--secondary-color);
}

.process-guide {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem;
  background: #f8f8f8;
  border-radius: 8px;
  text-align: center;
}

.process-guide h3 {
  margin-bottom: 2rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--primary-color);
}

.guide-form {
  margin-top: 2rem;
}

.form-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: center;
}

.email-input {
  flex: 0 1 400px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.submit-button {
  padding: 1rem 2rem;
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
}

.stats-section {
  padding: 4rem 0;
  background-color: #f8f8f8;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
}

.sustainability {
  padding: 4rem 0;
  background-color: #0c2340;
  color: white;
}

.sustainability-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.sustainability-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 400px;
}

.sustainability-logo {
  width: 60px;
  height: auto;
}

.process-section {
  padding: 6rem 0;
  background-color: #a8c5c9;
  text-align: center;
}

.process-title {
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: var(--primary-color);
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 4rem;
}

.process-step {
  text-align: center;
}

.step-number {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.step-title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

.step-description {
  font-size: 1rem;
  line-height: 1.6;
}

.process-cta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
}

.secondary-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: transparent;
  color: var(--primary-color);
  text-decoration: none;
  border: 2px solid var(--primary-color);
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.secondary-button:hover {
  background: var(--primary-color);
  color: white;
}

.testimonial-section {
  padding: 6rem 0;
  background-color: var(--primary-color);
  color: white;
}

.testimonial {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding: 2rem;
}

.quote-mark {
  font-size: 6rem;
  position: absolute;
  top: -2rem;
  left: -2rem;
  color: var(--accent-color);
  font-family: var(--font-secondary);
}

.testimonial-content {
  position: relative;
  z-index: 1;
}

.testimonial-text {
  font-size: 1.4rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-author {
  margin-top: 2rem;
}

.author-name {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.author-company {
  opacity: 0.8;
}

.newsletter-section {
  padding: 6rem 0;
  background-color: #e6d08a;
}

.newsletter-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.newsletter-content h2 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--primary-color);
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 3.8rem;
  }
}

@media (max-width: 768px) {
  .hero-text-container {
    padding-left: 0;
    text-align: center;
  }
  
  .hero-title {
    font-size: 3.2rem;
  }
  
  .hero-label {
    font-size: 0.9rem;
  }
  
  .hero-subtext {
    font-size: 1.2rem;
  }
  
  .form-group {
    flex-direction: column;
  }
  
  .process-steps {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .process-cta {
    flex-direction: column;
    align-items: center;
  }
  
  .newsletter-form {
    flex-direction: column;
  }
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: all var(--transition-speed) ease;
  background-color: rgba(12, 35, 44, 0.9);
}

.navbar.scrolled {
  background: #0c232c;
  padding: 1rem 0;
}





.video-thumbnail {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--tactical-red-dark);
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 59, 48, 0.3);

  svg {
    width: 32px;
    height: 32px;
    margin-left: 4px;
  }
}

@media (max-width: 768px) {
  .video-preview {
    padding: 4rem 0;
  }

  .video-preview-text {
    h3 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  .play-button {
    width: 60px;
    height: 60px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
}
</style>