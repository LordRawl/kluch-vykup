<script setup>
defineProps({
  isReverse: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <span class="shape-arrow" :class="{ 'shape-arrow--reverse': isReverse }" />
</template>

<style scoped>
.shape-arrow {
  display: inline-block;
  cursor: pointer;
  position: relative;
  transition: var(--transition-bgcolor);
  line-height: 0;
}

.shape-arrow:before,
.shape-arrow:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  height: 10%;
  background-color: currentColor;
  transition: var(--transition-transform);
  border-radius: 9999px;
}

.shape-arrow:before {
  transform: translate(-5.25%, -50%) rotate(-45deg) translate(-12.5%, -50%);
}

.shape-arrow:after {
  transform: translate(-94.75%, -50%) rotate(45deg) translate(12.5%, -50%);
}

.shape-arrow--reverse:before {
  transform: translate(-5.25%, -50%) rotate(-135deg) translate(12.5%, -50%);
}

.shape-arrow--reverse:after {
  transform: translate(-94.75%, -50%) rotate(135deg) translate(-12.5%, -50%);
}
</style>
