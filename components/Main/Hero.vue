<script setup>
import { useAppStore } from '~/stores/appStore.js'

const { sendMessage } = useAppStore()
</script>

<template>
  <section class="main-hero">
    <div class="container">
      <div class="main-hero__block">
        <picture class="main-hero__bg">
          <source media="(max-width: 640px)" srcset="/img/hero/main-hero--mobile.jpg" />

          <img src="/img/hero/main-hero.jpg" alt="" class="main-hero__bg-img" />
        </picture>

        <div class="main-hero__content">
          <h1 class="main-hero__title">
            Выкупим любую недвижимость в&nbsp;Вологде и&nbsp;области
          </h1>

          <p class="main-hero__text">
            Выплата достигается по&nbsp;лучшей цене
            <b>до&nbsp;90% от&nbsp;реальной рыночной стоимости.</b> <br />Оперативная покупка
            и&nbsp;заключение сделки в&nbsp;течении 24&nbsp;часов.
          </p>
        </div>
      </div>
    </div>

    <div class="container main-hero__aside">
      <BaseForm
        should-show-label
        @submit="sendMessage"
        class="main-hero__form"
        button-title="Узнать стоимость"
      >
        <template #title>
          Оценка недвижимости
        </template>

        <template #subtitle>
          Оставьте заявку и узнайте какая стоимость вашей недвижимости. <br /><br />
          Всего 5 минут разговора с менеджером и вы узнаете точную стоимость и срок выкупа
        </template>
      </BaseForm>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-hero {
  position: relative;
  z-index: 1;
  margin-bottom: 2rem;
}

.main-hero__block {
  position: relative;
  padding: 4.625rem 1.25rem;
  min-height: 26.25rem;
}

.main-hero__bg {
  max-width: 100%;
  position: absolute;
  z-index: -1;
  inset: 0;
}

.main-hero__bg-img {
  border-radius: var(--border-radius-md);
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-hero__content {
  color: var(--color-white);
}

.main-hero__title {
  font-size: 1.875rem;
  line-height: 1.1;
  font-weight: 500;
}

.main-hero__text {
  font-size: 0.875rem;
  margin-top: 1.25rem;
  max-width: 20.5em;
}

.main-hero__aside {
  margin-top: 1.25rem;
}

.main-hero__form {
}

@media only screen and (min-width: 640px) {
  .main-hero {
    margin-bottom: 3rem;
  }

  .main-hero__block {
    padding: 11rem 2.5rem;
  }

  .main-hero__title {
    font-size: 3rem;
    max-width: 11em;
  }

  .main-hero__text {
    font-size: 1.125rem;

    b {
      font-style: italic;
    }
  }
}

@media only screen and (min-width: 768px) {
  .main-hero {
  }

  .main-hero__block {
    min-height: 42.5rem;
  }

  .main-hero__title {
    font-size: 4rem;
  }
}

@media only screen and (min-width: 1024px) {
  .main-hero {
  }

  .main-hero__block {
  }

  .main-hero__title {
    font-size: 2.75rem;
  }

  .main-hero__aside {
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .main-hero__form {
    pointer-events: auto;
    width: 24rem;
    padding: 1.75rem;
    margin-left: auto;
    margin-right: 2.5rem;

    :deep(.base-form__title) {
      font-size: 2rem;
    }

    :deep(.base-form__subtitle) {
      font-size: 1rem;
    }
  }
}

@media only screen and (min-width: 1280px) {
  .main-hero {
    margin-bottom: 3.75rem;
  }

  .main-hero__block {
  }

  .main-hero__title {
    font-size: 4rem;
  }

  .main-hero__text {
    max-width: 30em;

    b {
      display: inline-block;
    }
  }

  .main-hero__form {
    width: 26rem;
  }
}
</style>
