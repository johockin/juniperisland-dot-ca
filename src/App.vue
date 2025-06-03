<template>
  <div class="app">
    <CustomCursor />
    
    <header class="site-header" v-if="$route.path !== '/admin'">
      <div class="grid">
        <!-- Logo in the top left -->
        <div class="header-logo col-span-2 col-start-1">
          <router-link to="/" class="logo">
            <img src="@/assets/logo.svg" alt="Juniper Island logo" class="logo-img" />
          </router-link>
        </div>
        
        <!-- Main navigation in the top right -->
        <nav class="main-nav col-span-4 col-start-9">
          <router-link to="/" exact>Home</router-link>
          <router-link to="/work">Projects</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/blog">Journal</router-link>
          <router-link to="/contact">Contact</router-link>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="site-footer" v-if="$route.path !== '/admin'">
      <div class="grid">
        <!-- Footer info left -->
        <div class="footer-info col-span-3 col-start-1">
          <p>&copy; {{ currentYear }} Juniper Island</p>
          <p>Toronto, ON</p>
        </div>
        
        <!-- Footer navigation center -->
        <nav class="footer-nav col-span-6 col-start-4">
          <router-link to="/">Home</router-link>
          <router-link to="/work">Projects</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/blog">Journal</router-link>
          <router-link to="/contact">Contact</router-link>
        </nav>
        
        <!-- Footer contact right -->
        <div class="footer-contact col-span-3 col-start-10">
          <a href="mailto:hello@juniperisland.ca">hello@juniperisland.ca</a>
          <div class="social-links">
            <a href="https://instagram.com/juniperisland" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com/company/juniper-island" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { updateMetaTags, createOrganizationStructuredData } from './utils/seo';
import CustomCursor from './components/CustomCursor.vue';

export default {
  name: 'App',
  components: {
    CustomCursor
  },
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  },
  mounted() {
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

/* App layout */
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  margin-top: 60px; /* Height of the header */
}

/* Header styling */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--z-header);
  padding: var(--space-4) 0;
  mix-blend-mode: difference;
}

.header-logo,
.main-nav {
  color: white;
}

.header-logo {
  display: flex;
  align-items: center;
}

.logo {
  font-family: var(--font-secondary);
  font-size: var(--text-xl);
  font-weight: 400;
  text-decoration: none;
}

.main-nav {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-6);
}

.main-nav a {
  font-size: var(--text-base);
  position: relative;
  opacity: 0.8;
  transition: opacity var(--transition-base);
}

.main-nav a:hover,
.main-nav a.router-link-active {
  opacity: 1;
}

.main-nav a.router-link-active::after {
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
  padding: var(--space-10) 0;
  background-color: var(--bg-dark);
  color: var(--secondary-color);
}

.footer-info,
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.footer-nav {
  display: flex;
  justify-content: center;
  gap: var(--space-5);
}

.footer-contact {
  text-align: right;
}

.social-links {
  display: flex;
  gap: var(--space-4);
  justify-content: flex-end;
  margin-top: var(--space-2);
}

.footer-nav a,
.footer-contact a {
  opacity: 0.7;
  transition: opacity var(--transition-base);
}

.footer-nav a:hover,
.footer-contact a:hover {
  opacity: 1;
}

/* Page transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-base);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Mobile menu */
.mobile-menu-toggle {
  display: none;
}

/* Media Queries */
@media (max-width: 991px) {
  .main-nav {
    gap: var(--space-4);
  }
  
  .footer-nav {
    flex-wrap: wrap;
  }
}

@media (max-width: 767px) {
  .site-header {
    padding: var(--space-3) 0;
  }
  
  .header-logo {
    col-span: 6;
  }
  
  .main-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-dark);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-6);
    transform: translateX(-100%);
    transition: transform var(--transition-base);
  }
  
  .main-nav.active {
    transform: translateX(0);
  }
  
  .mobile-menu-toggle {
    display: block;
    position: absolute;
    top: var(--space-4);
    right: var(--space-4);
    width: 30px;
    height: 20px;
    z-index: calc(var(--z-header) + 1);
  }
  
  .site-footer {
    padding: var(--space-6) 0;
  }
  
  .footer-info,
  .footer-nav,
  .footer-contact {
    grid-column: span 12;
    grid-column-start: 1;
    margin-bottom: var(--space-6);
    text-align: left;
  }
  
  .footer-nav {
    flex-direction: column;
    gap: var(--space-3);
    align-items: flex-start;
  }
  
  .footer-contact {
    margin-bottom: 0;
  }
  
  .social-links {
    justify-content: flex-start;
  }
}

.logo-img {
  height: 36px;
  width: auto;
  display: block;
  filter: invert(1); /* Invert logo for better contrast on light backgrounds */
}
</style> 