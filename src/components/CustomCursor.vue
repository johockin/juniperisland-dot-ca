<template>
  <div class="custom-cursor-container" v-show="isVisible">
    <div 
      class="custom-cursor" 
      :class="{ 'hover': isHovering }" 
      :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'CustomCursor',
  data() {
    return {
      position: { x: 0, y: 0 },
      isHovering: false,
      isVisible: false,
      isDesktop: true,
      interactionElements: [
        'a', 
        'button', 
        '.interactive', 
        '[role="button"]',
        'input',
        'select',
        'label',
        '.grid-item',
        '.menu-link',
        '.project-card'
      ]
    }
  },
  mounted() {
    this.checkDevice();
    if (this.isDesktop) {
      window.addEventListener('mousemove', this.updatePosition);
      window.addEventListener('mouseenter', this.showCursor);
      window.addEventListener('mouseleave', this.hideCursor);
      this.addHoverListeners();
      
      // Recheck device on resize
      window.addEventListener('resize', this.checkDevice);
    }
  },
  beforeUnmount() {
    if (this.isDesktop) {
      window.removeEventListener('mousemove', this.updatePosition);
      window.removeEventListener('mouseenter', this.showCursor);
      window.removeEventListener('mouseleave', this.hideCursor);
      window.removeEventListener('resize', this.checkDevice);
      this.removeHoverListeners();
    }
  },
  methods: {
    checkDevice() {
      this.isDesktop = window.innerWidth > 767;
      this.isVisible = this.isDesktop;
      
      // If switching to desktop, add listeners
      if (this.isDesktop) {
        window.addEventListener('mousemove', this.updatePosition);
        window.addEventListener('mouseenter', this.showCursor);
        window.addEventListener('mouseleave', this.hideCursor);
        this.addHoverListeners();
      } else {
        // If switching to mobile, remove listeners
        window.removeEventListener('mousemove', this.updatePosition);
        window.removeEventListener('mouseenter', this.showCursor);
        window.removeEventListener('mouseleave', this.hideCursor);
        this.removeHoverListeners();
      }
    },
    updatePosition(e) {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        this.position = {
          x: e.clientX,
          y: e.clientY
        };
      });
    },
    showCursor() {
      this.isVisible = true;
    },
    hideCursor() {
      this.isVisible = false;
    },
    addHoverListeners() {
      // Add listeners after DOM is fully loaded
      this.$nextTick(() => {
        // Target interactive elements
        const elements = document.querySelectorAll(this.interactionElements.join(', '));
        elements.forEach(element => {
          element.addEventListener('mouseenter', this.onElementHover);
          element.addEventListener('mouseleave', this.onElementLeave);
        });
      });
      
      // Add mutation observer to watch for new elements
      this.observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.addedNodes.length) {
            mutation.addedNodes.forEach(node => {
              if (node.nodeType === 1) { // Element node
                // Check if the new node matches our selectors
                if (this.interactionElements.some(selector => 
                  node.matches?.(selector) || 
                  node.querySelectorAll?.(selector).length > 0
                )) {
                  this.refreshListeners();
                }
              }
            });
          }
        });
      });
      
      this.observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    },
    refreshListeners() {
      this.removeHoverListeners();
      this.$nextTick(() => {
        const elements = document.querySelectorAll(this.interactionElements.join(', '));
        elements.forEach(element => {
          element.addEventListener('mouseenter', this.onElementHover);
          element.addEventListener('mouseleave', this.onElementLeave);
        });
      });
    },
    removeHoverListeners() {
      const elements = document.querySelectorAll(this.interactionElements.join(', '));
      elements.forEach(element => {
        element.removeEventListener('mouseenter', this.onElementHover);
        element.removeEventListener('mouseleave', this.onElementLeave);
      });
      
      if (this.observer) {
        this.observer.disconnect();
      }
    },
    onElementHover() {
      this.isHovering = true;
    },
    onElementLeave() {
      this.isHovering = false;
    }
  }
}
</script>

<style scoped>
.cursor-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
}

.custom-cursor {
  position: absolute;
  width: var(--cursor-size);
  height: var(--cursor-size);
  margin-left: calc(var(--cursor-size) / -2);
  margin-top: calc(var(--cursor-size) / -2);
  border-radius: 50%;
  background-color: white;
  transition: width var(--cursor-transition), height var(--cursor-transition);
  will-change: transform, width, height;
}

.custom-cursor.hover {
  width: var(--cursor-hover-size);
  height: var(--cursor-hover-size);
  margin-left: calc(var(--cursor-hover-size) / -2);
  margin-top: calc(var(--cursor-hover-size) / -2);
}

@media (max-width: 768px) {
  .cursor-container {
    display: none !important;
  }
}
</style> 