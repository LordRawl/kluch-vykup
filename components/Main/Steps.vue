<script setup>
const shouldModalOpen = ref(false)

const list = [
  {
    title: 'Обращение в&nbsp;компанию',
    description: 'Специалист в&nbsp;индивидуальном порядке разберет вашу ситуацию',
    action: {
      title: 'Оставить заявку',
      callback: () => (shouldModalOpen.value = true)
    },
    time: '15 минут',
    icon: 'call-calling'
  },
  {
    title: 'Оценка недвижимости',
    description: 'Оценка стоимости недвижимости проводится бесплатно',
    time: 'от 2 часов',
    icon: 'calculator'
  },
  {
    title: 'Сбор документов',
    description: 'Соберем и&nbsp;подготовим все необходимые для сделки документы',
    time: 'от 3 часов',
    icon: 'task-square'
  },
  {
    title: 'Заключение сделки и&nbsp;получение денег',
    description: 'Перечислим денежные средства в&nbsp;день сделки',
    icon: 'edit'
  }
]
</script>

<template>
  <section class="main-steps">
    <div class="container">
      <h2 class="k-title main-steps__title">Процесс выкупа недвижимости</h2>

      <p class="k-subtitle main-steps__subtitle">От обращения до сделки за 24 часа</p>

      <ul class="main-steps__list">
        <li v-for="(item, index) in list" :key="index" class="main-steps__item">
          <div class="main-steps__wrapper">
            <div class="main-steps__content">
              <h3 class="main-steps__heading" v-html="item.title" />

              <p class="main-steps__text" v-html="item.description" />

              <UIButton v-if="item.action" size="medium" @click="item.action.callback">
                {{ item.action.title }}
              </UIButton>
            </div>

            <UIIcon :name="item.icon" width="60" height="60" class="main-steps__icon" />
          </div>

          <p v-if="item.time" class="main-steps__time">{{ item.time }}</p>
        </li>
      </ul>
    </div>
  </section>

  <ModalEstimationForm v-model:should-show-modal="shouldModalOpen" />
</template>

<style scoped lang="scss">
.main-steps {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.main-steps__title {
  max-width: 11em;
  margin-bottom: 1rem;
}

.main-steps__list {
  display: grid;
  counter-reset: list;
  margin-top: 1.25rem;
}

.main-steps__item {
  position: relative;
}

.main-steps__wrapper {
  position: relative;
  background-color: var(--color-gray-200);
  border-radius: var(--border-radius-md);
  counter-increment: list;
  padding: 1rem;
  display: grid;
  grid-gap: 0.75rem;

  &::before {
    content: '0' counter(list);
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: var(--color-primary);
    font-weight: 700;
    font-size: 1.75rem;
  }
}

.main-steps__content {
  display: grid;
  grid-gap: inherit;
  justify-items: start;
  align-content: start;
}

.main-steps__icon {
  font-size: 0.625rem;
  width: 6em;
  height: 6em;
  fill: var(--color-primary);
  display: block;
  margin-left: auto;
}

.main-steps__heading {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
}

.main-steps__text {
  font-size: 0.875rem;
}

.main-steps__time {
  display: inline-block;
  position: relative;
  left: 50%;
  padding: 0.75rem 0.875rem;
  font-size: 0.875rem;
  line-height: 1.4;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0.125rem;
    background-color: var(--color-primary);
    display: block;
    border-radius: var(--border-radius-md);
  }
}

@media only screen and (min-width: 640px) {
  .main-steps {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .main-steps__list {
    padding-left: 7rem;
    grid-gap: 1.25rem;
    max-width: 46rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2.5rem;
  }

  .main-steps__item {
    padding-left: 3rem;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 0.125rem;
      background-color: var(--color-primary);
      display: block;
      transform: translateX(-50%);
    }

    &:first-child {
      &::before {
        border-top-left-radius: var(--border-radius-md);
        border-top-right-radius: var(--border-radius-md);
      }
    }

    &:last-child {
      &::before {
        border-bottom-left-radius: var(--border-radius-md);
        border-bottom-right-radius: var(--border-radius-md);
      }
    }
  }

  .main-steps__wrapper {
    grid-template-columns: 1fr max-content;
    padding-right: 2.5rem;
    padding-bottom: 2.5rem;
    min-height: 14.625rem;

    &::before {
      left: auto;
      right: calc(100% + 4rem);
      bottom: 50%;
      transform: translateY(50%);
    }

    &::after {
      content: '';
      border-radius: 100%;
      background-color: var(--color-primary);
      width: 1.25rem;
      height: 1.25rem;
      display: block;
      position: absolute;
      bottom: 50%;
      right: calc(100% + 3rem);
      transform: translate(50%, 50%);
    }
  }

  .main-steps__heading {
    font-size: 1.75rem;
  }

  .main-steps__text {
    font-size: 1.125rem;
    max-width: 18em;
  }

  .main-steps__time {
    position: absolute;
    right: 100%;
    left: auto;
    padding: 0 1.75rem 0 0;
    white-space: nowrap;
    line-height: 1.25rem;

    &::before {
      left: auto;
      right: 0;
      transform: translateX(50%);
      border-radius: 0;
    }
  }

  .main-steps__icon {
    align-self: end;
  }
}

@media only screen and (min-width: 768px) {
  .main-steps__heading {
    font-size: 2rem;
  }

  .main-steps__icon {
    font-size: 0.9167rem;
  }
}

@media only screen and (min-width: 960px) {
  .main-steps {
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }

  .main-steps__title {
    max-width: 100%;
    margin-bottom: 1.25rem;
  }
}

@media only screen and (min-width: 1280px) {
}
</style>
