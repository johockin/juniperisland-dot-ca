<template>
  <div class="work">
    <section class="hero">
      <div class="container">
        <h1>Our Work</h1>
        <p class="hero-text">We create compelling video content that helps brands connect with their audience and achieve their goals.</p>
      </div>
    </section>

    <section class="work-grid">
      <div class="container">
        <div class="work-categories">
          <div class="work-category">
            <h2>Brand Films</h2>
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
          </div>

          <div class="work-category">
            <h2>Documentary Style</h2>
            <div class="video-grid">
              <div class="video-item">
                <div class="video-wrapper">
                  <iframe
                    src="https://player.vimeo.com/video/123456790"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                  ></iframe>
                </div>
                <h3>Behind the Scenes</h3>
                <p>An intimate look at the creative process behind the scenes.</p>
              </div>
            </div>
          </div>

          <div class="work-category">
            <h2>Commercial</h2>
            <div class="video-grid">
              <div class="video-item">
                <div class="video-wrapper">
                  <iframe
                    src="https://player.vimeo.com/video/123456791"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                  ></iframe>
                </div>
                <h3>Product Launch</h3>
                <p>Dynamic commercial spot highlighting innovative features.</p>
              </div>
            </div>
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
.work {
  padding-top: 80px; // Account for fixed navbar
}

.hero {
  padding: 6rem 0;
  background: #f8f8f8;
  text-align: center;

  h1 {
    margin-bottom: 1.5rem;
    font-size: 3.5rem;
  }

  .hero-text {
    max-width: 800px;
    margin: 0 auto;
    font-size: 1.25rem;
    color: #666;
  }
}

.work-grid {
  padding: 6rem 0;
}

.work-categories {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

.work-category {
  h2 {
    margin-bottom: 3rem;
    font-size: 2.5rem;
    text-align: center;
  }
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.video-item {
  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%; // 16:9 aspect ratio
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
  }

  p {
    color: #666;
    line-height: 1.6;
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
    padding: 4rem 0;

    h1 {
      font-size: 2.5rem;
    }

    .hero-text {
      font-size: 1rem;
    }
  }

  .work-grid {
    padding: 4rem 0;
  }

  .work-category {
    h2 {
      font-size: 2rem;
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