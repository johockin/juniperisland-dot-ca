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
          <p class="hero-text">Crafting Compelling Brand Stories Through Video</p>
          <p class="hero-subtext">We help industry leaders communicate their value through strategic video content</p>
          <router-link to="/contact" class="cta-button">Let's Create Together</router-link>
        </div>
      </div>
    </section>

    <section class="trusted-by">
      <div class="container">
        <h3 class="trusted-title">Trusted By Industry Leaders</h3>
        <div class="logo-strip">
          <img src="/src/assets/client-logos.png" alt="Trusted by Industry Leaders" class="logo-strip-img">
        </div>
      </div>
    </section>

    <section class="welcome">
      <div class="container">
        <div class="welcome-content">
          <p class="welcome-text">In today's digital landscape, video isn't just content—it's the cornerstone of modern brand communication.</p>
          <p class="welcome-text-highlight">But creating video that truly resonates requires more than just technical expertise. It demands a deep understanding of your brand's story and your audience's needs.</p>
        </div>
        <div class="process-guide">
          <div class="guide-icon">
            <img src="/src/assets/process-icon.svg" alt="Process Guide" class="process-icon">
          </div>
          <h3>Download Our Video Production Process Guide</h3>
          <p>Learn how we transform your brand's story into compelling video content that drives results.</p>
          <form class="guide-form">
            <div class="form-group">
              <input type="email" placeholder="Your work email" class="email-input" required>
              <button type="submit" class="submit-button">GET THE GUIDE</button>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" id="newsletter">
              <label for="newsletter">Subscribe to our monthly video marketing insights</label>
            </div>
          </form>
        </div>
      </div>
    </section>

    <section class="featured-work">
      <div class="container">
        <div class="section-header">
          <h2>Featured Work</h2>
          <router-link to="/work" class="view-all">View All Projects <span class="arrow">→</span></router-link>
        </div>
        <div class="work-grid">
          <div v-for="(project, index) in featuredProjects" :key="index" class="project-card">
            <div class="project-thumbnail">
              <img :src="project.thumbnail" :alt="project.title">
              <div class="project-overlay">
                <h3>{{ project.title }}</h3>
                <p>{{ project.category }}</p>
                <router-link :to="project.link" class="project-link">View Project</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      featuredProjects: [
        {
          title: 'Brand Story - Tech Innovation',
          category: 'Corporate Documentary',
          thumbnail: '/src/assets/projects/tech-innovation.svg',
          link: '/work/tech-innovation'
        },
        {
          title: 'Product Launch Campaign',
          category: 'Commercial',
          thumbnail: '/src/assets/projects/product-launch.svg',
          link: '/work/product-launch'
        },
        {
          title: 'Leadership Series',
          category: 'Interview Series',
          thumbnail: '/src/assets/projects/leadership.svg',
          link: '/work/leadership-series'
        }
      ]
    }
  }
}
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

.trusted-by {
  padding: 4rem 0;
  background: #f8f8f8;
}

.trusted-title {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.logo-strip {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-strip-img {
  max-width: 100%;
  height: auto;
}

.welcome {
  padding: 6rem 0;
  background: #ffffff;
}

.welcome-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.welcome-text {
  font-size: 1.8rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #333;
}

.welcome-text-highlight {
  font-size: 1.8rem;
  line-height: 1.6;
  color: #000;
  font-weight: 600;
}

.process-guide {
  max-width: 600px;
  margin: 4rem auto 0;
  padding: 3rem;
  background: #f8f8f8;
  border-radius: 8px;
  text-align: center;
}

.guide-form {
  margin-top: 2rem;
}

.form-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.email-input {
  flex: 1;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-button {
  padding: 1rem 2rem;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}

.featured-work {
  padding: 6rem 0;
  background: #f8f8f8;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.project-thumbnail {
  position: relative;
}

.project-thumbnail img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: #fff;
  text-align: center;
  padding: 2rem;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-card:hover .project-thumbnail img {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-text {
    font-size: 1.4rem;
  }

  .welcome-text,
  .welcome-text-highlight {
    font-size: 1.4rem;
  }

  .form-group {
    flex-direction: column;
  }

  .work-grid {
    grid-template-columns: 1fr;
  }
}
</style>