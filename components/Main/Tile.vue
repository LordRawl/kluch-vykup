<script setup>
const components = {
  NuxtLink: resolveComponent('NuxtLink')
}

const list = [
  {
    title: 'Квартира, комната или доля в квартире',
    image: 'apartment'
  },
  {
    title: 'Загородный дом, таунхаус, дача',
    image: 'house'
  },
  {
    title: 'Земельный участок',
    image: 'land'
  },
  {
    title: 'Гараж',
    image: 'garage'
  },
]
</script>

<template>
  <section class="main-tile">
    <div class="container">
      <h2 class="k-title main-tile__title">Недвижимость, которую мы выкупаем</h2>

      <ul class="main-tile__list">
        <li v-for="(tile, index) in list" :key="index" class="main-tile__item">
          <picture class="main-tile__img-wrapper">
            <source :srcset="`/img/tile/${tile.image}.webp`" type="image/webp">

            <img
              :src="`/img/tile/${tile.image}.jpg`"
              width="152"
              height="152"
              class="main-tile__img"
            />
          </picture>

          <h3 class="main-tile__heading" v-html="tile.title" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-tile {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.main-tile__title {
  max-width: 11em;
  margin-bottom: 1.25rem;
}

.main-tile__list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}

.main-tile__item {
  position: relative;
}

.main-tile__img-wrapper {
  aspect-ratio: 1;
  display: block;
  line-height: 0;
}

.main-tile__img {
  border-radius: var(--border-radius-md);
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-tile__heading {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  padding: 0.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  max-width: 11em;
}

@media only screen and (min-width: 640px) {
  .main-tile {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .main-tile__title {
    margin-bottom: 2.5rem;
  }

  .main-tile__heading {
    font-size: 1.125rem;
    padding: 1.25rem;
    max-width: 12em;
  }
}

@media only screen and (min-width: 960px) {
  .main-tile {
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }

  .main-tile__heading {
    font-size: 1.25rem;
  }
}

@media only screen and (min-width: 1280px) {
  .main-tile__list {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
