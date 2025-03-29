<template>
  <div class="app">
    <CustomCursor />
    
    <header class="site-header">
      <GridLayout>
        <div class="site-logo grid-span-2 grid-start-1">
          <router-link to="/" class="logo">
            Juniper Island
          </router-link>
        </div>
        
        <nav class="site-nav grid-span-6 grid-start-7">
          <router-link to="/" exact>Home</router-link>
          <router-link to="/work">Projects</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/blog">Journal</router-link>
          <router-link to="/contact">Contact</router-link>
        </nav>
      </GridLayout>
    </header>

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="site-footer">
      <GridLayout>
        <div class="footer-info grid-span-4 grid-start-1">
          <p>© {{ currentYear }} Juniper Island</p>
          <p>Toronto, ON</p>
        </div>
        
        <div class="footer-contact grid-span-4 grid-start-5">
          <a href="mailto:hello@juniperisland.ca">hello@juniperisland.ca</a>
        </div>
        
        <div class="footer-social grid-span-4 grid-start-9">
          <a href="https://instagram.com/juniperisland" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com/company/juniper-island" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </GridLayout>
    </footer>
  </div>
</template>

<script>
import { updateMetaTags, createOrganizationStructuredData } from './utils/seo';
import CustomCursor from './components/CustomCursor.vue';
import GridLayout from './components/GridLayout.vue';

export default {
  name: 'App',
  components: {
    CustomCursor,
    GridLayout
  },
  data() {
    return {
      fontsLoaded: false,
      currentYear: new Date().getFullYear()
    }
  },
  mounted() {
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
  
  watch: {
    $route(to) {
      // Update page metadata when route changes
      this.updatePageMetadata(to);
    }
  },
  methods: {
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
  background-color: #fff;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  margin-top: 6rem;
}

/* Header styling */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 1.5rem 0;
  mix-blend-mode: difference;
}

.site-logo {
  font-family: var(--font-secondary);
  font-size: 1.25rem;
  font-weight: 400;
}

.site-logo a {
  color: white;
  text-decoration: none;
}

.site-nav {
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
}

.site-nav a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  transition: opacity 0.3s ease;
}

.site-nav a:hover {
  opacity: 0.7;
}

.site-nav a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: white;
}

/* Footer styling */
.site-footer {
  padding: 3rem 0;
  background-color: var(--primary-color);
  color: var(--secondary-color);
}

.footer-info,
.footer-contact,
.footer-social {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-contact a,
.footer-social a {
  color: var(--secondary-color);
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.footer-contact a:hover,
.footer-social a:hover {
  opacity: 0.7;
}

/* Page transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Mobile styles */
@media (max-width: 768px) {
  .site-header {
    padding: 1rem 0;
  }
  
  .site-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--primary-color);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  
  .site-nav.active {
    transform: translateX(0);
  }
  
  .mobile-menu-toggle {
    display: block;
    z-index: 101;
  }
  
  .site-footer {
    padding: 2rem 0;
  }
  
  .footer-info,
  .footer-contact,
  .footer-social {
    margin-bottom: 1.5rem;
  }
}
</style> 