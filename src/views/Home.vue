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
</style>