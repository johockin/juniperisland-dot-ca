<template>
  <div class="home">
    <section class="hero">
      <div class="hero-background">
        <video autoplay muted loop playsinline poster="@/assets/video-thumbnail.jpg">
          <source src="@/assets/hero.mp4" type="video/mp4">
        </video>
      </div>
      <div class="hero-content">
        <div class="container hero-container">
          <div class="hero-text-container">
            <p class="hero-label">TORONTO'S PREMIER VIDEO PRODUCTION COMPANY</p>
            <h1 class="hero-title">
              Elevating<br>
              Brands with<br>
              Visually<br>
              Compelling<br>
              Video Content
            </h1>
            <p class="hero-subtext">Position Your Brand as Industry Leaders with<br>Our Unique Storytelling Approach</p>
            <a href="#contact" class="cta-button">WORK WITH US</a>
          </div>
        </div>
      </div>
    </section>

    <section class="trusted-brands">
      <div class="container">
        <div class="brands-grid">
          <img src="@/assets/logo-strip.png" alt="Trusted brands including Olympus, RedBull, Nike, Dentsu Creative, Riley, Subway" class="brands-image">
        </div>
      </div>
    </section>

    <section class="process-guide-section">
      <div class="container">
        <div class="process-guide">
          <h3>Discover Our Process—receive a detailed overview of how we transform your brand's story through our video production process.</h3>
          <form class="guide-form">
            <div class="form-group">
              <input type="email" placeholder="Your work email" class="email-input" required>
              <button type="submit" class="submit-button">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <section class="brand-message">
      <div class="container">
        <div class="message-content">
          <p class="message-text">Most brands are doing video for video's sake, entrusting the voice of the brand to the nearest employee with an iPhone.</p>
          <p class="message-text-highlight">But you're not most brands… you know video content can uniquely position your brand, amplify ad impact and establish deep connections with your customers.</p>
          <router-link to="/work" class="view-work-link">Our Work &gt;</router-link>
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
            <button type="submit" class="submit-button">Subscribe</button>
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

.hero {
  position: relative;
  height: 70vh;
  min-height: 450px;
  overflow: hidden;
}

.hero-background {
  position: relative;
  height: 100%;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(rgba(12, 35, 64, 0.4), rgba(12, 35, 64, 0.4)),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4l-2-2V24v-2l2-2v-4l-2-2V8l4-4 4 4v6l-2 2v4l2 2v2l-2 2v4l2 2v6l-4 4-4-4v-6l2-2zm0-4l2-2v-4l-2-2V24z'/%3E%3C/g%3E%3C/svg%3E");
    z-index: 1;
    pointer-events: none;
  }
}

.hero-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  filter: brightness(0.7);
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  color: #ffffff;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  position: relative;
}

.hero-text-container {
  text-align: left;
  max-width: 800px;
  padding-left: 2rem;
  margin-top: 40px;
}

.hero-label {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
}

.hero-title {
  font-family: 'Caudex', Georgia, serif;
  font-size: 4.5rem;
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #e6d08a;
  letter-spacing: -0.02em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  visibility: visible !important;
}

.hero-subtext {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 300;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: var(--primary-color);
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cta-button:hover {
  background: var(--dark-gold);
  transform: translateY(-3px);
}

.trusted-brands {
  padding: 3rem 0;
  background-color: #0c2340;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.brands-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
}

.brands-image {
  max-width: 100%;
  height: auto;
  filter: brightness(0.9) grayscale(100%);
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(1) grayscale(0%);
  }
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

.brand-message {
  padding: 6rem 0;
  background-color: var(--secondary-color);
}

.message-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.message-text {
  font-size: 1.6rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #333;
}

.message-text-highlight {
  font-size: 1.6rem;
  line-height: 1.6;
  color: #000;
  font-weight: 600;
  margin-bottom: 2rem;
}

.view-work-link {
  display: inline-block;
  font-size: 1.2rem;
  color: var(--primary-color);
  font-weight: 600;
  text-decoration: none;
  margin-top: 1rem;
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
</style>