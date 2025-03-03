<template>
  <div class="our-work">
    <section class="hero">
      <div class="container">
        <img src="/src/assets/logo.png" alt="Juniper Island Logo" class="hero-logo">
        <h1>Our Work</h1>
        <p class="hero-text">Discover how we elevate brands with our diverse range of video styles and formats, tailored to make a lasting impact in the competitive marketplace.</p>
      </div>
    </section>

    <section class="work-grid">
      <div class="container">
        <div class="work-categories">
          <div class="work-category">
            <h2>Short Spots and Advertisements</h2>
            <div class="video-grid">
              <div class="video-item">
                <div class="video-wrapper">
                  <div class="video-placeholder">
                    <img src="/src/assets/video-thumbnail.jpg" alt="Video Thumbnail" class="placeholder-image">
                    <div class="play-button">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5v14l11-7z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3>Project Title</h3>
                <p>Project description goes here.</p>
              </div>
            </div>
          </div>

          <div class="work-category">
            <h2>Branded Content Documentary</h2>
            <div class="video-grid">
              <div class="video-item">
                <div class="video-wrapper">
                  <div class="video-placeholder">
                    <img src="/src/assets/video-thumbnail.jpg" alt="Video Thumbnail" class="placeholder-image">
                    <div class="play-button">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5v14l11-7z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3>Project Title</h3>
                <p>Project description goes here.</p>
              </div>
            </div>
          </div>

          <div class="work-category">
            <h2>Hosted Personality Videos</h2>
            <div class="video-grid">
              <div class="video-item">
                <div class="video-wrapper">
                  <div class="video-placeholder">
                    <img src="/src/assets/video-thumbnail.jpg" alt="Video Thumbnail" class="placeholder-image">
                    <div class="play-button">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5v14l11-7z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3>Project Title</h3>
                <p>Project description goes here.</p>
              </div>
            </div>
          </div>

          <div class="work-category">
            <h2>Reels and TikToks</h2>
            <div class="video-grid">
              <div class="video-item">
                <div class="video-wrapper">
                  <div class="video-placeholder">
                    <img src="/src/assets/video-thumbnail.jpg" alt="Video Thumbnail" class="placeholder-image">
                    <div class="play-button">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5v14l11-7z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3>Project Title</h3>
                <p>Project description goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <h2>Ready to Create Something Amazing?</h2>
        <p>Let's discuss how we can bring your vision to life.</p>
        <router-link to="/contact" class="cta-button">Get in Touch</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
const openVideo = (videoId) => {
  // This will be implemented when we have the actual video IDs
  console.log('Opening video:', videoId);
};
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

.our-work {
  padding-top: 80px;
  font-family: var(--font-primary);
  color: var(--text-color);
}

.hero {
  padding: 6rem 0;
  background: var(--accent-color);
  text-align: center;

  .hero-logo {
    height: 60px;
    margin-bottom: 2rem;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .hero-text {
    max-width: 800px;
    margin: 0 auto;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.6;
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
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
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
    padding-bottom: 56.25%;
    height: 0;
    margin-bottom: 1.5rem;
    background: var(--primary-color);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    .video-placeholder {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);

        .play-button {
          transform: translate(-50%, -50%) scale(1.1);
          background: rgba(0, 0, 0, 0.8);
        }

        &::after {
          opacity: 0.7;
        }
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        transition: opacity 0.3s ease;
      }

      .placeholder-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .play-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80px;
        height: 80px;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        z-index: 2;

        svg {
          width: 40px;
          height: 40px;
          color: var(--secondary-color);
        }
      }
    }
  }

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

.cta {
  padding: 6rem 0;
  background: var(--primary-color);
  color: var(--secondary-color);
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.4;
    opacity: 0.8;
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
    padding: 4rem 0;

    h1 {
      font-size: 2.5rem;
    }

    .hero-text {
      font-size: 1rem;
    }
  }

  .work-categories {
    gap: 4rem;
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