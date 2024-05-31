<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },

  title: {
    type: String,
    default: ''
  },

  error: {
    type: String,
    default: ''
  },

  type: {
    type: String,
    default: 'text'
  },

  placeholder: {
    type: String,
    default: ''
  },

  status: {
    type: [String, Boolean, null],
    default: null,
    validator: val => ['success', 'error', false, null].includes(val)
  },

  mask: {
    type: String,
    default: null
  },

  maxlength: {
    type: String,
    default: null
  },

  regexpFilter: {
    type: RegExp,
    default: null
  },

  disabled: {
    type: Boolean,
    default: false
  },

  min: {
    type: Number,
    default: null
  },

  max: {
    type: Number,
    default: null
  },

  tabindex: {
    type: [Number, String],
    default: null
  },

  inputmode: {
    type: String,
    default: null
  },

  step: {
    type: String,
    default: null
  },

  name: {
    type: String,
    default: null
  },

  autocomplete: {
    type: String,
    default: null
  },

  isCurrency: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:model-value', 'focus', 'blur'])

const inputNumberBlockedKeys = new RegExp(/[^0-9.-]/g)
const localValue = ref(props.modelValue)
const isFocused = ref(false)

watch(
  () => props.modelValue,
  newVal => {
    let currentVal = localValue.value

    if (props.type === 'number') {
      currentVal = +currentVal
      newVal = +newVal
    }

    if (currentVal !== newVal) {
      localValue.value = newVal
    }
  }
)

watch(localValue, newVal => {
  if (props.type === 'number' && Number.isFinite(props.max) && +newVal > props.max) {
    localValue.value = props.max
  } else {
    emit('update:model-value', newVal)
  }
})

const setValue = event => {
  if (props.isCurrency) {
    if (/^\d*(\.\d{0,2})?$/.test(event.target.value)) {
      localValue.value = event.target.value
      return
    }

    event.target.value = localValue.value
    return
  }

  localValue.value = event.target.value
}

const onFocus = event => {
  isFocused.value = true

  emit('focus', event)
}

const onBlur = event => {
  isFocused.value = false
  checkMinValue()

  nextTick(() => {
    emit('blur', event)
  })
}

const onKeyPress = event => {
  if (props.type === 'number' && event.key !== 'Enter' && event.key.match(inputNumberBlockedKeys)) {
    event.preventDefault()
    return
  }

  if (event.key !== sanitizeValue(event.key)) {
    event.preventDefault()
  }
}

const onPaste = event => {
  if (props.type === 'number') {
    event.preventDefault()

    const { clipboardData } = event.originalEvent || event
    const content = clipboardData.getData('text/plain').replace(inputNumberBlockedKeys, '')

    document.execCommand('insertText', false, content)
  }

  setTimeout(() => {
    const filtered = sanitizeValue(event.target.value)
    if (event.target.value !== filtered) {
      localValue.value = filtered
    }
  }, 0)
}

const sanitizeValue = value => {
  let filtered = value

  if (props.regexpFilter) {
    filtered = filtered.replace(props.regexpFilter, '')
  }

  return filtered
}

const checkMinValue = () => {
  if (props.type === 'number' && Number.isFinite(props.min) && +localValue.value < props.min) {
    localValue.value = props.min
  }
}
</script>

<template>
  <div
    class="ui-input"
    :class="[status && `ui-input--status-${status}`, isFocused && 'ui-input--status-focused']"
  >
    <p v-if="title" class="ui-input__title">
      {{ title }}
    </p>

    <label class="ui-input__label">
      <slot name="prefix" />

      <input
        :value="localValue"
        v-mask="mask"
        :type
        :placeholder
        :maxlength
        :disabled
        :tabindex
        :name
        :inputmode
        :step
        :autocomplete
        class="ui-input__input"
        @focus="onFocus"
        @blur="onBlur"
        @keypress="onKeyPress"
        @paste="onPaste"
        @input="setValue"
      />

      <slot name="suffix" />
    </label>

    <p v-if="error" class="ui-input__error">
      {{ error }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.ui-input {
  --background: var(--color-white);
  --border-color: var(--background);

  &--status-success {
    --border-color: var(--color-primary);
  }

  &--status-error {
    --border-color: var(--color-error);
  }

  &--status-focused {
    --border-color: var(--color-primary);
  }
}

.ui-input__title {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.ui-input__label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1.25rem;
  background: var(--background);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--border-color);
  transition: var(--transition-colors);

  &::-webkit-input-placeholder {
    color: var(--color-black);
    opacity: 0.5;
  }
}

.ui-input__input {
  outline: none;
  box-sizing: border-box;
  border: none;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0;
  flex: 1 1 50%;
  max-width: 100%;
}

.ui-input__error {
  color: var(--color-error);
  font-size: 0.75rem;
  margin-top: 0.25rem;
}
</style>
