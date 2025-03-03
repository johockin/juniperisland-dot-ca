<template>
  <div class="home">
    <section class="hero">
      <div class="hero-video">
        <video autoplay loop muted playsinline>
          <source src="@/assets/hero-video.mp4" type="video/mp4">
        </video>
      </div>
      <div class="hero-content">
        <div class="container">
          <h4 class="hero-subtitle">TORONTO'S PREMIER VIDEO PRODUCTION COMPANY</h4>
          <h1 class="hero-title">Elevating Brands with Visually Compelling Video Content</h1>
          <p class="hero-text">Position Your Brand as Industry Leaders with Our Unique Storytelling Approach</p>
          <router-link to="/our-work" class="cta-button">Work With Us</router-link>
        </div>
      </div>
    </section>

    <section class="logos">
      <div class="container">
        <div class="logos-grid">
          <img v-for="i in 6" :key="i" :src="`@/assets/partner-${i}.png`" alt="Partner Logo" class="partner-logo" />
        </div>
      </div>
    </section>

    <section class="process">
      <div class="container">
        <h2>Here's how...</h2>
        <div class="process-grid">
          <div class="process-step">
            <h3>1.</h3>
            <h4>Discover & Define</h4>
            <p>We start with a thorough consultation to grasp your brand's specific needs. Delving into your story and market position, we craft a creative direction aligned with your goals.</p>
          </div>
          <div class="process-step">
            <h3>2.</h3>
            <h4>Create & Craft</h4>
            <p>Our experts turn your narrative into striking video content, covering scriptwriting, storyboarding, filming, and editing, to echo your brand's voice and vision.</p>
          </div>
          <div class="process-step">
            <h3>3.</h3>
            <h4>Deliver & Drive Impact</h4>
            <p>Deliver the final video content along with a tailored distribution strategy to maximize impact, engagement, and meet your marketing goals.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="sustainability">
      <div class="container">
        <div class="sustainability-grid">
          <div class="sustainability-item">
            <img src="@/assets/bullfrog.png" alt="Bullfrog Powered" />
            <h3>Proudly 100% Bullfrog Powered</h3>
          </div>
          <div class="sustainability-item">
            <img src="@/assets/green-guide.png" alt="Green Production Guide" />
            <h3>Our sets voluntarily adhere to the Green Production Guide for on-set sustainability</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <div class="container">
        <div class="testimonials-slider">
          <div class="testimonial">
            <img src="@/assets/quote.svg" alt="Quote" class="quote-icon" />
            <p class="testimonial-text">"The Juniper Island team are ideal partners, anticipating our needs and exceeding our expectations at every turn.</p>
            <p class="testimonial-text">They take time to understand the "why" of everything we're doing, and then put in the work to make sure it's as creative and beautiful as possible."</p>
            <div class="testimonial-author">
              <img src="@/assets/testimonial-1.jpg" alt="Andrew Addison" />
              <div>
                <h4>Andrew Addison</h4>
                <p>Vice-President, Communications, Marketing & Membership The Canadian Media Producers Association (CMPA)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="newsletter">
      <div class="container">
        <p>Our quarterly newsletter offers essential insights for brand marketers determined to make a real impact in a saturated market.</p>
        <form class="newsletter-form">
          <input type="email" placeholder="Your work email*" required />
          <button type="submit" class="submit-button">Subscribe</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
// Component logic will go here
</script>

<style lang="scss" scoped>
.home {
  padding-top: 80px; // Account for fixed navbar
}

.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;

  .hero-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

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
    color: #fff;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);

    .hero-subtitle {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    .hero-title {
      font-size: 4rem;
      margin-bottom: 1.5rem;
    }

    .hero-text {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-button {
      display: inline-block;
      background: #fff;
      color: #000;
      padding: 1rem 2rem;
      border-radius: 4px;
      font-weight: 600;
      transition: background-color 0.3s ease;

      &:hover {
        background: #f0f0f0;
      }
    }
  }
}

.logos {
  padding: 4rem 0;
  background: #f8f8f8;

  .logos-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;
    align-items: center;

    .partner-logo {
      max-width: 150px;
      height: auto;
      filter: grayscale(100%);
      transition: filter 0.3s ease;

      &:hover {
        filter: grayscale(0%);
      }
    }
  }
}

.process {
  padding: 6rem 0;

  h2 {
    text-align: center;
    margin-bottom: 4rem;
  }

  .process-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }

  .process-step {
    text-align: center;

    h3 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    h4 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
}

.sustainability {
  padding: 6rem 0;
  background: #f8f8f8;

  .sustainability-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    align-items: center;
  }

  .sustainability-item {
    text-align: center;

    img {
      max-width: 200px;
      margin-bottom: 2rem;
    }
  }
}

.testimonials {
  padding: 6rem 0;

  .testimonial {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;

    .quote-icon {
      width: 40px;
      margin-bottom: 2rem;
    }

    .testimonial-text {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-top: 2rem;

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }

      h4 {
        margin-bottom: 0.5rem;
      }
    }
  }
}

.newsletter {
  padding: 4rem 0;
  background: #000;
  color: #fff;
  text-align: center;

  p {
    max-width: 600px;
    margin: 0 auto 2rem;
  }

  .newsletter-form {
    display: flex;
    gap: 1rem;
    max-width: 500px;
    margin: 0 auto;

    input {
      flex: 1;
      padding: 1rem;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
    }

    .submit-button {
      background: #fff;
      color: #000;
      padding: 1rem 2rem;
      border-radius: 4px;
      font-weight: 600;
      transition: background-color 0.3s ease;

      &:hover {
        background: #f0f0f0;
      }
    }
  }
}

@media (max-width: 768px) {
  .hero {
    .hero-content {
      .hero-title {
        font-size: 2.5rem;
      }

      .hero-text {
        font-size: 1rem;
      }
    }
  }

  .logos {
    .logos-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .process {
    .process-grid {
      grid-template-columns: 1fr;
    }
  }

  .sustainability {
    .sustainability-grid {
      grid-template-columns: 1fr;
    }
  }

  .newsletter {
    .newsletter-form {
      flex-direction: column;
    }
  }
}
</style> 