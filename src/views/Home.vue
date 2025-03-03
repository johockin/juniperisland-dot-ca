<template>
  <div class="home">
    <section class="hero">
      <div class="hero-background">
        <video autoplay muted loop playsinline poster="/src/assets/video-thumbnail.jpg">
          <source src="/src/assets/hero.mp4" type="video/mp4">
        </video>
      </div>
      <div class="hero-content">
        <div class="container">
          <h1>TORONTO'S PREMIER VIDEO PRODUCTION COMPANY</h1>
          <p class="hero-text">Elevating Brands with Visually Compelling Video Content</p>
          <p class="hero-subtext">Position Your Brand as Industry Leaders with Our Unique Storytelling Approach</p>
          <router-link to="/contact" class="cta-button">Work with us</router-link>
        </div>
      </div>
    </section>

    <section class="welcome">
      <div class="container">
        <div class="logo-strip">
          <img src="/src/assets/logo-strip.png" alt="Client Logos" class="logo-strip-img">
        </div>
        <div class="welcome-content">
          <p class="welcome-text">Most brands are doing video for video's sake, entrusting the voice of the brand to the nearest employee with an iPhone.</p>
          <p class="welcome-text-highlight">But you're not most brands… you know video content can uniquely position your brand, amplify ad impact and establish deep connections with your customers.</p>
        </div>
        <div class="newsletter-signup">
          <div class="signup-icon">
            <img src="/src/assets/memo.png" alt="Memo" class="memo-icon">
          </div>
          <h3>Discover Our Process—receive a detailed overview of how we transform your brand's story through our video production process.</h3>
          <form class="signup-form">
            <input type="email" placeholder="Your work email" class="email-input">
            <button type="submit" class="submit-button">SUBMIT</button>
          </form>
          <div class="newsletter-checkbox">
            <input type="checkbox" id="newsletter">
            <label for="newsletter">Also subscribe to our newsletter</label>
          </div>
          <p class="thank-you-message">Thank you. We'll be in touch shortly.</p>
        </div>
      </div>
    </section>

    <section class="our-work">
      <div class="container">
        <div class="work-header">
          <h2 class="section-title">Our Work</h2>
          <router-link to="/work" class="view-work-link">></router-link>
        </div>
        <div class="work-stats">
          <p class="stat-item">🎬 300+ video projects</p>
          <p class="stat-item">👀 25 million+ views</p>
          <p class="stat-item">📺 Broadcast television</p>
          <p class="stat-item">📸 Instagram</p>
          <p class="stat-item">🎥 YouTube</p>
          <p class="stat-item">🎵 TikTok</p>
        </div>
      </div>
    </section>

    <section class="sustainability">
      <div class="container">
        <div class="sustainability-grid">
          <div class="sustainability-item">
            <img src="/src/assets/bullfrog.png" alt="Bullfrog Power Logo" class="sustainability-logo">
            <h3>Proudly 100% Bullfrog Powered</h3>
          </div>
          <div class="sustainability-item">
            <img src="/src/assets/green-guide.png" alt="Green Production Guide Logo" class="sustainability-logo">
            <h3>Our sets voluntarily adhere to the Green Production Guide for on-set sustainability</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="process">
      <div class="container">
        <h2 class="process-title">Here's how...</h2>
        <div class="process-steps">
          <div class="process-step">
            <h2 class="step-number">1.</h2>
            <h3 class="step-title">Discover & Define</h3>
            <p class="step-description">We start with a thorough consultation to grasp your brand's specific needs. Delving into your story and market position, we craft a creative direction aligned with your goals.</p>
          </div>
          <div class="process-step">
            <h2 class="step-number">2.</h2>
            <h3 class="step-title">Create & Craft</h3>
            <p class="step-description">Our experts turn your narrative into striking video content, covering scriptwriting, storyboarding, filming, and editing, to echo your brand's voice and vision.</p>
          </div>
          <div class="process-step">
            <h2 class="step-number">3.</h2>
            <h3 class="step-title">Deliver & Drive Impact</h3>
            <p class="step-description">Deliver the final video content along with a tailored distribution strategy to maximize impact, engagement, and meet your marketing goals.</p>
          </div>
        </div>
        <div class="process-cta">
          <router-link to="/contact" class="cta-button">Work with us</router-link>
          <router-link to="/work" class="view-work-button">View Our Work</router-link>
        </div>
      </div>
    </section>

    <section class="testimonial">
      <div class="container">
        <div class="testimonial-content">
          <h3 class="testimonial-quote">"</h3>
          <p class="testimonial-text">"The Juniper Island team are ideal partners, anticipating our needs and exceeding our expectations at every turn.</p>
          <p class="testimonial-text">They take time to understand the "why" of everything we're doing, and then put in the work to make sure it's as creative and beautiful as possible."</p>
          <p class="testimonial-author">Andrew Addison, Vice-President, Communications, Marketing & Membership</p>
          <p class="testimonial-company">The Canadian Media Producers Association (CMPA)</p>
        </div>
      </div>
    </section>

    <section class="newsletter">
      <div class="container">
        <h4 class="newsletter-title">Our quarterly newsletter offers essential insights for brand marketers determined to make a real impact in a saturated market.</h4>
        <form class="newsletter-form">
          <input type="email" placeholder="Your work email" class="email-input">
          <button type="submit" class="submit-button">Subscribe</button>
        </form>
        <p class="newsletter-thanks">Thanks for subscribing!</p>
      </div>
    </section>
  </div>
