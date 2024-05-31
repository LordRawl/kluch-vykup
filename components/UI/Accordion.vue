<script setup>
const props = defineProps({
  title: {
    type: String,
    default: null
  }
})

const open = ref(false)
</script>

<template>
  <div class="ui-accordion" tabindex="0" @keydown.enter.self="open = !open">
    <div class="ui-accordion__header" @click="open = !open">
      <p class="ui-accordion__title">
        {{ title }}
      </p>

      <slot name="suffix">
        <IconShapeArrow :is-reverse="open" class="ui-accordion__arrow" />
      </slot>
    </div>

    <Transition>
      <div v-if="open" class="ui-accordion__content">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.ui-accordion {
  background: var(--color-gray-200);
  border-radius: var(--border-radius-md);
}

.ui-accordion__header {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.75rem 1.25rem;
  transition: var(--transition-color), var(--transition-bgcolor);
}

.ui-accordion__title {
  flex: 1 1 50%;
}

.ui-accordion__arrow {
  width: 1rem;
  height: 1rem;
}

.ui-accordion__content {
  border-top: 1px solid var(--color-gray-300);
  padding: 0.5rem 1.25rem 1rem;
}
</style>
