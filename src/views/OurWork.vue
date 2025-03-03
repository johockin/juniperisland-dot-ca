<template>
  <div class="our-work">
    <section class="hero">
      <div class="container">
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
                  <iframe
                    src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                    title="Video Title"
                  ></iframe>
                </div>
                <h3>Project Title</h3>
                <p>Project description goes here.</p>
              </div>
              <!-- Add more video items as needed -->
            </div>
          </div>

          <div class="work-category">
            <h2>Branded Content Documentary</h2>
            <div class="video-grid">
              <div class="video-item">
                <div class="video-wrapper">
                  <iframe
                    src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                    title="Video Title"
                  ></iframe>
                </div>
                <h3>Project Title</h3>
                <p>Project description goes here.</p>
              </div>
              <!-- Add more video items as needed -->
            </div>
          </div>

          <div class="work-category">
            <h2>Hosted Personality Videos</h2>
            <div class="video-grid">
              <div class="video-item">
                <div class="video-wrapper">
                  <iframe
                    src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                    title="Video Title"
                  ></iframe>
                </div>
                <h3>Project Title</h3>
                <p>Project description goes here.</p>
              </div>
              <!-- Add more video items as needed -->
            </div>
          </div>

          <div class="work-category">
            <h2>Reels and TikToks</h2>
            <div class="video-grid">
              <div class="video-item">
                <div class="video-wrapper">
                  <iframe
                    src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                    title="Video Title"
                  ></iframe>
                </div>
                <h3>Project Title</h3>
                <p>Project description goes here.</p>
              </div>
              <!-- Add more video items as needed -->
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
// Component logic will go here
</script>

<style lang="scss" scoped>
.our-work {
  padding-top: 80px; // Account for fixed navbar
}

.hero {
  padding: 6rem 0;
  background: #f8f8f8;
  text-align: center;

  h1 {
    margin-bottom: 2rem;
  }

  .hero-text {
    max-width: 800px;
    margin: 0 auto;
    font-size: 1.25rem;
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
    margin-bottom: 1rem;
  }
}

.cta {
  padding: 6rem 0;
  background: #000;
  color: #fff;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
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

@media (max-width: 768px) {
  .hero {
    padding: 4rem 0;

    .hero-text {
      font-size: 1rem;
    }
  }

  .work-categories {
    gap: 4rem;
  }
}
</style> 