</template>

<script setup>
// Component logic will go here
</script>

<style lang="scss" scoped>
.home {
  padding-top: 80px;
  font-family: var(--font-primary);
  color: var(--text-color);
}

.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  color: var(--secondary-color);
  background: var(--primary-color);
  overflow: hidden;

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(12, 35, 64, 0.7); /* Navy blue overlay */
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .hero-content {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    z-index: 2;

    h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      font-weight: 700;
      letter-spacing: 0.03em;
      line-height: 1.1;
      text-transform: uppercase;
    }

    .hero-text {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      font-weight: 400;
      line-height: 1.4;
    }

    .hero-subtext {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      font-weight: 300;
      line-height: 1.4;
      opacity: 0.9;
    }

    .cta-button {
      margin-top: 1rem;
    }
  }
}

.welcome {
  padding: 5rem 0;
  background: #fff;
  
  .logo-strip {
    text-align: center;
    margin-bottom: 3rem;
    
    .logo-strip-img {
      max-width: 100%;
      height: auto;
    }
  }
  
  .welcome-content {
    max-width: 800px;
    margin: 0 auto 3rem;
    text-align: center;
    
    .welcome-text {
      font-size: 1.5rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      color: var(--primary-color);
    }
    
    .welcome-text-highlight {
      font-size: 1.5rem;
      line-height: 1.6;
      color: var(--primary-color);
      font-weight: 600;
    }
  }
  
  .newsletter-signup {
    max-width: 600px;
    margin: 3rem auto;
    text-align: center;
    
    .signup-icon {
      margin-bottom: 1rem;
      
      .memo-icon {
        width: 50px;
        height: auto;
      }
    }
    
    h3 {
      margin-bottom: 1.5rem;
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.5;
      color: var(--primary-color);
    }
    
    .signup-form {
      display: flex;
      margin-bottom: 1rem;
      
      .email-input {
        flex: 1;
        padding: 0.75rem 1rem;
        border: 1px solid #ddd;
        border-radius: 4px 0 0 4px;
        font-size: 1rem;
        font-family: var(--font-primary);
      }
      
      .submit-button {
        padding: 0.75rem 1.5rem;
        background: var(--gold-color);
        color: white;
        border: none;
        border-radius: 0 4px 4px 0;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.3s ease;
        
        &:hover {
          background: var(--dark-gold);
        }
      }
    }
    
    .newsletter-checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      
      input {
        margin-right: 0.5rem;
      }
    }
    
    .thank-you-message {
      font-size: 0.9rem;
      color: green;
      display: none;
    }
  }
}

.our-work {
  padding: 5rem 0;
  background: var(--primary-color);
  color: var(--secondary-color);
  
  .work-header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    
    .section-title {
      font-size: 2.5rem;
      margin: 0;
      margin-right: 1rem;
      font-weight: 700;
      color: var(--secondary-color);
    }
    
    .view-work-link {
      font-size: 2rem;
      color: var(--gold-color);
      text-decoration: none;
      
      &:hover {
        color: var(--light-gold);
      }
    }
  }
  
  .work-stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
    
    .stat-item {
      flex: 0 0 33.333%;
      text-align: center;
      font-size: 1.25rem;
      margin-bottom: 2rem;
      padding: 0 1rem;
      
      @media (max-width: 768px) {
        flex: 0 0 50%;
      }
      
      @media (max-width: 576px) {
        flex: 0 0 100%;
      }
    }
  }
}

