<template>
  <div class="home">
    <section class="hero">
      <div class="hero-video">
        <video autoplay loop muted playsinline>
          <source src="@/assets/hero.mp4" type="video/mp4">
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
.home {
  padding-top: 80px; // Account for fixed navbar
}

.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  color: #fff;
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
    text-align: center;
    background: rgba(0, 0, 0, 0.4);

    h1 {
      font-size: 4rem;
      margin-bottom: 1.5rem;
    }

    .hero-text {
      font-size: 1.5rem;
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
      text-decoration: none;
      transition: background-color 0.3s ease;

      &:hover {
        background: #f0f0f0;
      }
    }
  }
}

.services {
  padding: 6rem 0;
  background: #f8f8f8;

  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 4rem;
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
    }

    p {
      color: #666;
      line-height: 1.6;
    }
  }
}

.featured-work {
  padding: 6rem 0;

  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 4rem;
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
      background: #000;
      border-radius: 8px;
      overflow: hidden;

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
    }

    p {
      color: #666;
      text-align: center;
      line-height: 1.6;
    }
  }

  .view-more {
    text-align: center;
    margin-top: 3rem;

    .view-more-button {
      display: inline-block;
      background: #000;
      color: #fff;
      padding: 1rem 2rem;
      border-radius: 4px;
      font-weight: 600;
      text-decoration: none;
      transition: background-color 0.3s ease;

      &:hover {
        background: #333;
      }
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
    max-width: 1000px;
    margin: 0 auto;
  }

  .sustainability-item {
    text-align: center;

    img {
      max-width: 200px;
      height: auto;
      margin-bottom: 2rem;
    }

    h3 {
      font-size: 1.25rem;
      line-height: 1.4;
    }
  }
}

.cta {
  padding: 6rem 0;
  background: #000;
  color: #fff;
  text-align: center;

  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.8;
  }

  .cta-button {
    display: inline-block;
    background: #fff;
    color: #000;
    padding: 1rem 2rem;
    border-radius: 4px;
    font-weight: 600;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover {
      background: #f0f0f0;
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