<template>
  <div class="blog">
    <section class="hero">
      <div class="container">
        <h1>Blog</h1>
        <p class="hero-text">Coming soon! Stay tuned for insights, tips, and stories from the world of video production.</p>
      </div>
    </section>

    <section class="newsletter">
      <div class="container">
        <h2>Want to be the first to know?</h2>
        <p>Subscribe to our newsletter to get notified when we launch our blog.</p>
        <form class="newsletter-form">
          <input type="email" placeholder="Your work email*" required />
          <button type="submit" class="submit-button">Subscribe</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
// Component logic will go here
</script>

<style lang="scss" scoped>
.blog {
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
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.25rem;
  }
}

.newsletter {
  padding: 6rem 0;
  background: #000;
  color: #fff;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    max-width: 600px;
    margin: 0 auto 2rem;
  }

  .newsletter-form {
    display: flex;
    gap: 1rem;
    max-width: 500px;
    margin: 0 auto;

    input {
      flex: 1;
      padding: 1rem;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
    }

    .submit-button {
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
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 0;

    .hero-text {
      font-size: 1rem;
    }
  }

  .newsletter {
    .newsletter-form {
      flex-direction: column;
    }
  }
}
</style> 