.sustainability {
  padding: 5rem 0;
  background: #fff;

  .sustainability-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .sustainability-item {
    text-align: center;

    .sustainability-logo {
      height: 60px;
      margin-bottom: 1.5rem;
      object-fit: contain;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.8;
      }
    }

    h3 {
      font-size: 1.25rem;
      line-height: 1.4;
      font-weight: 300;
      color: var(--primary-color);
    }
  }
}

.process {
  padding: 5rem 0;
  background: var(--primary-color);
  color: var(--secondary-color);
  
  .process-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--secondary-color);
  }
  
  .process-steps {
    max-width: 1000px;
    margin: 0 auto 3rem;
  }
  
  .process-step {
    margin-bottom: 3rem;
    text-align: center;
    
    .step-number {
      font-size: 3rem;
      color: var(--gold-color);
      margin-bottom: 0.5rem;
    }
    
    .step-title {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: var(--secondary-color);
    }
    
    .step-description {
      max-width: 800px;
      margin: 0 auto;
      font-size: 1.1rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.9);
    }
  }
  
  .process-cta {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: center;
    }
    
    .cta-button, .view-work-button {
      padding: 0.75rem 1.5rem;
    }
    
    .view-work-button {
      background: transparent;
      border: 1px solid var(--secondary-color);
      color: var(--secondary-color);
      
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }
}

.testimonial {
  padding: 5rem 0;
  background: #fff;
  
  .testimonial-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    
    .testimonial-quote {
      font-size: 5rem;
      color: var(--gold-color);
      margin-bottom: -2rem;
      line-height: 1;
    }
    
    .testimonial-text {
      font-size: 1.5rem;
      line-height: 1.6;
      margin-bottom: 1rem;
      font-style: italic;
      color: var(--primary-color);
    }
    
    .testimonial-author {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
      color: var(--primary-color);
    }
    
    .testimonial-company {
      font-size: 1rem;
      color: var(--primary-color);
      opacity: 0.8;
    }
  }
}

.newsletter {
  padding: 5rem 0;
  background: var(--primary-color);
  color: var(--secondary-color);
  
  .newsletter-title {
    max-width: 800px;
    margin: 0 auto 2rem;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.6;
  }
  
  .newsletter-form {
    display: flex;
    max-width: 500px;
    margin: 0 auto 1rem;
    
    @media (max-width: 576px) {
      flex-direction: column;
    }
    
    .email-input {
      flex: 1;
      padding: 0.75rem 1rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px 0 0 4px;
      font-size: 1rem;
      font-family: var(--font-primary);
      color: var(--secondary-color);
      
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
      
      @media (max-width: 576px) {
        border-radius: 4px;
        margin-bottom: 1rem;
      }
    }
    
    .submit-button {
      padding: 0.75rem 1.5rem;
      background: var(--gold-color);
      color: white;
      border: none;
      border-radius: 0 4px 4px 0;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s ease;
      
      &:hover {
        background: var(--dark-gold);
      }
      
      @media (max-width: 576px) {
        border-radius: 4px;
      }
    }
  }
  
  .newsletter-thanks {
    text-align: center;
    font-size: 0.9rem;
    color: var(--gold-color);
    display: none;
  }
}

@media (max-width: 768px) {
  .hero {
    .hero-content {
      h1 {
        font-size: 2.5rem;
      }

      .hero-text {
        font-size: 1.25rem;
      }
      
      .hero-subtext {
        font-size: 1rem;
      }
    }
  }
  
  .welcome {
    .welcome-content {
      .welcome-text, .welcome-text-highlight {
        font-size: 1.25rem;
      }
    }
  }

  .sustainability {
    .sustainability-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }
  
  .process {
    .process-step {
      .step-number {
        font-size: 2.5rem;
      }
      
      .step-title {
        font-size: 1.75rem;
      }
      
      .step-description {
        font-size: 1rem;
      }
    }
  }
  
  .testimonial {
    .testimonial-content {
      .testimonial-text {
        font-size: 1.25rem;
      }
    }
  }
}
</style>