<template>
  <div class="about">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-label">Our Company</div>
          <h1 class="hero-title">About Juniper Island</h1>
          <p class="hero-subtext">Toronto's Premier Video Production Company specializing in strategic visual storytelling that elevates brands and drives results.</p>
        </div>
      </div>
    </section>

    <section class="our-story">
      <div class="container">
        <div class="section-intro">
          <div class="section-label">Our Journey</div>
          <h2 class="section-title">Our Story</h2>
        </div>
        <div class="story-content">
          <div class="story-text">
            <p>Juniper Island was founded with a simple mission: to help brands communicate their value through strategic video content that resonates with their audience.</p>
            <p>What began as a passion for visual storytelling has evolved into a full-service video production company trusted by industry leaders across Toronto and beyond.</p>
            <p>Our team combines technical expertise with strategic thinking to create video content that not only looks beautiful but also drives real business results.</p>
          </div>
          <div class="story-image-container">
            <div class="placeholder-image" aria-label="Team image placeholder"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="our-approach">
      <div class="container">
        <div class="section-intro">
          <div class="section-label">Our Process</div>
          <h2 class="section-title">Our Approach</h2>
          <div class="section-description">
            <p>We believe in a structured yet flexible approach that ensures every project delivers on its strategic objectives while maintaining creative excellence.</p>
          </div>
        </div>
        <div class="approach-content">
          <div class="approach-item">
            <div class="approach-number">01</div>
            <h3>Strategic Discovery</h3>
            <p>We begin by understanding your brand, audience, and objectives to develop a content strategy that aligns with your business goals.</p>
          </div>
          <div class="approach-item">
            <div class="approach-number">02</div>
            <h3>Creative Development</h3>
            <p>Our creative team crafts compelling narratives and visual concepts that communicate your unique value proposition.</p>
          </div>
          <div class="approach-item">
            <div class="approach-number">03</div>
            <h3>Production Excellence</h3>
            <p>Using state-of-the-art equipment and techniques, we bring your story to life with meticulous attention to detail.</p>
          </div>
          <div class="approach-item">
            <div class="approach-number">04</div>
            <h3>Strategic Distribution</h3>
            <p>We help optimize your content for various platforms to maximize reach and engagement with your target audience.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="team">
      <div class="container">
        <div class="section-header">
          <h2>Our Team</h2>
        </div>
        <div class="team-grid">
          <div class="team-member">
            <div class="member-image">
              <img src="@/assets/team-member-1.jpg" alt="Team Member">
            </div>
            <h3>Sarah Thompson</h3>
            <p class="member-title">Creative Director</p>
            <p class="member-bio">With over 15 years of experience in visual storytelling, Sarah leads our creative vision and ensures every project communicates the client's unique value.</p>
          </div>
          <div class="team-member">
            <div class="member-image">
              <img src="@/assets/team-member-2.jpg" alt="Team Member">
            </div>
            <h3>Michael Chen</h3>
            <p class="member-title">Director of Photography</p>
            <p class="member-bio">Michael's eye for composition and lighting creates the distinctive visual style that has become Juniper Island's signature.</p>
          </div>
          <div class="team-member">
            <div class="member-image">
              <img src="@/assets/team-member-3.jpg" alt="Team Member">
            </div>
            <h3>Olivia Rodriguez</h3>
            <p class="member-title">Strategy Director</p>
            <p class="member-bio">Olivia ensures that every creative decision serves the client's business objectives, bridging the gap between art and commerce.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="values">
      <div class="container">
        <div class="section-header">
          <h2>Our Values</h2>
        </div>
        <div class="values-grid">
          <div class="value-item">
            <h3>Strategic Thinking</h3>
            <p>We believe that great video content starts with a clear understanding of business objectives and audience needs.</p>
          </div>
          <div class="value-item">
            <h3>Creative Excellence</h3>
            <p>We push creative boundaries while maintaining a focus on what will resonate with your audience.</p>
          </div>
          <div class="value-item">
            <h3>Collaborative Spirit</h3>
            <p>We view our clients as partners and believe the best work comes from open communication and shared vision.</p>
          </div>
          <div class="value-item">
            <h3>Continuous Learning</h3>
            <p>We stay at the forefront of industry trends and technologies to deliver innovative solutions.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-cta">
      <div class="container">
        <div class="cta-label">Next Steps</div>
        <h2>Ready to work with us?</h2>
        <p>Let's create video content that elevates your brand and drives results. Our team is ready to help bring your vision to life with strategic storytelling that resonates with your audience.</p>
        <router-link to="/contact" class="cta-button">
          <div class="button-content">Get in Touch</div>
          <div class="scan-line"></div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding-top: 0;
}

.hero {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 7rem 0 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 400px;
  margin-top: 0;
}

