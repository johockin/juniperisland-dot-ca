<template>
  <div class="grid-layout" :class="[`columns-${columns}`, className]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GridLayout',
  props: {
    columns: {
      type: [Number, String],
      default: 12
    },
    className: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.grid-layout {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: var(--grid-gap);
  padding: 0 var(--grid-padding);
  
  &.columns-1 { --grid-columns: 1; }
  &.columns-2 { --grid-columns: 2; }
  &.columns-3 { --grid-columns: 3; }
  &.columns-4 { --grid-columns: 4; }
  &.columns-6 { --grid-columns: 6; }
  &.columns-12 { --grid-columns: 12; }

  // Grid items spanning options
  [class*="grid-span-"] {
    display: block;
  }
  
  .grid-span-1 { grid-column: span 1; }
  .grid-span-2 { grid-column: span 2; }
  .grid-span-3 { grid-column: span 3; }
  .grid-span-4 { grid-column: span 4; }
  .grid-span-5 { grid-column: span 5; }
  .grid-span-6 { grid-column: span 6; }
  .grid-span-7 { grid-column: span 7; }
  .grid-span-8 { grid-column: span 8; }
  .grid-span-9 { grid-column: span 9; }
  .grid-span-10 { grid-column: span 10; }
  .grid-span-11 { grid-column: span 11; }
  .grid-span-12 { grid-column: span 12; }
  
  // Grid position options
  .grid-start-1 { grid-column-start: 1; }
  .grid-start-2 { grid-column-start: 2; }
  .grid-start-3 { grid-column-start: 3; }
  .grid-start-4 { grid-column-start: 4; }
  .grid-start-5 { grid-column-start: 5; }
  .grid-start-6 { grid-column-start: 6; }
  .grid-start-7 { grid-column-start: 7; }
  .grid-start-8 { grid-column-start: 8; }
  .grid-start-9 { grid-column-start: 9; }
  .grid-start-10 { grid-column-start: 10; }
  .grid-start-11 { grid-column-start: 11; }
  .grid-start-12 { grid-column-start: 12; }
  
  @media (max-width: 1024px) {
    &.columns-4,
    &.columns-6 {
      --grid-columns: 2;
    }
  }
  
  @media (max-width: 768px) {
    --grid-columns: 1 !important;
    --grid-gap: 1.5rem;
    
    [class*="grid-span-"],
    [class*="grid-start-"] {
      grid-column: 1 / -1;
    }
  }
}
</style> 