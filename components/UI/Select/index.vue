<script setup>
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    type: [String, Number, Object],
    default: null
  },

  options: {
    type: Array,
    required: true
  },

  title: {
    type: String,
    default: null
  },

  disabled: {
    type: Boolean,
    default: false
  },

  placeholder: {
    type: String,
    default: null
  },

  titleField: {
    type: String,
    default: 'title'
  },

  valueField: {
    type: String,
    default: 'value'
  },

  error: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:model-value'])

const localValue = ref(props.modelValue)
const activeOption = ref(
  props.modelValue
    ? props.options.find(item => {
        const value = props.valueField ? item[props.valueField] : item
        return value === props.modelValue
      }) || null
    : null
)
const open = ref(false)
const refSelect = ref(null)

const setActiveOption = item => {
  activeOption.value = item
  open.value = false
}

watch(activeOption, value => {
  emit('update:model-value', props.valueField ? value[props.valueField] : value)
})

watch(
  () => props.modelValue,
  value => {
    localValue.value = value
  }
)

onClickOutside(refSelect, () => (open.value = false))
</script>

<template>
  <div class="ui-select" :disabled ref="refSelect" tabindex="0" @keydown.enter.self="open = !open">
    <p v-if="title" class="ui-select__title">
      {{ title }}
    </p>

    <UISelectHeader :active-option :open :title-field :placeholder @click="open = !open" />

    <Transition>
      <div v-if="open" class="ui-select__list">
        <UISelectOption
          v-for="(option, index) in options"
          :key="option.id || index"
          :option="option"
          :title-field
          @click="setActiveOption(option)"
          tabindex="0"
          @keydown.enter="setActiveOption(option)"
        />
      </div>
    </Transition>

    <p v-if="error" class="ui-select__error">
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
.ui-select {
  position: relative;
  border-radius: var(--border-radius-md);

  &:focus-visible {
    outline: 2px solid currentColor;
  }
}

.ui-select__list {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.5rem;
  background-color: var(--color-white);
  border-radius: var(--border-radius-md);
  color: var(--color-black);
  list-style: none;
  border: 1px solid var(--color-gray-300);
  min-width: 100%;
  box-shadow: 0 2px 4px var(--color-gray-300);
  z-index: 9;
}

.ui-select__title {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.ui-select__error {
  color: var(--color-error);
  font-size: 0.75rem;
  margin-top: 0.25rem;
}
</style>
