<script setup>
import { NuxtLink } from '#components'

const props = defineProps({
  /* Отвечает за размер кнопки и отступов */
  size: {
    type: String,
    default: 'large',
    validator: value => ['small', 'medium', 'large'].includes(value)
  },

  /* Отвечает за цвета */
  theme: {
    type: String,
    default: 'primary',
    validator: value => ['primary'].includes(value)
  },

  title: {
    type: String,
    default: null
  },

  disabled: {
    type: Boolean,
    default: false
  },

  link: {
    type: [String, Object],
    default: null
  }
})
</script>

<template>
  <component
    :is="link ? NuxtLink : 'button'"
    :to="link"
    :title="title"
    class="ui-button"
    :class="[`ui-button--theme-${props.theme}`, `ui-button--size-${props.size}`]"
    :disabled="disabled"
  >
    <slot />
  </component>
</template>

<style scoped>
.ui-button {
  font-family: inherit;
  position: relative;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  transition: var(--transition-color), var(--transition-bgcolor);
  border-radius: var(--border-radius-md);
  border: none;
}

.ui-button--theme-primary {
  color: var(--color-white);
  background-color: var(--color-primary);

  &:hover {
    background-color: var(--color-primary-darken);
  }

  &:active {
    background-color: var(--color-primary-darken);
    box-shadow: inset 0.125rem 0.125rem 0.625rem 0 rgba(0, 0, 0, 0.25);
  }

  &:disabled {
    background-color: var(--color-gray-300);
    color: var(--color-gray-700);
    box-shadow: none;
    pointer-events: none;
  }
}

.ui-button--size-small {
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
}

.ui-button--size-medium {
  font-size: 0.875rem;
  padding: 0.75rem 1.25rem;
}

.ui-button--size-large {
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
}
</style>
