<script setup>
import FormModel from '~/models/FormModels.js'
import { useAppStore } from '~/stores/appStore.js'

const { sendMessage } = useAppStore()

const fields = [
  {
    ...FormModel.CATEGORY,
    props: {
      ...FormModel.CATEGORY.props,
      title: 'Тип объекта:',
      modelValue: FormModel.CATEGORY.props.options[0].id,
      class: 'main-calculator__form-item--small'
    }
  },
  {
    ...FormModel.ADDRESS,
    props: {
      ...FormModel.ADDRESS.props,
      title: 'Адрес:',
      placeholder: 'Введите адрес',
      class: 'main-calculator__form-item--large'
    }
  },
  {
    ...FormModel.NAME,
    props: {
      ...FormModel.NAME.props,
      title: 'Имя:',
      placeholder: 'Введите ваше имя',
      class: 'main-calculator__form-item--medium'
    }
  },
  {
    ...FormModel.PHONE,
    props: {
      ...FormModel.PHONE.props,
      title: 'Телефон:',
      class: 'main-calculator__form-item--medium'
    }
  }
]
</script>

<template>
  <section class="main-calculator">
    <div class="container">
      <h2 class="k-title main-calculator__title">Калькулятор стоимости</h2>

      <p class="k-subtitle main-calculator__subtitle">
        Узнайте предварительную стоимость недвижимости без выезда на&nbsp;объект в&nbsp;течении
        15&nbsp;минут.
      </p>

      <BaseForm :fields class="main-calculator__form" @submit="sendMessage" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-calculator {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.main-calculator__title {
  margin-bottom: 1rem;
}

.main-calculator__subtitle {
  max-width: 25em;
}

.main-calculator__form {
  margin-top: 1.25rem;
}

.main-calculator__form-item {
}

@media only screen and (min-width: 640px) {
  .main-calculator {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  :deep(.main-calculator__form) {
    margin-top: 2.5rem;
    grid-template-columns: repeat(4, 1fr);

    .main-calculator__form-item {
      &--small {
        grid-column: span 1;
      }

      &--medium {
        grid-column: span 2;
      }

      &--large {
        grid-column: span 3;
      }
    }

    .base-form__checkbox-label,
    .base-form__button {
      grid-column: 1/ -1;
    }

    .base-form__checkbox-label {
      margin: auto;
    }

    .base-form__button {
      max-width: 35rem;
      width: 100%;
      margin: auto;
    }
  }
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 960px) {
  .main-calculator {
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }
}

@media only screen and (min-width: 1280px) {
  :deep(.main-calculator__form) {
    grid-template-columns: repeat(5, 1fr);

    .main-calculator__form-item {
      &--small,
      &--medium {
        grid-column: span 1;
      }

      &--large {
        grid-column: span 2;
      }
    }

    .base-form__checkbox-label,
    .base-form__button {
      grid-column: 1/ -1;
    }

    .base-form__checkbox-label {
      margin: auto;
    }
  }
}
</style>
