<script setup lang="ts">
const list = [
  {
    title: 'Полное юридическое <br>сопровождение',
    description: 'Мы&nbsp;предоставляем вам своего опытного и&nbsp;грамотного юриста на&nbsp;всех этапах сделки.'
  },
  {
    title: 'Аванс <br>в день обращения',
    description: 'Мы&nbsp;гарантируем выкуп вашей недвижимости, поэтому предоставляем аванс наличными или на&nbsp;карту <nobr>до 1 млн. руб.</nobr>'
  },
  {
    title: 'Выкуп недвижимости',
    description: 'Выкупаем недвижимость лично, <br>без комиссии и&nbsp;посредников.'
  },
  {
    title: 'Гарантия выкупа',
    description: 'Выкупаем даже если наложены ограничения или имеются долговые обязательства.'
  },
]
</script>

<template>
  <section class="container main-benefits">
    <h2 class="visually-hidden">Преимущества для вас</h2>

    <ul class="main-benefits__list">
      <li v-for="{title, description} in list" :key="title" class="main-benefits__item">
        <h3 class="main-benefits__heading" v-html="title"/>

        <p class="main-benefits__description" v-html="description"/>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.main-benefits {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.main-benefits__list {
  display: grid;
  grid-gap: 1rem;
}

.main-benefits__item {
  padding: 1.25rem;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-primary);
  position: relative;
  display: grid;
  grid-gap: 0.75rem;
  align-content: start;

  &::after {
    content: '';
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    width: 1.875rem;
    height: 1.875rem;
    background-color: var(--color-primary);
    border-radius: 100%;
  }
}

.main-benefits__heading {
  font-weight: 500;
  font-size: 1.5rem;
  padding-right: 2rem;
}

.main-benefits__description {
  font-size: 0.875rem;
  max-width: 28em;
}

@media only screen and (min-width: 640px) {
  .main-benefits {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .main-benefits__item {
    min-height: 12.5rem;
  }

  .main-benefits__heading {
    font-size: 2rem;
  }

  .main-benefits__description {
    font-size: 1.125rem;
  }
}

@media only screen and (min-width: 960px) {
  .main-benefits {
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }

  .main-benefits__list {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.25rem;
  }
}
</style>
