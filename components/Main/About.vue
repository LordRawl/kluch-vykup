<script setup>
const teamSliderOptions = {
  perPage: 5,
  perMove: 1,
  autoHeight: true,
  drag: false,
  arrows: false,
  pagination: false,
  gap: '1.25rem',
  arrowPath:
    'M25.4118 12.9145C25.6071 12.7192 25.9236 12.7192 26.1188 12.9145L32.8484 19.6464C33.0436 19.8417 33.0436 20.1583 32.8484 20.3536L26.1188 27.0856C25.9236 27.2809 25.6071 27.2809 25.4118 27.0856C25.2166 26.8903 25.2166 26.5737 25.4118 26.3784L31.2878 20.5003L7.49945 20.5049C7.22336 20.505 6.9995 20.2811 6.99945 20.0049C6.9994 19.7287 7.22317 19.5048 7.49926 19.5047L31.2882 19.5002L25.4118 13.6217C25.2166 13.4264 25.2166 13.1098 25.4118 12.9145Z',
  breakpoints: {
    1279: {
      perPage: 3,
      pagination: true,
      arrows: true,
      drag: true
    },
    767: {
      perPage: 2,
      arrows: false
    },
    460: {
      perPage: 1
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

const team = [
  {
    image: 'ilya-smyshlyaev',
    job: 'специалист по срочному выкупу',
    name: 'Илья Смышляев'
  },
  {
    image: 'lyubov-smyshlyaeva',
    job: 'ипотечный брокер',
    name: 'Любовь Смышляева'
  },
  {
    image: 'evgenia-larionova',
    job: 'эксперт-оценщик',
    name: 'Евгения Ларионова'
  },
  {
    image: 'anastasia-mikhalevskaya',
    job: 'юрист',
    name: 'Анастасия Михалевская'
  },
  {
    image: 'olga-kochneva',
    job: 'юрист',
    name: 'Ольга Кочнева'
  }
]

const shouldModalOpen = ref(false)
</script>

<template>
  <section class="main-about">
    <div class="container main-about__container">
      <h2 class="k-title main-about__title">О компании</h2>

      <p class="main-about__subtitle">
        Наша компания специализируется на выкупе недвижимости в Вологодской области с 2011 года.
        <br /><br />
        Мы проводим сделки по выкупу любой недвижимости за собственные деньги. При необходимости,
        представим интересы клиентов в судах, организуем переговорный процесс с кредиторами и
        сособственниками, выплатим долги, знаем специфику банковского дела, поможем разобраться в
        сложных ситуациях.
      </p>

      <div class="main-about__slider">
        <h3 class="main-about__heading">В команде опытные профессионалы:</h3>

        <Carousel :options="teamSliderOptions" class="main-about-team__slider">
          <CarouselSlide
            v-for="({ image, job, name }, index) in team"
            :key="name"
            :index="index"
            class="main-about-team__slide"
          >
            <picture class="main-about-team__photo-wrapper">
              <source :srcset="`/img/team/${image}.webp`" type="image/webp" />

              <img
                :src="`/img/team/${image}.jpg`"
                :alt="name"
                width="320"
                height="410"
                class="main-about-team__photo"
              />
            </picture>

            <p class="main-about-team__name">{{ name }}</p>

            <p class="main-about-team__job">{{ job }}</p>
          </CarouselSlide>
        </Carousel>
      </div>

      <UIButton class="main-about__button" @click="shouldModalOpen = true">
        Оставить заявку
      </UIButton>
    </div>
  </section>

  <ModalEstimationForm v-model:should-show-modal="shouldModalOpen" />
</template>

<style scoped lang="scss">
.main-about {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.main-about__container {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 1rem;
}

.main-about__title {
}

.main-about__subtitle {
  font-size: 0.875rem;
  line-height: 1.4;
}

.main-about__heading {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
}

.main-about__slider {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: inherit;
}

.main-about-team__slider {
}

.main-about-team__slide {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 0.5rem;
  align-content: start;
}

.main-about-team__photo-wrapper {
  aspect-ratio: 4 / 5;
  line-height: 0;
  display: block;
}

.main-about-team__photo {
  border-radius: var(--border-radius-md);
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-about-team__name {
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
  max-width: 6em;
}

.main-about-team__job {
  font-size: 1.125rem;
}

:deep(.carousel__arrows) {
  position: absolute;
  right: 0;
  bottom: calc(100% + 1rem);
}

.main-about__button {
  width: 100%;
  margin-top: 0.25rem;
}

@media only screen and (min-width: 640px) {
  .main-about {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .main-about__button {
    max-width: 20rem;
    margin-left: auto;
    margin-right: auto;
  }

  .main-about__subtitle {
    font-size: 1.125rem;
  }

  .main-about__heading {
    font-size: 2rem;
  }
}

@media only screen and (min-width: 768px) {
  .main-about__container {
    grid-gap: 1.25rem;
  }

  .main-about__slider {
    grid-gap: 1.5rem;
  }

  .main-about__button {
    margin-top: 1.25rem;
  }

  .main-about__heading {
    padding-right: 8rem;
  }
}

@media only screen and (min-width: 1280px) {
  .main-about {
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }

  .main-about__slider {
    grid-gap: 1.25rem;
    margin-top: 1.25rem;
  }

  .main-about__button {
    margin-top: 0;
    margin-left: 0;
    max-width: calc(20% - 1rem);
  }
}
</style>
