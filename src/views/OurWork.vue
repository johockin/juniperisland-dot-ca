<template>
  <div class="our-work">
    <section class="hero">
      <div class="container">
        <h1>Our Work</h1>
        <p class="hero-text">Discover how we elevate brands with our diverse range of video styles and formats, tailored to make a lasting impact in the competitive marketplace.</p>
      </div>
    </section>

    <section class="work-categories">
      <div class="container">
        <div class="category">
          <h2>Short Spots and Advertisements</h2>
          <p class="category-description">Our team specializes in creating memorable, succinct ads that resonate. We blend brevity and storytelling to ensure your brand's message captivates and sticks with your audience.</p>
          <div class="video-grid">
            <div class="video-item" @click="openVideo('video1')">
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
            <div class="video-item" @click="openVideo('video2')">
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

        <div class="category">
          <h2>Branded Content Documentary</h2>
          <p class="category-description">Transform your brand's story into a captivating cinematic journey. We specialize in uncovering and elevating the authentic stories that define your brand. Our decades of expertise in filming both everyday people and professional talent enables us to capture those rare, impactful moments that resonate deeply with audiences. With our stunning visual storytelling, your brand will not just be seen but be remembered, standing out distinctly in a crowded marketplace.</p>
          <div class="video-grid">
            <div class="video-item" @click="openVideo('video3')">
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
              <h3>Red Bull Music Academy presents Spaces: Montreal (2018)</h3>
              <p>A cinematic journey through Montreal's music scene.</p>
            </div>
            <div class="video-item" @click="openVideo('video4')">
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
              <h3>RBMA Playing With: TONTO, the World's Largest Synthesizer (2020)</h3>
              <p>An exploration of the iconic synthesizer and its impact on music.</p>
            </div>
          </div>
        </div>

        <div class="category">
          <h2>Hosted Personality Videos</h2>
          <p class="category-description">Engage and Delight with Hosted Personality Videos. Immerse your audience in a captivating experience led by charismatic hosts and intriguing topics. Our hosted videos offer a unique blend of warmth, entertainment, and information, keeping viewers engaged and connected.</p>
          <div class="video-grid">
            <div class="video-item" @click="openVideo('video5')">
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

        <div class="category">
          <h2>Reels and TikToks</h2>
          <p class="category-description">Navigate the dynamic world of Reels and TikToks with us. With extensive experience and countless successful creations, we know exactly how to captivate your audience on these platforms. Our approach blends your core messaging with the unique demands of vertical video, maximizing engagement and enhancing your marketing outcomes. Expect a perfect mix of entertainment and strategic impact.</p>
          <div class="video-grid">
            <div class="video-item" @click="openVideo('video6')">
              <div class="video-wrapper">
                <div class="video-placeholder video-vertical">
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
    </section>

    <section class="cta">
      <div class="container">
        <h2>JOIN THE FAMILY + WORK WITH US</h2>
        <router-link to="/contact" class="cta-button">Get in Touch</router-link>
      </div>
    </section>

    <div class="video-modal" v-if="activeVideo" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeModal">&times;</button>
        <div class="video-container">
          <iframe 
            :src="getVideoSrc(activeVideo)" 
            frameborder="0" 
            allow="autoplay; fullscreen" 
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeVideo = ref(null);

const openVideo = (videoId) => {
  activeVideo.value = videoId;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  activeVideo.value = null;
  document.body.style.overflow = '';
};

const getVideoSrc = (videoId) => {
  // Placeholder function to return actual video URLs when available
  const videoMap = {
    video1: 'https://player.vimeo.com/video/123456789?autoplay=1',
    video2: 'https://player.vimeo.com/video/123456789?autoplay=1',
    video3: 'https://player.vimeo.com/video/123456789?autoplay=1',
    video4: 'https://player.vimeo.com/video/123456789?autoplay=1',
    video5: 'https://player.vimeo.com/video/123456789?autoplay=1',
    video6: 'https://player.vimeo.com/video/123456789?autoplay=1',
  };
  
  return videoMap[videoId] || '';
};
</script>

<style lang="scss" scoped>
.our-work {
  padding-top: 80px;
  font-family: var(--font-primary);
  color: var(--text-color);
}

.hero {
  padding: 6rem 0 4rem;
  background: var(--primary-color);
  text-align: center;
  color: var(--secondary-color);

  h1 {
    font-family: var(--font-secondary);
    margin-bottom: 2rem;
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
    color: var(--secondary-color);
  }

  .hero-text {
    max-width: 800px;
    margin: 0 auto;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.6;
  }
}

.work-categories {
  padding: 4rem 0;
  
  .container {
    max-width: 1200px;
  }

  .category {
    margin-bottom: 6rem;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    h2 {
      font-family: var(--font-secondary);
      margin-bottom: 1.5rem;
      font-size: 2.5rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.2;
      color: var(--primary-color);
      position: relative;
      display: inline-block;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 60px;
        height: 3px;
        background-color: var(--gold-color);
      }
    }
    
    .category-description {
      max-width: 1000px;
      margin-bottom: 3rem;
      font-size: 1.1rem;
      line-height: 1.6;
      color: var(--primary-color);
      opacity: 0.9;
    }
  }
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 3rem;
}

.video-item {
  cursor: pointer;
  
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
      transition: transform 0.5s ease;

      &.video-vertical {
        padding-bottom: 177.7%;
      }

      &:hover {
        transform: scale(1.05);

        .play-button {
          transform: translate(-50%, -50%) scale(1.1);
          background: var(--gold-color);
        }

        &::after {
          opacity: 0.6;
        }
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(6, 29, 32, 0.4);
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
        background: rgba(184, 134, 11, 0.9);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        z-index: 2;

        svg {
          width: 30px;
          height: 30px;
          color: var(--secondary-color);
        }
      }
    }
  }

  h3 {
    font-family: var(--font-secondary);
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: var(--primary-color);
    transition: color 0.3s ease;
  }

  p {
    color: var(--primary-color);
    opacity: 0.75;
    line-height: 1.6;
    font-weight: 300;
  }
  
  &:hover {
    h3 {
      color: var(--gold-color);
    }
  }
}

.cta {
  padding: 5rem 0;
  background: var(--primary-color);
  color: var(--secondary-color);
  text-align: center;

  h2 {
    font-family: var(--font-secondary);
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
}

.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  
  .modal-content {
    position: relative;
    width: 90%;
    max-width: 1000px;
    
    .close-button {
      position: absolute;
      top: -40px;
      right: 0;
      background: none;
      border: none;
      color: white;
      font-size: 2rem;
      cursor: pointer;
      padding: 0;
      line-height: 1;
    }
    
    .video-container {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 5rem 0 3rem;

    h1 {
      font-size: 2.5rem;
    }

    .hero-text {
      font-size: 1rem;
      padding: 0 1rem;
    }
  }
  
  .work-categories {
    padding: 3rem 0;
    
    .category {
      margin-bottom: 4rem;
      
      h2 {
        font-size: 2rem;
      }
      
      .category-description {
        font-size: 1rem;
        padding: 0 1rem;
      }
    }
  }
  
  .video-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }

  .cta {
    padding: 4rem 0;

    h2 {
      font-size: 2rem;
      padding: 0 1rem;
    }
  }
  
  .video-modal {
    .modal-content {
      width: 95%;
    }
  }
}
</style> 