<template>
  <div class="cursor-container" v-show="isVisible">
    <div 
      class="custom-cursor" 
      :class="{ 'hover': isHovering }" 
      :style="{ 
        transform: `translate(${position.x}px, ${position.y}px)`,
        mixBlendMode: 'difference'
      }"
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
      isDesktop: true
    }
  },
  mounted() {
    this.checkDevice();
    if (this.isDesktop) {
      window.addEventListener('mousemove', this.updatePosition);
      window.addEventListener('mouseenter', this.showCursor);
      window.addEventListener('mouseleave', this.hideCursor);
      this.addHoverListeners();
    }
  },
  beforeUnmount() {
    if (this.isDesktop) {
      window.removeEventListener('mousemove', this.updatePosition);
      window.removeEventListener('mouseenter', this.showCursor);
      window.removeEventListener('mouseleave', this.hideCursor);
      this.removeHoverListeners();
    }
  },
  methods: {
    checkDevice() {
      this.isDesktop = window.innerWidth > 768;
      this.isVisible = this.isDesktop;
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
      // Target interactive elements
      const interactiveElements = document.querySelectorAll('a, button, .interactive, [role="button"]');
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', this.onElementHover);
        element.addEventListener('mouseleave', this.onElementLeave);
      });
    },
    removeHoverListeners() {
      const interactiveElements = document.querySelectorAll('a, button, .interactive, [role="button"]');
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', this.onElementHover);
        element.removeEventListener('mouseleave', this.onElementLeave);
      });
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