.hero-content {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.hero-label, .section-label {
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.8;
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

.hero-title, .section-title {
  font-family: var(--font-secondary);
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.hero-subtext, .section-description, .section-intro p {
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--secondary-color);
  opacity: 0.95;
  margin-bottom: 1.5rem;
}

.section-intro, .section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.story-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-top: 3rem;
}

.story-text {
  font-size: 1.25rem;
  color: var(--primary-color);
  line-height: 1.6;
}

.story-text p {
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

.our-story {
  padding: 8rem 0;
  background-color: var(--light-color);
  position: relative;
  color: var(--primary-color);
}

.story-image-container {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  position: relative;
}

.story-image-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: var(--accent-color);
}

.placeholder-image {
  width: 100%;
  height: 400px;
  background-color: #d0d0d0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.placeholder-image::after {
  content: 'Image';
  font-size: 1.5rem;
  color: #777777;
  font-weight: 500;
}

.team-image {
  width: 100%;
  height: auto;
  display: block;
}

.our-approach {
  padding: 8rem 0;
  background-color: var(--background-color);
  position: relative;
}

.approach-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-top: 2rem;
}

.approach-item {
  background-color: var(--light-color);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.08);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.approach-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}

.approach-number {
  font-size: 4rem;
  font-weight: 700;
  color: var(--accent-color);
  opacity: 0.15;
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  line-height: 1;
}

.approach-item h3 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  z-index: 1;
}

.approach-item p {
  color: var(--primary-color);
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

.team {
  padding: 8rem 0;
  background-color: var(--light-color);
  position: relative;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 2rem;
}

.team-member {
  text-align: center;
  background-color: white;
  padding: 3rem 2rem 2rem;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.08);
  position: relative;
  transition: transform 0.3s ease;
  color: var(--primary-color);
}

.team-member:hover {
  transform: translateY(-10px);
}

.member-image {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 2rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  border: 5px solid var(--light-color);
  position: relative;
  background-color: #d0d0d0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.member-image::before {
  content: 'Photo';
  font-size: 1rem;
  color: #777777;
  font-weight: 500;
  z-index: 2;
}

.member-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(var(--accent-color-rgb), 0.2) 0%, rgba(var(--primary-color-rgb), 0.2) 100%);
  z-index: 1;
}

.team-member h3 {
  margin-bottom: 0.5rem;
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 600;
}

.member-title {
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  font-weight: 600;
  font-size: 1rem;
}

.member-bio {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color);
}

.values {
  padding: 8rem 0;
  background-color: var(--background-color);
  position: relative;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-top: 2rem;
}

.value-item {
  background-color: var(--light-color);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.08);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 5px solid var(--accent-color);
}

.value-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}

.value-item h3 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.value-item p {
  color: var(--primary-color);
  line-height: 1.6;
}

.contact-cta {
  padding: 8rem 0;
  background: var(--primary-color);
  color: var(--light-gold);
  position: relative;
  overflow: hidden;
}

.contact-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/grid-pattern.png');
  background-size: 50px 50px;
  opacity: 0.1;
  z-index: 1;
}

.contact-cta .container {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.cta-label {
  font-size: min(1vw, 16px);
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  color: var(--light-gold);
  opacity: 0.9;
  text-align: left;
  width: 40%;
  max-width: 500px;
}

.contact-cta h2 {
  font-size: 3.5rem;
  margin-bottom: 2rem;
  text-align: left;
  max-width: 24ch;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--light-gold);
}

.contact-cta p {
  font-size: 1.25rem;
  width: 40%;
  max-width: 500px;
  margin: 0 0 2.5rem 45%;
  opacity: 0.9;
  text-align: justify;
  margin-top: -5rem;
  line-height: 1.6;
  color: white;
}

.cta-button {
  display: inline-block;
  background: var(--accent-color);
  color: var(--primary-color);
  padding: 1rem 2.5rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-left: 45%;
  position: relative;
  overflow: hidden;
}

.button-content {
  position: relative;
  z-index: 2;
}

.scan-line {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  z-index: 1;
  animation: scan 2s infinite;
}

@keyframes scan {
  0% {
    left: -100%;
  }
  100% {
    left: 200%;
  }
}

.cta-button:hover {
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 0 4rem;
    padding-top: calc(6rem + 80px);
  }

  .hero-label {
    width: 80%;
    margin-bottom: 1rem;
  }

  .hero-title {
    font-size: 10vw;
  }

  .hero-subtext {
    width: 80%;
    margin-left: 0;
    margin-top: 2rem;
    font-size: 5vw;
  }
  
  .section-intro {
    margin-bottom: 3rem;
  }

  .section-label {
    width: 80%;
  }

  .section-title {
    font-size: 2.5rem;
  }
  
  .story-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .story-image-container {
    margin-top: 1rem;
  }
  
  .story-content,
  .approach-content,
  .team-grid,
  .values-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .member-image {
    width: 150px;
    height: 150px;
  }
  
  .contact-cta {
    padding: 6rem 0 4rem;
  }

  .cta-label {
    width: 80%;
  }

  .contact-cta h2 {
    font-size: 2.5rem;
  }

  .contact-cta p {
    width: 80%;
    margin-left: 0;
    margin-top: 1.5rem;
    font-size: 1rem;
  }

  .cta-button {
    margin-left: 0;
  }
}
</style> 