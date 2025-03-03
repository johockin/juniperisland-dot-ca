<template>
  <div class="app">
    <nav class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="logo">
          <img src="@/assets/logo.png" alt="Juniper Island" />
        </router-link>
        <div class="nav-links">
          <router-link to="/our-work">Our Work</router-link>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/our-work" class="cta-button">Work With Us</router-link>
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
        <img src="@/assets/logo.png" alt="Juniper Island" class="footer-logo" />
        <div class="footer-links">
          <router-link to="/">Home</router-link>
          <router-link to="/our-work">Our Work</router-link>
          <router-link to="/blog">Blog</router-link>
        </div>
        <div class="social-links">
          <a href="https://www.facebook.com/JuniperIsland" target="_blank" rel="noopener">
            <img src="@/assets/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/juniper.island/" target="_blank" rel="noopener">
            <img src="@/assets/instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>©2021-2025 Juniper Island.</p>
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
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
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
    img {
      height: 40px;
    }
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
        padding: 0.5rem 1.5rem;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .footer-logo {
    height: 40px;
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

    img {
      height: 24px;
      transition: opacity 0.3s ease;
    }

    a:hover img {
      opacity: 0.8;
    }
  }

  .footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
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
</style> 