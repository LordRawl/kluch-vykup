<script setup>
const props = defineProps({
  name: String,

  filled: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <NuxtIcon :name="name" class="icon" :filled="filled" />
</template>

<style scoped>
.icon :deep(svg) {
  width: 100%;
  height: 100%;
  margin-bottom: 0;
  vertical-align: initial;
}
</style>
