<script setup>
import {
  YandexMap,
  YandexMapControls,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapMarker,
  YandexMapZoomControl
} from 'vue-yandex-maps'
</script>

<template>
  <section class="main-contacts">
    <div class="container">
      <h2 class="k-title main-contacts__title">Контакты</h2>

      <div class="main-contacts__wrapper">
        <div class="main-contacts__content">
          <h3 class="main-contacts__heading">
            г.&nbsp;Вологда, ул.&nbsp;Сергея&nbsp;Орлова, БЦ&nbsp;«Белладжио»
          </h3>

          <p class="main-contacts__text main-contacts__text--max">
            Будем рады видеть вас в нашем офисе! Готовы решить любую вашу проблему.
          </p>

          <div class="main-contacts__work">
            <div class="main-contacts__time">
              <UIIcon name="clock" class="main-contacts__icon" />

              <p class="main-contacts__text">Часы работы:</p>
            </div>

            <p class="main-contacts__text">Пн-Пт: с 9:00 до 18:00</p>

            <p class="main-contacts__text">Сб-Вс: Принимаем звонки с 9:00 до 20:00</p>
          </div>

          <a href="tel:+79210665015" class="main-contacts__phone">+7 (921) 066-50-15</a>

          <div class="main-contacts__socials-wrapper">
            <SocialList class="main-contacts__socials" />
          </div>
        </div>

        <div class="main-contacts__map-wrapper">
          <YandexMap
            class="main-contacts__map"
            :settings="{
              location: {
                center: [39.888586, 59.223628],
                zoom: 15
              }
            }"
          >
            <YandexMapDefaultSchemeLayer />

            <YandexMapDefaultFeaturesLayer />

            <YandexMapControls :settings="{ position: 'right' }">
              <YandexMapZoomControl />
            </YandexMapControls>

            <YandexMapMarker
              position="left-center top"
              :settings="{
                coordinates: [39.888586, 59.223628]
              }"
            >
              <UIIcon name="pin" class="main-contacts__map-icon" />
            </YandexMapMarker>
          </YandexMap>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-contacts {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.main-contacts__title {
  max-width: 11em;
  margin-bottom: 1rem;
}

.main-contacts__wrapper {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 1rem;
}

.main-contacts__map-wrapper {
  height: 14rem;
}

.main-contacts__map {
  border-radius: var(--border-radius-md);
  overflow: hidden;
}

.main-contacts__map-icon {
  width: 2.5rem;
  height: 2.5rem;
  display: block;
  fill: var(--color-primary);
  position: relative;
}

.main-contacts__content {
  display: grid;
  justify-items: start;
  grid-gap: 1rem;
}

.main-contacts__heading {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
}

.main-contacts__text {
  font-size: 0.875rem;
}

.main-contacts__text--max {
  max-width: 18em;
}

.main-contacts__work {
}

.main-contacts__time {
  margin-bottom: 0.5rem;
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  grid-gap: 0.75rem;
}

.main-contacts__icon {
  width: 1rem;
  height: 1rem;
  fill: var(--color-primary);
  display: block;
}

.main-contacts__phone {
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.2;
  color: var(--color-primary);
  text-decoration: none;
}

.main-contacts__socials-wrapper {
}

.main-contacts__socials {
  --spacing-item: 1.25rem;
}

@media only screen and (min-width: 640px) {
  .main-contacts {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .main-contacts__wrapper {
    gap: 2rem;
  }

  .main-contacts__map-wrapper {
    height: 19rem;
  }

  .main-contacts__content {
    grid-gap: 1.25rem;
  }

  .main-contacts__heading {
    font-size: 2rem;
  }

  .main-contacts__text {
    font-size: 1.125rem;
  }

  .main-contacts__phone {
    margin-top: 1.25rem;
  }
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 960px) {
  .main-contacts {
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }

  .main-contacts__wrapper {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .main-contacts__map-wrapper {
    height: 100%;
    width: 100%;
    order: -1;
  }
}

@media only screen and (min-width: 1280px) {
}
</style>
