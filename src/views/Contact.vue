<template>
  <div class="contact">
    <div class="navbar-padding"></div>
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Let's Connect</h1>
          <p class="hero-subtext">We are eager to collaborate and bring your vision to life with our creative solutions.</p>
        </div>
      </div>
    </section>

    <section class="contact-form">
      <div class="container">
        <div class="form-wrapper">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="form.name" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" required />
            </div>
            <div class="form-group">
              <label for="company">Company</label>
              <input type="text" id="company" v-model="form.company" />
            </div>
            <div class="form-group">
              <label for="message">Tell us about your project</label>
              <textarea id="message" v-model="form.message" rows="5" required></textarea>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" id="newsletter" v-model="form.newsletter">
              <label for="newsletter">Subscribe to our monthly video marketing insights</label>
            </div>
            <button type="submit" class="submit-button">
              <div class="button-content">Send Message</div>
              <div class="scan-line"></div>
            </button>
          </form>
        </div>

        <div class="contact-info">
          <div class="info-item">
            <h3>Our Office</h3>
            <p>123 King Street West<br>Toronto, ON M5V 1J5</p>
          </div>
          <div class="info-item">
            <h3>Contact</h3>
            <p><a href="mailto:hello@juniperisland.ca">hello@juniperisland.ca</a></p>
            <p><a href="tel:+14165551234">(416) 555-1234</a></p>
          </div>
          <div class="info-item">
            <h3>Follow Us</h3>
            <div class="social-links">
              <a href="https://www.instagram.com/juniperisland/" target="_blank" rel="noopener" class="social-link">Instagram</a>
              <a href="https://www.linkedin.com/company/juniper-island/" target="_blank" rel="noopener" class="social-link">LinkedIn</a>
              <a href="https://vimeo.com/juniperisland" target="_blank" rel="noopener" class="social-link">Vimeo</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="faq">
      <div class="container">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3>What is your typical process for a video project?</h3>
            <p>Our process typically includes discovery, strategy development, pre-production planning, production, post-production, and delivery. We work closely with clients at each stage to ensure alignment with their vision and objectives.</p>
          </div>
          <div class="faq-item">
            <h3>How long does a typical video project take?</h3>
            <p>Project timelines vary based on complexity, but most projects take 4-8 weeks from initial concept to final delivery. We'll provide a detailed timeline during our initial consultation.</p>
          </div>
          <div class="faq-item">
            <h3>What is your pricing structure?</h3>
            <p>We customize our pricing based on project scope, production requirements, and timeline. After our initial consultation, we'll provide a detailed proposal with transparent pricing.</p>
          </div>
          <div class="faq-item">
            <h3>Do you offer ongoing video content packages?</h3>
            <p>Yes, we offer content packages for brands that need regular video content. These packages can be customized to meet your specific needs and budget.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        company: '',
        message: '',
        newsletter: false
      }
    }
  },
  methods: {
    handleSubmit() {
      // Form submission logic will be implemented later
      console.log('Form submitted:', this.form)
      // Reset form after submission
      this.form = {
        name: '',
        email: '',
        company: '',
        message: '',
        newsletter: false
      }
      // Show success message (in a real implementation)
      alert('Thank you for your message! We will get back to you soon.')
    }
  }
}
</script>

<style scoped>
.contact {
  padding-top: 2rem;
}

.navbar-padding {
  height: 3rem;
  background-color: #333;
}

.hero {
  padding: 10rem 0 8rem;
  padding-top: calc(10rem + 80px);
  background: var(--primary-color);
  position: relative;
  overflow: hidden;
  margin-top: -80px;
}

.hero::after {
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

.hero .container {
  position: relative;
  z-index: 2;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-title {
  font-family: var(--font-secondary);
  font-size: 7vw;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 1.5rem;
  color: var(--light-gold) !important;
  letter-spacing: -0.02em;
  max-width: 24ch;
  text-align: left;
  margin-left: 0;
  transform: none;
}

.hero-subtext {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.25rem;
  opacity: 0.9;
  text-align: justify;
}

.contact-form {
  padding: 4rem 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.contact-form .container {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 4rem;
}

.form-wrapper form {
  max-width: 800px;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.form-wrapper form:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.form-group {
  margin-bottom: 2rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: #444;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--primary-color);
}

.form-checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: rgba(240, 240, 240, 0.8);
}

.form-checkbox input {
  margin-right: 0.5rem;
}

.submit-button {
  background-color: #444;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.submit-button:hover {
  background-color: #555;
  transform: translateY(-3px);
}

.contact-info .info-item {
  color: #333;
  text-align: justify;
  margin-bottom: 1.5rem;
}

.contact-info .info-item h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #222;
}

.faq {
  padding: 6rem 0;
  background-color: var(--background-color);
}

.faq h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  position: relative;
  color: #222;
}

.faq h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: var(--accent-color);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.faq-item {
  background-color: var(--secondary-color);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.faq-item h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.faq-item p {
  color: #444;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .hero-text {
    font-size: 1rem;
  }

  .contact-form {
    padding: 4rem 0;
  }

  .contact-form .container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
}
</style>