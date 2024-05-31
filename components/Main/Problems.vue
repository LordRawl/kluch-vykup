<script setup>
import { Grid } from '@splidejs/splide-extension-grid'

const sliderOptions = {
  perPage: 1,
  perMove: 1,
  autoHeight: true,
  arrows: true,
  pagination: false,
  gap: '1.25rem',
  grid: {
    rows: 2,
    cols: 2,
    gap: {
      row: '1.25rem',
      col: '1.25rem'
    }
  },
  arrowPath:
    'M25.4118 12.9145C25.6071 12.7192 25.9236 12.7192 26.1188 12.9145L32.8484 19.6464C33.0436 19.8417 33.0436 20.1583 32.8484 20.3536L26.1188 27.0856C25.9236 27.2809 25.6071 27.2809 25.4118 27.0856C25.2166 26.8903 25.2166 26.5737 25.4118 26.3784L31.2878 20.5003L7.49945 20.5049C7.22336 20.505 6.9995 20.2811 6.99945 20.0049C6.9994 19.7287 7.22317 19.5048 7.49926 19.5047L31.2882 19.5002L25.4118 13.6217C25.2166 13.4264 25.2166 13.1098 25.4118 12.9145Z',
  breakpoints: {
    1279: {
      pagination: true,
      grid: {
        rows: 2,
        cols: 1
      }
    },
    767: {
      arrows: false
    },
    639: {
      grid: {
        rows: 1,
        cols: 1
      }
    }
  },
  classes: {
    pagination: 'carousel__pagination',
    page: 'carousel__bullet',
    arrows: 'carousel__arrows',
    arrow: 'carousel__arrow',
    prev: 'carousel__arrow--prev',
    next: 'carousel__arrow--next'
  }
}

const list = [
  {
    title: 'Быстрый выкуп <br>в течении 24 часов',
    description:
      'Мы&nbsp;можем выкупить вашу квартиру в&nbsp;течение 24&nbsp;часов после обращения. Вам не&nbsp;нужно тратить время на&nbsp;поиски покупателя, оформление документов и&nbsp;торги.'
  },
  {
    title: 'Выплата долгов <br>и закрытие ипотеки',
    description:
      'Мы&nbsp;выкупаем квартиры в&nbsp;ипотеке, в&nbsp;залоге, под арестом, с&nbsp;долгами ЖКХ и&nbsp;иным финансовым организациям. <br>Без комиссий и&nbsp;дополнительных расходов.'
  },
  {
    title: 'Конфликтные <br>ситуации',
    description:
      'Мы&nbsp;можем помочь вам решить сложные ситуации, связанные с&nbsp;разделом имущества, наследством или спорами с&nbsp;застройщиком.'
  },
  {
    title: 'Выкуп квартир <br>в любом состоянии',
    description:
      'Мы&nbsp;предлагаем реальную помощь <br>и&nbsp;максимально высокую цену за&nbsp;поврежденную недвижимость: после потопа, пожара, без ремонта и&nbsp;др.'
  },
  {
    title: 'Выкуп с проблемными документами',
    description:
      'В&nbsp;нашей команде опытные юристы по&nbsp;недвижимости , которые помогут: восстановить недостающие документы на&nbsp;недвижимость, провести приватизацию, восстановить сроки наследства и&nbsp;др.'
  },
  {
    title: 'Финансовое обеспечение лечения или образования',
    description:
      'Гарантируем быстрое предоставление средств, выдадим аванс до&nbsp;продажи вашей недвижимости.'
  },
  {
    title: 'Переезд в другой город',
    description:
      'Быстро выдадим деньги за&nbsp;вашу недвижимость и&nbsp;поможем подобрать квартиру в&nbsp;желаемом городе, наша компания сотрудничает с&nbsp;надежными партнерами в&nbsp;19&nbsp;городах России.'
  },
  {
    title: 'Не нашли вашу ситуацию?',
    description: 'Рассмотрим в&nbsp;индивидуальном порядке и&nbsp;предложим решения.'
  }
]

const shouldModalOpen = ref(false)
</script>

<template>
  <section class="main-problems">
    <div class="container main-problems__container">
      <h2 class="k-title main-problems__title">Какие проблемы мы решаем</h2>

      <Carousel :options="sliderOptions" :extensions="{ Grid }" class="main-problems-slider">
        <CarouselSlide
          v-for="({ description, title }, index) in list"
          :key="title"
          :index="index"
          class="main-problems-slider__slide"
        >
          <div class="main-problems-slider__content">
            <p class="main-problems-slider__title" v-html="title" />

            <p class="main-problems-slider__description" v-html="description" />
          </div>

          <picture class="main-problems-slider__photo-wrapper">
            <source :srcset="`/img/problems/${index + 1}.webp`" type="image/webp" />

            <img
              :src="`/img/problems/${index + 1}.png`"
              alt=""
              width="180"
              height="180"
              class="main-problems-slider__photo"
            />
          </picture>
        </CarouselSlide>
      </Carousel>

      <UIButton class="main-problems__button" @click="shouldModalOpen = true"
        >Получить консультацию</UIButton
      >
    </div>
  </section>

  <ModalConsultationForm v-model:should-show-modal="shouldModalOpen" />
</template>

<style scoped lang="scss">
.main-problems {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.main-problems__container {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 1.25rem;
}

.main-problems__title {
  max-width: 9em;
}

.main-problems-slider {
}

.main-problems-slider__slide {
  background-color: var(--color-gray-200);
  padding: 1.25rem;
  border-radius: var(--border-radius-md);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.main-problems-slider__content {
}

.main-problems-slider__title {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
  max-width: 15em;
}

.main-problems-slider__description {
  font-size: 0.875rem;
  line-height: 1.4;
  margin-top: 0.75rem;
  max-width: 30em;
}

.main-problems-slider__photo-wrapper {
  line-height: 0;
  display: block;
  font-size: 0.625rem;
  width: 18em;
  height: 18em;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  flex-shrink: 0;
}

.main-problems-slider__photo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

:deep(.carousel__arrows) {
  position: absolute;
  right: 0;
  bottom: calc(100% + 2.5rem);
}

.main-problems__button {
  width: 100%;
}

@media only screen and (min-width: 640px) {
  .main-problems {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .main-problems-slider__slide {
    flex-direction: row;
  }

  .main-problems-slider__photo-wrapper {
    font-size: 0.75rem;
    margin-right: initial;
  }

  .main-problems__button {
    max-width: 20rem;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (min-width: 768px) {
  .main-problems__container {
    grid-gap: 2.5rem;
  }
}

@media only screen and (min-width: 1280px) {
  .main-problems {
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }
}
</style>
