<template>
  <div class="app">
    <nav class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="logo">
          <img src="/src/assets/logo.png" alt="Juniper Island Logo" class="logo-img">
        </router-link>
        <div class="nav-links">
          <router-link to="/work">Our Work</router-link>
          <div class="dropdown">
            <button class="dropdown-toggle">More</button>
            <div class="dropdown-menu">
              <router-link to="/blog">Blog</router-link>
              <router-link to="/about">About</router-link>
            </div>
          </div>
          <router-link to="/contact" class="cta-button">Work With us</router-link>
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
          <p class="copyright">&copy;2021-2024 Juniper Island.</p>
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
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);

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
    display: flex;
    align-items: center;
    
    .logo-img {
      height: 40px;
      width: auto;
    }
  }

  .nav-links {
    display: flex;
    gap: 2.5rem;
    align-items: center;

    a {
      text-decoration: none;
      color: var(--primary-color);
      font-weight: 500;
      transition: color 0.3s ease;
      font-size: 1.05rem;

      &:hover {
        color: var(--gold-color);
      }

      &.cta-button {
        background: var(--gold-color);
        color: #fff;
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        font-weight: 600;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.05em;

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
        font-size: 1.05rem;
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
        }
      }
      
      .dropdown-menu {
        position: absolute;
        top: 100%;
        left: -1rem;
        background: white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        min-width: 150px;
        padding: 0.5rem;
        margin-top: 0.5rem;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: all 0.3s ease;
        
        a {
          display: block;
          padding: 0.5rem 1rem;
          
          &:hover {
            background: rgba(0, 0, 0, 0.05);
          }
        }
      }
      
      &:hover {
        .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
      }
    }
  }
}

.footer {
  margin-top: auto;
  background: var(--primary-color);
  color: #fff;
  padding: 2rem 0;

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    text-align: center;
  }

  .footer-content {
    display: flex;
    justify-content: center;
  }

  .copyright {
    font-size: 0.9rem;
    opacity: 0.8;
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
      gap: 1.5rem;
      
      a.cta-button {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }
    }
    
    .logo {
      .logo-img {
        height: 30px;
      }
    }
  }
}

@media (max-width: 576px) {
  .navbar {
    .nav-links {
      gap: 1rem;
      
      a {
        font-size: 0.9rem;
      }
      
      a.cta-button {
        padding: 0.4rem 0.8rem;
        font-size: 0.8rem;
      }
    }
  }
}
</style> 