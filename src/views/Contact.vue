<template>
  <div class="contact">
    <section class="hero">
      <div class="container">
        <h1>Let's Talk</h1>
        <p class="hero-text">Ready to elevate your brand with strategic video content? We'd love to hear about your project.</p>
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
              <label for="project">Project Type</label>
              <select id="project" v-model="form.projectType">
                <option value="" disabled selected>Select a project type</option>
                <option value="brand-story">Brand Story</option>
                <option value="commercial">Commercial</option>
                <option value="corporate">Corporate Documentary</option>
                <option value="event">Event Coverage</option>
                <option value="other">Other</option>
              </select>
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
          
          <div class="info-item">
            <h3>Working Hours</h3>
            <p>Monday - Friday: 9am - 6pm</p>
            <p>Weekend: By appointment</p>
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
        projectType: '',
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
        projectType: '',
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
  padding-top: 0;
}

.hero {
  padding: 6rem 0;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  text-align: center;
}

.hero h1 {
  margin-bottom: 1.5rem;
  font-size: 3.5rem;
}

.hero-text {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.25rem;
  opacity: 0.8;
}

.contact-form {
  padding: 6rem 0;
  background-color: var(--secondary-color);
}

.contact-form .container {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 4rem;
}

.form-wrapper form {
  max-width: 600px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--accent-color);
}

.form-checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.form-checkbox input {
  margin-right: 0.5rem;
}

.submit-button {
  background-color: var(--accent-color);
  color: var(--primary-color);
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 4px 4px 0 var(--accent-secondary);
}

.submit-button:hover {
  transform: translateY(-3px);
}

.contact-info .info-item {
  margin-bottom: 2rem;
}

.contact-info .info-item h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--accent-color);
}

.contact-info .info-item p {
  margin-bottom: 0.5rem;
}

.contact-info .info-item a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-info .info-item a:hover {
  color: var(--accent-color);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #f5f5f5;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.social-link:hover {
  background-color: #e5e5e5;
}

.faq {
  padding: 6rem 0;
  background-color: var(--background-color);
}

.faq h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  position: relative;
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
  margin-bottom: 1rem;
  color: var(--accent-color);
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