<script setup>
const props = defineProps({
  activeOption: {
    type: [Object, String],
    default: null
  },

  open: {
    type: Boolean,
    default: false
  },

  placeholder: {
    type: String,
    default: null
  },

  titleField: {
    type: String,
    default: null
  },

  suffixIcon: {
    type: String,
    default: null
  }
})
</script>

<template>
  <div class="ui-select-header">
    <p class="ui-select-header__content">
      {{ activeOption ? (titleField ? activeOption[titleField] : activeOption) : placeholder }}
    </p>

    <slot name="suffix">
      <UIIcon v-if="suffixIcon" :name="suffixIcon" class="ui-select-header__icon" />

      <IconShapeArrow v-else :is-reverse="open" class="ui-select-header__arrow" />
    </slot>
  </div>
</template>

<style scoped lang="scss">
.ui-select-header {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.75rem 1.25rem;
  background: var(--color-white);
  transition: var(--transition-color), var(--transition-bgcolor);
  border-radius: var(--border-radius-md);
}

.ui-select-header__content {
  flex: 1 0 50%;
  font-size: 1rem;
  line-height: 1.5rem;
}

.ui-select-header__icon {
  width: 1.5rem;
  height: 1.5rem;
}

.ui-select-header__arrow {
  width: 1rem;
  height: 1rem;
}
</style>
