<template>
  <div class="app">
    <nav class="navbar" :class="{ scrolled: isNavbarScrolled }">
      <div class="navbar-container">
        <router-link to="/" class="logo">
          <img src="@/assets/logo.png" alt="Juniper Island" class="logo-img">
        </router-link>
        <div class="nav-links" :class="{ active: isMobileMenuOpen }">
          <router-link to="/" exact @click="closeMobileMenu">Home</router-link>
          <router-link to="/work" @click="closeMobileMenu">Our Work</router-link>
          <router-link to="/about" @click="closeMobileMenu">About</router-link>
          <router-link to="/blog" @click="closeMobileMenu">Blog</router-link>
          <router-link to="/contact" class="cta-button" @click="closeMobileMenu">
            <div class="button-content">Contact</div>
            <div class="scan-line"></div>
          </router-link>
        </div>
        <button class="mobile-menu-toggle" :class="{ active: isMobileMenuOpen }" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="@/assets/logo.png" alt="Juniper Island" class="footer-logo-img">
          </div>
          <div class="footer-links">
            <div class="footer-nav">
              <router-link to="/">Home</router-link>
              <router-link to="/work">Our Work</router-link>
              <router-link to="/about">About</router-link>
              <router-link to="/blog">Blog</router-link>
              <router-link to="/contact">Contact</router-link>
            </div>
            <div class="footer-social">
              <a href="https://instagram.com/juniperisland" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://linkedin.com/company/juniper-island" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div class="footer-contact">
            <p>Toronto, ON</p>
            <a href="mailto:hello@juniperisland.ca">hello@juniperisland.ca</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Juniper Island. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { updateMetaTags, createOrganizationStructuredData } from './utils/seo';

export default {
  name: 'App',
  data() {
    return {
      isNavbarScrolled: false,
      isMobileMenuOpen: false,
      fontsLoaded: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    
    // Check if fonts are loaded
    if (document.fonts) {
      document.fonts.ready.then(() => {
        this.fontsLoaded = true;
        console.log('Fonts loaded successfully');
      }).catch(err => {
        console.error('Error loading fonts:', err);
      });
    }
    
    // Add base organization structured data
    const baseUrl = window.location.origin;
    createOrganizationStructuredData(baseUrl);
    
    // Set initial page metadata
    this.updatePageMetadata(this.$route);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  
  watch: {
    $route(to) {
      // Update page metadata when route changes
      this.updatePageMetadata(to);
    }
  },
  methods: {
    handleScroll() {
      this.isNavbarScrolled = window.scrollY > 50
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
      document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : ''
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
      document.body.style.overflow = ''
    },
    updatePageMetadata(route) {
      // Get meta information from route
      const meta = route.meta || {};
      
      // Default metadata
      const defaultTitle = 'Juniper Island - Toronto\'s Premier Video Production Company';
      const defaultDescription = 'Juniper Island creates brand stories and high-end video production for bold brands in Toronto, helping your story reach its audience.';
      
      // Update meta tags
      updateMetaTags({
        title: meta.title || defaultTitle,
        description: meta.description || defaultDescription,
        url: window.location.href,
        type: meta.type || 'website',
        image: meta.image || '/assets/logo.png',
        keywords: meta.keywords || ['video production', 'toronto', 'brand videos', 'marketing videos']
      });
    }
  }
}
</script>

<style>
@import '@/assets/styles/fonts.scss';

:root {
  --primary-color: #0c232c;
  --secondary-color: #ffffff;
  --accent-color: #D6BD68;
  --accent-secondary: #ACCED2;
  --text-color: #333333;
  --background-color: #f8f8f8;
  --transition-speed: 0.3s;
  --font-primary: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --font-secondary: 'Caudex', Georgia, serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-primary);
  line-height: 1.6;
  color: var(--text-color);
  min-height: 100vh;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}





.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.logo-img {
  height: 40px;
  width: auto;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links a {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 500;
  transition: opacity var(--transition-speed) ease;
}

.nav-links a:hover {
  opacity: 0.8;
}

.nav-links a.cta-button {
  padding: 0.4rem 1rem;
  background: transparent;
  border: 1px solid var(--accent-color);
  color: var(--accent-color) !important;
  border-radius: 2px;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 1.5rem;
  position: relative;
  overflow: hidden;
  min-width: 100px;
  text-align: center;
  isolation: isolate;
  box-shadow: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 59, 48, 0.05),
      transparent
    );
    transition: 0.5s;
    z-index: 1;
  }

  .button-content {
    position: relative;
    z-index: 2;
  }

  .scan-line {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 1px;
    background: rgba(255, 59, 48, 0.3);
    box-shadow: 0 0 2px rgba(255, 59, 48, 0.2);
    animation: none;
    z-index: 3;
  }

  &:hover {
    background: rgba(61, 123, 61, 0.03);
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(61, 123, 61, 0.1);
    border-color: var(--accent-secondary);

    &::before {
      left: 100%;
    }

    .scan-line {
      animation: scan 1.5s ease-in-out infinite;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 4px rgba(61, 123, 61, 0.05);
  }
}

.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu-toggle span {
  display: block;
  width: 25px;
  height: 2px;
  background: var(--secondary-color);
  margin: 5px 0;
  transition: all var(--transition-speed) ease;
}

.footer {
  background: var(--primary-color);
  color: var(--secondary-color);
  padding: 4rem 0 2rem;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-logo-img {
  height: 40px;
  width: auto;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.footer-nav, .footer-social {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-nav a, .footer-social a {
  color: var(--secondary-color);
  text-decoration: none;
  transition: opacity var(--transition-speed) ease;
}

.footer-nav a:hover, .footer-social a:hover {
  opacity: 0.8;
}

.footer-contact {
  text-align: right;
}

.footer-contact a {
  color: var(--secondary-color);
  text-decoration: none;
  transition: opacity var(--transition-speed) ease;
}

.footer-contact a:hover {
  opacity: 0.8;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.7;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--primary-color);
    flex-direction: column;
    justify-content: center;
    transform: translateY(-100%);
    transition: transform var(--transition-speed) ease;
    z-index: 999;
  }

  .nav-links.active {
    transform: translateY(0);
  }

  .mobile-menu-toggle {
    display: block;
    position: relative;
    z-index: 1000;
  }

  .mobile-menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .mobile-menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .mobile-menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-contact {
    text-align: left;
  }
}
</style> 