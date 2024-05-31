<script setup>
import FormModel from '~/models/FormModels.js'

const props = defineProps({
  fields: {
    type: Array,
    default: () => [FormModel.NAME, FormModel.PHONE]
  },

  buttonTitle: {
    type: String,
    default: 'Оформить заявку'
  }
})

const slots = useSlots()

const emit = defineEmits(['submit'])

const formData = reactive({
  checked: true
})

const errorData = reactive({})
const rulesData = reactive({})

props.fields.forEach(field => {
  formData[field.props.name] = field.props.modelValue
  errorData[field.props.name] = undefined
  rulesData[field.props.name] = field.rules
})

const formStatuses = computed(() => {
  return Object.fromEntries(
    props.fields.map(field => {
      const { name } = field.props
      const status = (errorData[name] && 'error') || (formData[name] && 'success') || null

      return [name, status]
    })
  )
})

const isFormInvalid = () => {
  props.fields.forEach(field => {
    if (!rulesData[field.props.name]) return

    const incorrectRule = rulesData[field.props.name].find(rule => {
      const value = formData[field.props.name]

      if (rule.required && !value) {
        return true
      }

      if (rule.pattern) {
        return !new RegExp(rule.pattern).test(value)
      }
    })

    if (incorrectRule) {
      errorData[field.props.name] = incorrectRule.message
    }
  })

  console.log({
    errorData
  })

  return Object.values(errorData).some(v => !!v)
}

const sendData = e => {
  if (!formData.checked) return
  console.log({
    c: isFormInvalid()
  })

  if (isFormInvalid()) return

  const sendingData = { ...formData }
  delete sendingData.checked

  console.log({
    sendingData
  })

  emit('submit', sendingData)

  props.fields.forEach(field => {
    formData[field.props.name] = undefined
  })
}
</script>

<template>
  <form class="base-form" @submit.native.prevent="sendData">
    <div v-if="slots.title || slots.subtitle" class="base-form__heading">
      <h3 v-if="slots.title" class="base-form__title">
        <slot name="title" />
      </h3>

      <p v-if="slots.subtitle" class="base-form__subtitle">
        <slot name="subtitle" />
      </p>
    </div>

    <template v-for="field in fields" :key="field.props.name">
      <component
        :is="field.component"
        v-model="formData[field.props.name]"
        v-bind="field.props"
        :error="errorData[field.props.name]"
        :status="formStatuses[field.props.name]"
        @focus="errorData[field.props.name] = undefined"
        @input="errorData[field.props.name] = undefined"
      />
    </template>

    <label class="base-form__checkbox-label">
      <input type="checkbox" class="base-form__checkbox-input" hidden v-model="formData.checked" />

      <span class="base-form__checkbox" />

      <span>
        Я&nbsp;согласен с&nbsp;условиями обработки персональных данных и&nbsp;
        <span>политикой конфиденциальности</span>
      </span>
    </label>

    <UIButton type="submit" size="medium" class="base-form__button" :disabled="!formData.checked">
      {{ buttonTitle }}
    </UIButton>
  </form>
</template>

<style lang="scss" scoped>
.base-form {
  display: grid;
  grid-gap: 1rem;
  padding: 1.25rem;
  background-color: var(--color-gray-200);
  color: var(--color-black);
  border-radius: var(--border-radius-md);
}

.base-form__heading {
  display: grid;
  grid-gap: 0.625rem;
}

.base-form__title {
  font-size: 1.75rem;
  font-weight: 500;
  color: inherit;
  line-height: 1.2;
}

.base-form__subtitle {
  font-size: 0.875rem;
  line-height: 1.5;
}

.base-form__button {
}

.base-form__checkbox-label {
  position: relative;
  padding-left: 1.875rem;
  cursor: pointer;
  text-align: left;
  font-size: 0.75rem;
  user-select: none;
  color: var(--color-gray-600);
}

.base-form__checkbox-input {
  &:checked ~ .base-form__checkbox {
    background-color: var(--color-primary);
    border-color: var(--color-primary);

    &::before {
      opacity: 1;
    }
  }
}

.base-form__checkbox {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  display: inline-block;
  vertical-align: middle;
  z-index: 2;
  background: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-xs);
  width: 1.25rem;
  height: 1.25rem;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.3s;

  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    transition: all 0.3s;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iMTUiIGhlaWdodD0iMTUiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjQ0IiBkPSJNNDE2IDEyOEwxOTIgMzg0bC05Ni05NiIvPjwvc3ZnPg==);
    background-size: contain;
  }
}

@media only screen and (min-width: 640px) {
  .base-form {
    grid-gap: 1.25rem;
    padding: 2.5rem;
  }

  .base-form__title {
    font-size: 3rem;
  }

  .base-form__subtitle {
    font-size: 1.125rem;
  }

  .base-form__input {
  }

  .base-form__button {
  }
}
</style>
