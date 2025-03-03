<template>
  <div class="about">
    <section class="hero">
      <div class="container">
        <h1>About Juniper Island</h1>
        <p class="subtitle">Toronto's Premier Video Production Company</p>
      </div>
    </section>

    <section class="our-story">
      <div class="container">
        <div class="section-header">
          <h2>Our Story</h2>
        </div>
        <div class="story-content">
          <div class="story-text">
            <p>Juniper Island was founded with a simple mission: to help brands communicate their value through strategic video content that resonates with their audience.</p>
            <p>What began as a passion for visual storytelling has evolved into a full-service video production company trusted by industry leaders across Toronto and beyond.</p>
            <p>Our team combines technical expertise with strategic thinking to create video content that not only looks beautiful but also drives real business results.</p>
          </div>
          <div class="story-image">
            <img src="@/assets/about-team.jpg" alt="Juniper Island Team" class="team-image">
          </div>
        </div>
      </div>
    </section>

    <section class="our-approach">
      <div class="container">
        <div class="section-header">
          <h2>Our Approach</h2>
        </div>
        <div class="approach-content">
          <div class="approach-item">
            <h3>1. Strategic Discovery</h3>
            <p>We begin by understanding your brand, audience, and objectives to develop a content strategy that aligns with your business goals.</p>
          </div>
          <div class="approach-item">
            <h3>2. Creative Development</h3>
            <p>Our creative team crafts compelling narratives and visual concepts that communicate your unique value proposition.</p>
          </div>
          <div class="approach-item">
            <h3>3. Production Excellence</h3>
            <p>Using state-of-the-art equipment and techniques, we bring your story to life with meticulous attention to detail.</p>
          </div>
          <div class="approach-item">
            <h3>4. Strategic Distribution</h3>
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
        <h2>Ready to work with us?</h2>
        <p>Let's create video content that elevates your brand and drives results.</p>
        <router-link to="/contact" class="cta-button">Get in Touch</router-link>
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
  padding-top: 0;
}

.hero {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 6rem 0;
  text-align: center;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.8;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  position: relative;
  display: inline-block;
}

.section-header h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: var(--accent-color);
}

.our-story {
  padding: 6rem 0;
  background-color: var(--secondary-color);
}

.story-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.story-text p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.story-image {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.team-image {
  width: 100%;
  height: auto;
  display: block;
}

.our-approach {
  padding: 6rem 0;
  background-color: var(--background-color);
}

.approach-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
}

.approach-item {
  background-color: var(--secondary-color);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.approach-item h3 {
  color: var(--accent-color);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.team {
  padding: 6rem 0;
  background-color: var(--secondary-color);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.team-member {
  text-align: center;
}

.member-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-member h3 {
  margin-bottom: 0.5rem;
}

.member-title {
  color: var(--accent-color);
  margin-bottom: 1rem;
  font-weight: 600;
}

.member-bio {
  font-size: 0.9rem;
  line-height: 1.6;
}

.values {
  padding: 6rem 0;
  background-color: var(--background-color);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
}

.value-item {
  background-color: var(--secondary-color);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.value-item h3 {
  color: var(--accent-color);
  margin-bottom: 1rem;
}

.contact-cta {
  padding: 6rem 0;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  text-align: center;
}

.contact-cta h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.contact-cta p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.8;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--accent-color);
  color: var(--primary-color);
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  box-shadow: 4px 4px 0 var(--accent-secondary);
  transition: transform 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
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
  
  .contact-cta h2 {
    font-size: 2rem;
  }
}
</style> 