<template>
  <div class="home">
    <section class="hero">
      <div class="hero-background">
        <video autoplay muted loop playsinline poster="@/assets/video-thumbnail.jpg">
          <source src="@/assets/hero.mp4" type="video/mp4">
        </video>
      </div>
      <div class="hero-content">
        <div class="container">
          <h1>TORONTO'S PREMIER VIDEO PRODUCTION COMPANY</h1>
          <p class="hero-text">Elevating Brands with Visually Compelling Video Content</p>
          <p class="hero-subtext">Position Your Brand as Industry Leaders with Our Unique Storytelling Approach</p>
          <a href="#contact" class="cta-button">WORK WITH US</a>
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
  height: 100vh;
  min-height: 800px;
  overflow: hidden;
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
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.4);
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.hero-text {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.hero-subtext {
  font-size: 1.2rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: var(--primary-color);
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
}

.cta-button:hover {
  background: var(--dark-gold);
  transform: translateY(-3px);
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
  font-family: serif;
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

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-text {
    font-size: 1.5rem;
  }
  
  .hero-subtext {
    font-size: 1rem;
  }
  
  .message-text, .message-text-highlight {
    font-size: 1.4rem;
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
</style>