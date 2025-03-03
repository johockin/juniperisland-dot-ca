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
          <h1>Video Production in Toronto</h1>
          <p class="hero-text">We create compelling video content that helps brands connect with their audience and achieve their goals.</p>
          <router-link to="/contact" class="cta-button">Get Started</router-link>
        </div>
      </div>
    </section>

    <section class="services">
      <div class="container">
        <h2>Our Services</h2>
        <div class="services-grid">
          <div class="service-item">
            <h3>Brand Films</h3>
            <p>Cinematic storytelling that captures your brand's essence and connects with your audience on an emotional level.</p>
          </div>
          <div class="service-item">
            <h3>Commercial Production</h3>
            <p>High-impact video content designed to showcase your products and services in their best light.</p>
          </div>
          <div class="service-item">
            <h3>Documentary Style</h3>
            <p>Authentic storytelling that brings real stories and experiences to life in a compelling way.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="featured-work">
      <div class="container">
        <h2>Featured Work</h2>
        <div class="video-grid">
          <div class="video-item">
            <div class="video-wrapper">
              <iframe
                src="https://player.vimeo.com/video/123456789"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </div>
            <h3>CMPA Brand Film</h3>
            <p>A cinematic brand film showcasing the impact of Canadian media producers.</p>
          </div>
        </div>
        <div class="view-more">
          <router-link to="/work" class="view-more-button">View More Work</router-link>
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

    <section class="cta">
      <div class="container">
        <h2>Ready to Create?</h2>
        <p>Let's discuss how we can bring your vision to life.</p>
        <router-link to="/contact" class="cta-button">Get in Touch</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
// Component logic will go here
</script>

<style lang="scss" scoped>
:root {
  --primary-color: #000000;
  --secondary-color: #ffffff;
  --text-color: #333333;
  --accent-color: #f8f8f8;
  --font-primary: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --font-secondary: 'Georgia', serif;
}

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
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    z-index: 2;

    h1 {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.1;
    }

    .hero-text {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      font-weight: 300;
      line-height: 1.4;
    }

    .cta-button {
      display: inline-block;
      background: var(--secondary-color);
      color: var(--primary-color);
      padding: 1rem 2rem;
      border-radius: 4px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-size: 1rem;

      &:hover {
        background: rgba(255, 255, 255, 0.9);
        transform: translateY(-2px);
      }
    }
  }
}

.services {
  padding: 6rem 0;
  background: var(--accent-color);

  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 4rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .service-item {
    text-align: center;
    padding: 2rem;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 600;
      letter-spacing: -0.01em;
    }

    p {
      color: #666;
      line-height: 1.6;
      font-weight: 300;
    }
  }
}

.featured-work {
  padding: 6rem 0;

  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 4rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .video-grid {
    max-width: 800px;
    margin: 0 auto;
  }

  .video-item {
    .video-wrapper {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      margin-bottom: 1.5rem;
      background: var(--primary-color);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      text-align: center;
      font-weight: 600;
      letter-spacing: -0.01em;
    }

    p {
      color: #666;
      text-align: center;
      line-height: 1.6;
      font-weight: 300;
    }
  }

  .view-more {
    text-align: center;
    margin-top: 3rem;

    .view-more-button {
      display: inline-block;
      background: var(--primary-color);
      color: var(--secondary-color);
      padding: 1rem 2rem;
      border-radius: 4px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-size: 1rem;

      &:hover {
        background: #333;
        transform: translateY(-2px);
      }
    }
  }
}

.sustainability {
  padding: 6rem 0;
  background: var(--accent-color);

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
      color: #666;
    }
  }
}

.cta {
  padding: 6rem 0;
  background: var(--primary-color);
  color: var(--secondary-color);
  text-align: center;

  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.8;
    font-weight: 300;
    line-height: 1.4;
  }

  .cta-button {
    display: inline-block;
    background: var(--secondary-color);
    color: var(--primary-color);
    padding: 1rem 2rem;
    border-radius: 4px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 1rem;

    &:hover {
      background: rgba(255, 255, 255, 0.9);
      transform: translateY(-2px);
    }
  }
}

@media (max-width: 768px) {
  .hero {
    .hero-content {
      h1 {
        font-size: 2.5rem;
      }

      .hero-text {
        font-size: 1.125rem;
      }
    }
  }

  .services {
    padding: 4rem 0;

    h2 {
      font-size: 2rem;
    }

    .services-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  .featured-work {
    padding: 4rem 0;

    h2 {
      font-size: 2rem;
    }
  }

  .sustainability {
    padding: 4rem 0;

    .sustainability-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  .cta {
    padding: 4rem 0;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
}
</style>