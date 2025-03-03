<template>
  <div class="app">
    <nav class="navbar" :class="{ scrolled: isNavbarScrolled }">
      <div class="navbar-container">
        <router-link to="/" class="logo">
          <img src="/src/assets/logo.png" alt="Juniper Island Logo" class="logo-img">
        </router-link>
        <div class="nav-links" :class="{ active: isMobileMenuOpen }">
          <router-link to="/" exact @click="isMobileMenuOpen = false">Home</router-link>
          <router-link to="/work" @click="isMobileMenuOpen = false">Our Work</router-link>
          <div class="dropdown">
            <button class="dropdown-toggle">More</button>
            <div class="dropdown-menu">
              <router-link to="/blog" @click="isMobileMenuOpen = false">Blog</router-link>
              <router-link to="/about" @click="isMobileMenuOpen = false">About</router-link>
              <router-link to="/contact" @click="isMobileMenuOpen = false">Contact</router-link>
            </div>
          </div>
          <router-link to="/contact" class="cta-button" @click="isMobileMenuOpen = false">Work With Us</router-link>
        </div>
        <button class="mobile-menu-toggle" :class="{ active: isMobileMenuOpen }" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="/src/assets/logo-white.png" alt="Juniper Island Logo" class="footer-logo-img">
          </div>
          <div class="footer-links">
            <div class="footer-nav">
              <router-link to="/">Home</router-link>
              <router-link to="/work">Our Work</router-link>
              <router-link to="/blog">Blog</router-link>
              <router-link to="/about">About</router-link>
              <router-link to="/contact">Contact</router-link>
            </div>
            <div class="footer-social">
              <a href="https://instagram.com/juniperisland" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com/company/juniper-island" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <p class="copyright">&copy; 2021-2024 Juniper Island. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMobileMenuOpen = ref(false);
const isNavbarScrolled = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : '';
};

const handleScroll = () => {
  isNavbarScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.98);
  padding: 1.25rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &.scrolled {
    padding: 1rem 0;
    background: rgba(255, 255, 255, 0.98);
  }

  .navbar-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    text-decoration: none;
    display: flex;
    align-items: center;
    
    .logo-img {
      height: 45px;
      width: auto;
      transition: height 0.3s ease;
    }
  }

  .nav-links {
    display: flex;
    gap: 3rem;
    align-items: center;

    a {
      text-decoration: none;
      color: var(--primary-color);
      font-weight: 500;
      transition: color 0.3s ease;
      font-size: 1.1rem;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--gold-color);
        transition: width 0.3s ease;
      }

      &:hover, &.router-link-active {
        color: var(--gold-color);
        
        &::after {
          width: 100%;
        }
      }

      &.cta-button {
        background: var(--gold-color);
        color: #fff;
        padding: 0.85rem 1.75rem;
        border-radius: 4px;
        font-weight: 600;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-left: 1rem;

        &::after {
          display: none;
        }

        &:hover {
          background: var(--dark-gold);
          transform: translateY(-2px);
        }
      }
    }
    
    .dropdown {
      position: relative;
      
      .dropdown-toggle {
        font-family: var(--font-primary);
        background: none;
        border: none;
        color: var(--primary-color);
        font-weight: 500;
        cursor: pointer;
        padding: 0;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        
        &:hover {
          color: var(--gold-color);
        }
        
        &::after {
          content: '';
          display: inline-block;
          margin-left: 0.5em;
          width: 0.5em;
          height: 0.5em;
          border-right: 2px solid;
          border-bottom: 2px solid;
          transform: rotate(45deg);
          transition: transform 0.3s ease;
        }
      }
      
      .dropdown-menu {
        position: absolute;
        top: calc(100% + 1rem);
        left: 50%;
        transform: translateX(-50%) translateY(-10px);
        background: white;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        min-width: 180px;
        padding: 0.75rem 0;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        
        &::before {
          content: '';
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 12px;
          height: 12px;
          background: white;
        }
        
        a {
          display: block;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          text-align: center;
          
          &:hover {
            background: rgba(0, 0, 0, 0.02);
          }
          
          &::after {
            display: none;
          }
        }
      }
      
      &:hover {
        .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        
        .dropdown-toggle::after {
          transform: rotate(-135deg);
        }
      }
    }
  }
  
  .mobile-menu-toggle {
    display: none;
    flex-direction: column;
    gap: 6px;
    padding: 5px;
    
    span {
      display: block;
      width: 24px;
      height: 2px;
      background: var(--primary-color);
      transition: all 0.3s ease;
    }
  }
}

.footer {
  margin-top: auto;
  background: var(--primary-color);
  color: #fff;
  padding: 4rem 0;

  .footer-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 3rem;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }

  .footer-logo {
    .footer-logo-img {
      height: 60px;
      width: auto;
    }
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .footer-nav {
    display: flex;
    gap: 2rem;
    
    a {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.1rem;
      transition: all 0.3s ease;
      
      &:hover {
        color: var(--gold-color);
      }
    }
  }

  .footer-social {
    display: flex;
    gap: 1.5rem;
    
    a {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.5rem;
      transition: all 0.3s ease;
      
      &:hover {
        color: var(--gold-color);
        transform: translateY(-2px);
      }
    }
  }

  .copyright {
    font-size: 0.95rem;
    opacity: 0.6;
    text-align: center;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1024px) {
  .navbar {
    .navbar-container {
      padding: 0 2rem;
    }

    .nav-links {
      gap: 2rem;
      
      a {
        font-size: 1rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem 0;
    
    .navbar-container {
      padding: 0 1.5rem;
    }

    .logo .logo-img {
      height: 35px;
    }

    .nav-links {
      position: fixed;
      top: 0;
      right: -100%;
      height: 100vh;
      width: 80%;
      max-width: 400px;
      background: white;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      padding: 2rem;
      transition: right 0.3s ease;
      box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
      
      &.active {
        right: 0;
      }
      
      a {
        font-size: 1.2rem;
        text-align: center;
        
        &.cta-button {
          margin: 1rem 0 0;
          width: 100%;
          text-align: center;
        }
      }
      
      .dropdown {
        .dropdown-toggle {
          font-size: 1.2rem;
        }
        
        .dropdown-menu {
          position: static;
          transform: none;
          box-shadow: none;
          opacity: 1;
          visibility: visible;
          padding: 1rem 0 0;
          
          &::before {
            display: none;
          }
          
          a {
            font-size: 1.1rem;
            padding: 0.5rem 0;
          }
        }
      }
    }
    
    .mobile-menu-toggle {
      display: flex;
      z-index: 1001;
      
      &.active {
        span {
          &:first-child {
            transform: translateY(8px) rotate(45deg);
          }
          
          &:nth-child(2) {
            opacity: 0;
          }
          
          &:last-child {
            transform: translateY(-8px) rotate(-45deg);
          }
        }
      }
    }
  }

  .footer {
    padding: 3rem 0;
    
    .footer-container {
      padding: 0 1.5rem;
    }
    
    .footer-nav {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      
      a {
        font-size: 1rem;
      }
    }
  }
}
</style> 