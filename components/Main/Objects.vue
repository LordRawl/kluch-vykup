<script setup>
const sliderOptions = {
  perPage: 1,
  perMove: 1,
  autoHeight: true,
  arrows: true,
  pagination: true,
  gap: '1.25rem',
  arrowPath:
    'M25.4118 12.9145C25.6071 12.7192 25.9236 12.7192 26.1188 12.9145L32.8484 19.6464C33.0436 19.8417 33.0436 20.1583 32.8484 20.3536L26.1188 27.0856C25.9236 27.2809 25.6071 27.2809 25.4118 27.0856C25.2166 26.8903 25.2166 26.5737 25.4118 26.3784L31.2878 20.5003L7.49945 20.5049C7.22336 20.505 6.9995 20.2811 6.99945 20.0049C6.9994 19.7287 7.22317 19.5048 7.49926 19.5047L31.2882 19.5002L25.4118 13.6217C25.2166 13.4264 25.2166 13.1098 25.4118 12.9145Z',
  breakpoints: {},
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
    title: 'Однокомнатная квартира',
    params: {
      Адрес: 'г. Вологда, ул. Козленская',
      'Общая площадь': '31,9 кв.м',
      'Оценочная стоимость': '3 750 000 ₽',
      'Погашено долгов': '350 000 ₽'
    },
    buyout: '3 060 000 ₽',
    review: {
      text:
        'Огромное спасибо Илье за быструю покупку квартиры. Семье были срочно нужны деньги, а квартира — в залоге. Илья приехал в тот же день, оценил квартиру и подробно объяснил дальнейшие действия! Я доволен полученной суммой.',
      name: 'Константин Елисеев'
    }
  },
  {
    title: 'Участок с щитовым домом',
    params: {
      Адрес: 'г. Вологодский р-н, ст. Дикая',
      'Общая площадь участка': '6,5 соток',
      'Общая площадь дома': '42 кв.м',
      'Оценочная стоимость': '2 900 000 ₽'
    },
    buyout: '2 610 000 ₽',
    review: {
      text:
        'Спасибо за быструю работу! Мне достался от родителей дом в деревне, думал, долго буду искать покупателя. Илья предложил неплохую цену, в тот же день подписали договор. И вот, я уже катаюсь на машине, которую так хотел купить.',
      name: 'Денис Кузнецов'
    }
  },
  {
    title: 'Участок с баней',
    params: {
      Адрес: 'с. Кубенское',
      'Общая площадь участка': '5 соток',
      'Оценочная стоимость': '2 500 000 ₽'
    },
    buyout: '2 250 000 ₽',
    review: {
      text:
        'Хочу поблагодарить компанию «Выкуп недвижимости» за помощь с выкупом участка. Илья не только купил участок, но и помог подобрать мне квартиру в Вологде.',
      name: 'Елена Серова'
    }
  },
  {
    title: 'Гараж',
    params: {
      Адрес: 'г. Вологда, ул. Старое шоссе',
      'Общая площадь': '31,9 кв.м',
      'Оценочная стоимость': '800 000 ₽'
    },
    buyout: '720 000 ₽',
    review: {
      text:
        'Спасибо Илье за помощь, деньги за гараж получил на второй день. Сумма устроила и главное, никаких комиссий.',
      name: 'Иван Рогозин'
    }
  },
  {
    title: 'Комната в трехкомнатной квартире',
    params: {
      Адрес: 'г. Вологда, ул. Герцена',
      'Общая площадь': '17 кв.м',
      'Оценочная стоимость': '1 200 000 ₽',
      'Погашено долгов': '200 000 ₽'
    },
    buyout: '900 000 ₽',
    review: {
      text:
        'Спасибо Илье за помощь в продаже комнаты. Соседи неадекватные — жить там было невозможно. Долги погашены, могу взять ипотеку и купить полноценную квартиру, полученной суммы хватает на первоначальный взнос.',
      name: 'Юлия Куликова'
    }
  },
  {
    title: 'Комната в общежитии',
    params: {
      Адрес: 'г. Вологда, ул. Горького',
      'Общая площадь': '12 кв.м',
      'Оценочная стоимость': '980 000 ₽',
      'Погашено долгов': '130 000 ₽'
    },
    buyout: '750 000 ₽',
    review: {
      text: 'Спасибо. Деньги получил быстро, долги погашены.',
      name: 'Дмитрий Холмиков'
    }
  },
  {
    title: 'Двухкомнатная квартира',
    params: {
      Адрес: 'г. Вологда, ул. Ленинградская',
      'Общая площадь': '52,6 кв.м',
      'Оценочная стоимость': '3 200 000 ₽',
      'Погашена ипотека': '2 000 000 ₽'
    },
    buyout: '1 050 000 ₽',
    review: {
      text:
        'Илья, спасибо за решение проблемы. Муж остался без работы и ипотеку было платить нереально. Освободились от рабского гнёта, получили остаток суммы на руки. Довольны.',
      name: 'Татьяна и Иван Смирновы'
    }
  },
  {
    title: 'Две комнаты в секции',
    params: {
      Адрес: 'г. Вологда, ул. Конева',
      'Общая площадь': '24,4 кв.м',
      'Оценочная стоимость': '1 500 000 ₽',
      'Погашено долгов': '350 000 ₽'
    },
    buyout: '950 000 ₽',
    review: {
      text:
        'Все хорошо, Илья помог решить проблему с документами, погасил долги. Деньги получила в оговорённые сроки.',
      name: 'Ольга Крутикова'
    }
  }
]
</script>

