<script setup>
import FormModel from '~/models/FormModels.js'
import { useAppStore } from '~/stores/appStore.js'

const { sendMessage } = useAppStore()
</script>

<template>
  <section class="main-form">
    <div class="container main-form__container">
      <BaseForm class="main-form__form" @submit="sendMessage" button-title="Получить консультацию">
        <template #title>
          Бесплатная консультация
        </template>

        <template #subtitle>
          Заполните форму и&nbsp;мы&nbsp;перезвоним вам в&nbsp;течении 2-х минут
          и&nbsp;проконсультируем по&nbsp;всем вопросам
        </template>
      </BaseForm>

      <figure class="main-form__block">
        <figcaption class="main-form__contact">
          <p class="main-form__name">Илья Смышляев</p>

          <p class="main-form__text">Специалист по срочному выкупу</p>
        </figcaption>

        <div class="main-form__circle" />

        <picture class="main-form__img-wrapper">
          <source srcset="/img/form-image.webp" type="image/webp" />

          <img
            src="/img/form-image.png"
            alt="Илья Смышляев"
            width="152"
            height="191"
            class="main-form__img"
          />
        </picture>
      </figure>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-form {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.main-form__container {
  display: grid;
  grid-gap: 1.25rem;
}

.main-form__block {
  padding: 1.25rem;
  border-radius: var(--border-radius-md);
  background-color: var(--color-gray-200);
  min-height: 14rem;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: end;
  margin: 0;
  z-index: 1;
}

.main-form__contact {
  display: grid;
  grid-gap: 0.5rem;
  max-width: 10rem;
}

.main-form__name {
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 500;
}

.main-form__text {
  font-size: 0.875rem;
}

.main-form__img-wrapper {
  position: absolute;
  bottom: 0;
  right: 1rem;
  font-size: 0.625rem;
  width: 15em;
  height: 19em;
  z-index: -1;
}

.main-form__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.main-form__circle {
  border-radius: 100%;
  background: linear-gradient(225deg, var(--color-primary) -30%, var(--color-gray-200) 70%);
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  font-size: 0.625rem;
  width: 20em;
  height: 20em;
  z-index: -1;
}

@media only screen and (min-width: 640px) {
  .main-form {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .main-form__block {
    min-height: 30rem;
    padding: 2.5rem;
  }

  .main-form__contact {
    grid-gap: 1.25rem;
    max-width: 50%;
  }

  .main-form__name {
    font-size: 2rem;
  }

  .main-form__text {
    font-size: 1.125rem;
  }

  .main-form__img-wrapper {
    right: 1.5rem;
  }

  .main-form__img-wrapper,
  .main-form__circle {
    font-size: 1.225rem;
  }
}

@media only screen and (min-width: 768px) {
  .main-form__block {
    min-height: 35rem;
  }

  .main-form__img-wrapper,
  .main-form__circle {
    font-size: 1.625rem;
  }
}

@media only screen and (min-width: 960px) {
  .main-form {
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }

  .main-form__container {
    grid-template-columns: 0.7fr 1fr;
  }

  .main-form__img-wrapper {
    font-size: 1.125rem;
  }

  .main-form__circle {
    font-size: 1.325rem;
  }
}

@media only screen and (min-width: 1280px) {
  .main-form__img-wrapper,
  .main-form__circle {
    font-size: 1.625rem;
  }
}
</style>
