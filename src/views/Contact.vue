<template>
  <div class="contact">
    <section class="hero">
      <div class="container">
        <h1>Contact Us</h1>
        <p class="hero-text">Let's discuss your next video project and how we can help bring your vision to life.</p>
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
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" rows="5" required></textarea>
            </div>
            
            <button type="submit" class="submit-button">Send Message</button>
          </form>
        </div>

        <div class="contact-info">
          <div class="info-item">
            <h3>Location</h3>
            <p>Toronto, Ontario</p>
          </div>
          
          <div class="info-item">
            <h3>Email</h3>
            <a href="mailto:hello@juniperisland.ca">hello@juniperisland.ca</a>
          </div>
          
          <div class="info-item">
            <h3>Social</h3>
            <div class="social-links">
              <a href="https://www.instagram.com/juniper.island/" target="_blank" rel="noopener">Instagram</a>
              <a href="https://www.linkedin.com/company/juniper-island/" target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  company: '',
  message: ''
})

const handleSubmit = () => {
  // Form submission logic will be implemented later
  console.log('Form submitted:', form)
}
</script>

<style lang="scss" scoped>
.contact {
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

.contact-form {
  padding: 6rem 0;

  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
  }
}

.form-wrapper {
  form {
    max-width: 600px;
  }
}

.form-group {
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    font-family: inherit;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #000;
    }
  }
}

.submit-button {
  background: #000;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #333;
  }
}

.contact-info {
  .info-item {
    margin-bottom: 2rem;

    h3 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    a {
      color: #000;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #666;
      }
    }
  }

  .social-links {
    display: flex;
    gap: 1rem;
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

  .contact-form {
    padding: 4rem 0;

    .container {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }
}
</style> 