<template>
  <section class="main-objects">
    <div class="container main-objects__container">
      <h2 class="k-title main-objects__title">Выкупленные объекты</h2>

      <Carousel :options="sliderOptions" class="main-objects-slider">
        <CarouselSlide
          v-for="({ title, params, buyout, review }, index) in list"
          :key="`slide-${index + 1}`"
          :index="index"
          class="main-objects-slider__slide"
        >
          <picture class="main-objects-slider__photo-wrapper">
            <source :srcset="`/img/objects/${index + 1}.webp`" type="image/webp" />

            <img
              :src="`/img/objects/${index + 1}.jpg`"
              alt=""
              width="320"
              height="214"
              class="main-objects-slider__photo"
            />
          </picture>

          <div class="main-objects-slider__content">
            <p class="main-objects-slider__title" v-html="title" />

            <ul class="main-objects-slider__params">
              <li
                v-for="(value, key) in params"
                :key="`bullet-${index}-${key}`"
                class="main-objects-slider__bullet"
              >
                {{ key }}: {{ value }}
              </li>
            </ul>

            <p class="main-objects-slider__buyout main-objects-slider__text--medium">
              Срочный выкуп: <span>{{ buyout }}</span>
            </p>
          </div>

          <div class="main-objects-slider__review-wrapper">
            <p class="main-objects-slider__text--medium">Отзыв клиента</p>

            <div class="main-objects-slider__review">
              <p class="main-objects-slider__review-text">{{ review.text }}</p>

              <p class="main-objects-slider__review-name main-objects-slider__text--medium">
                {{ review.name }}
              </p>

              <div class="main-objects-slider__review-stars" />
            </div>
          </div>
        </CarouselSlide>
      </Carousel>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-objects {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.main-objects__container {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 1rem;
}

.main-objects__title {
  max-width: 10em;
}

.main-objects-slider {
}

.main-objects-slider__slide {
  font-size: 0.875rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: minmax(0, 1fr);
  align-content: start;
}

.main-objects-slider__photo-wrapper {
  width: 100%;
  height: 13.5rem;
  display: block;
}

.main-objects-slider__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius-md);
}

.main-objects-slider__content {
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: minmax(0, 1fr);
}

.main-objects-slider__title {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
}

.main-objects-slider__params {
}

.main-objects-slider__bullet {
}

.main-objects-slider__buyout {
  span {
    color: var(--color-primary);
  }
}

.main-objects-slider__text--medium {
  font-weight: 500;
}

