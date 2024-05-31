<script setup>
const props = defineProps({
  option: {
    type: [String, Number, Object],
    required: true
  },

  titleField: {
    type: String,
    default: null
  }
})
</script>

<template>
  <li class="ui-select-option">
    {{ titleField ? option[titleField] : option }}
  </li>
</template>

<style scoped lang="scss">
.ui-select-option {
  padding: 0.75rem 1.25rem;
  transition: var(--transition-color);
  cursor: pointer;

  &:hover {
    background-color: var(--color-gray-300);
  }
}
</style>
