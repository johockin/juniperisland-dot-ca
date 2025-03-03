<template>
  <div class="app">
    <nav class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="logo">
          Juniper Island
        </router-link>
        <div class="nav-links">
          <router-link to="/work">Work</router-link>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/contact" class="cta-button">Contact</router-link>
        </div>
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
          <div class="footer-brand">Juniper Island</div>
          <div class="footer-links">
            <router-link to="/">Home</router-link>
            <router-link to="/work">Work</router-link>
            <router-link to="/blog">Blog</router-link>
            <router-link to="/contact">Contact</router-link>
          </div>
          <div class="social-links">
            <a href="https://www.instagram.com/juniper.island/" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.linkedin.com/company/juniper-island/" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Juniper Island. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Component logic will go here
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
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  .navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    text-decoration: none;
    color: #000;
    font-weight: 700;
    font-size: 1.5rem;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;

    a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      transition: color 0.3s ease;

      &:hover {
        color: #666;
      }

      &.cta-button {
        background: #000;
        color: #fff;
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        transition: background-color 0.3s ease;

        &:hover {
          background: #333;
        }
      }
    }
  }
}

.footer {
  margin-top: auto;
  background: #000;
  color: #fff;
  padding: 4rem 0 2rem;

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }

  .footer-brand {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .footer-links {
    display: flex;
    gap: 2rem;

    a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #ccc;
      }
    }
  }

  .social-links {
    display: flex;
    gap: 1rem;

    a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #ccc;
      }
    }
  }

  .footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.875rem;
    color: #999;
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

@media (max-width: 768px) {
  .navbar {
    .navbar-container {
      padding: 0 1rem;
    }

    .nav-links {
      gap: 1rem;
    }
  }

  .footer {
    .footer-content {
      flex-direction: column;
      gap: 2rem;
      text-align: center;
    }

    .footer-links {
      flex-direction: column;
      gap: 1rem;
    }
  }
}
</style> 