.main-objects-slider__review-wrapper {
}

.main-objects-slider__review {
  background-color: var(--color-gray-200);
  border-radius: var(--border-radius-md);
  padding: 1rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) max-content;
  align-items: center;
  grid-gap: 1.25rem 1rem;
  margin-top: 0.5rem;
}

.main-objects-slider__review-text {
  grid-column: 1 / -1;
}

.main-objects-slider__review-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.main-objects-slider__review-stars {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxOCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjIxNjMgMS4wMTE5N0wxMS40NTAyIDMuNDk2MThDMTEuNjE2NCAzLjgzOTc0IDEyLjA2MjcgNC4xNjU2OCAxMi40MzkgNC4yMzYxNkwxNC42NzA0IDQuNjA2MTRDMTYuMDk2NyA0Ljg0Mzk5IDE2LjQyOTMgNS44ODM0OSAxNS40MDU0IDYuOTIyOThMMTMuNjY0MSA4LjY3NjAyQzEzLjM3NTMgOC45NjY3MyAxMy4yMDkgOS41MzkzMyAxMy4zMDUzIDkuOTUzMzZMMTMuODA0MSAxMi4xMjA0QzE0LjE5NzkgMTMuODI5NCAxMy4yODc4IDE0LjQ5ODkgMTEuNzkxNCAxMy42MDA0TDkuNzAwMDUgMTIuMzQ5NUM5LjMyMzc3IDEyLjEyMDQgOC42OTM3MyAxMi4xMjA0IDguMzE3NDUgMTIuMzQ5NUw2LjIyNjA2IDEzLjYwMDRDNC43Mjk3MSAxNC40OTAxIDMuODE5NjUgMTMuODI5NCA0LjIxMzQyIDEyLjEyMDRMNC43MTIyMSA5Ljk1MzM2QzQuNzkwOTYgOS41MzA1MiA0LjYyNDcgOC45NTc5MiA0LjMzNTkzIDguNjY3MjFMMi41OTQ1NiA2LjkxNDE3QzEuNTcwNzQgNS44ODM0OSAxLjkwMzI3IDQuODQzOTkgMy4zMjk2MSA0LjU5NzMzTDUuNTYxMDIgNC4yMjczNUM1LjkzNzI5IDQuMTY1NjggNi4zODM1NyAzLjgzMDkzIDYuNTQ5ODMgMy40ODczN0w3Ljc4MzY3IDEuMDAzMTZDOC40NTc0NiAtMC4zMzU4NSA5LjU0MjU0IC0wLjMzNTg1IDEwLjIxNjMgMS4wMTE5N1oiIGZpbGw9IiNGRkQ5NTIiLz4KPC9zdmc+Cg==);
  background-size: contain;
  font-size: 0.625rem;
  height: 1.4em;
  width: 9em;
}

:deep(.carousel__arrows) {
  --spacing: 1.5rem;
  position: absolute;
  right: 0;
  bottom: calc(100% + var(--spacing));
}

@media only screen and (min-width: 640px) {
  .main-objects {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .main-objects__container {
    grid-gap: 2.5rem;
  }

  .main-objects__title {
    max-width: 20em;
  }

  .main-objects-slider__slide {
    grid-gap: 1.25rem;
    font-size: 1.125rem;
  }

  .main-objects-slider__photo-wrapper {
    height: 25rem;
  }

  .main-objects-slider__content {
    grid-gap: 1rem;
  }

  .main-objects-slider__title {
    font-size: 2rem;
  }

  .main-objects-slider__review-text {
    font-size: 1rem;
  }

  :deep(.carousel__arrows) {
    --spacing: 2.5rem;
  }
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 1280px) {
  .main-objects {
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }

  .main-objects-slider__slide {
    grid-template-columns: 1.2fr minmax(18rem, 0.8fr) 1fr;
    align-items: start;
  }

  .main-objects-slider__photo-wrapper {
    height: 22.5rem;
  }

  .main-objects-slider__review-wrapper {
    align-self: end;
  }
}
</style>
