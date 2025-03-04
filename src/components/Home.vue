<template>
  <div class="home">
    <section class="hero">
      <div class="hero-background">
        <video autoplay loop muted playsinline>
          <source src="@/assets/hero.mp4" type="video/mp4">
        </video>
      </div>
      <div class="technical-overlay"></div>
      <div class="hero-content">
        <div class="hero-text-container">
          <div class="hero-label">Digital Experience Agency</div>
          <h1 class="hero-title">Juniper Island</h1>
          <p class="hero-subtext">We craft digital experiences that connect, engage, and inspire.</p>
        </div>
        <div class="hero-cta-container">
          <p class="hero-cta-text">Ready to start your journey?</p>
          <router-link to="/contact" class="cta-button">
            <div class="button-content">Get Started</div>
            <div class="scan-line"></div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template> 