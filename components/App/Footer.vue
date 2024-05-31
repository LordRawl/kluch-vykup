<script setup>
import { useAppStore } from '~/stores/appStore.js'

const { menuList } = useAppStore()

const shouldModalOpen = ref(false)
</script>

<template>
  <footer class="container app-footer">
    <div class="app-footer__wrapper">
      <div class="app-footer__logo">
        <img
          src="/img/logo.svg"
          alt="Выкуп недвижимости"
          width="75"
          height="24"
          class="app-footer__logo-img"
        />
      </div>

      <nav class="app-footer__navbar">
        <ul class="app-footer__navbar-list">
          <li v-for="item in menuList" :key="item.title" class="app-footer__navbar-item">
            <NuxtLink :to="item.link" class="app-footer__navbar-link">{{ item.title }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="app-footer__block">
        <UIButton size="small" class="app-footer__button" @click="shouldModalOpen = true">
          Бесплатная консультация
        </UIButton>

        <a href="tel:+79210665015" class="app-footer__contact">+7 (921) 066-50-15</a>
      </div>

      <a href="/" class="app-footer__politic">Политика конфиденциальности</a>
    </div>
  </footer>

  <ModalConsultationForm v-model:should-show-modal="shouldModalOpen" />
</template>

<style lang="scss" scoped>
.app-footer {
  margin-bottom: 2rem;
}

.app-footer__wrapper {
  padding: 1.25rem;
  border-radius: var(--border-radius-md);
  background-color: var(--color-gray-200);
  display: grid;
  grid-gap: 1.25rem;
}

.app-footer__logo {
  font-size: 1.5rem;
  width: 7.5em;
  height: 2.5em;
}

.app-footer__logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.app-footer__navbar {
}

.app-footer__navbar-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.app-footer__navbar-item {
}

.app-footer__navbar-link {
  font-size: 0.875rem;
  line-height: 1.1;
  text-decoration: none;
  color: var(--color-black);
  transition: var(--transition-color);

  &:hover {
    color: var(--color-primary);
  }
}

.app-footer__block {
  display: grid;
  grid-gap: 1.25rem;
  justify-content: start;
  text-align: left;
}

.app-footer__button {
}

.app-footer__contact {
  font-size: 1.25rem;
  line-height: 1.1;
  text-decoration: none;
  font-weight: 500;
  color: var(--color-black);
  transition: var(--transition-color);

  &:hover {
    color: var(--color-primary);
  }
}

.app-footer__politic {
  opacity: 0.3;
  font-size: 0.875rem;
  text-decoration: none;
  line-height: 1.1;
  color: var(--color-black);
  transition: var(--transition-color);

  &:hover {
    color: var(--color-primary);
  }
}

@media only screen and (min-width: 640px) {
  .app-footer__wrapper {
    grid-template-columns: max-content 1fr;
  }

  .app-footer__navbar {
    grid-column: 2;
    grid-row: 1 / span 2;
    text-align: right;
  }
}

@media only screen and (min-width: 768px) {
  .app-footer__wrapper {
    grid-template-columns: max-content 1fr max-content;
    grid-column-gap: 2.5rem;
  }

  .app-footer__navbar {
    grid-column: 2;
    grid-row: 1 / span 2;
    text-align: left;
  }

  .app-footer__politic {
    grid-column: 3;
  }
}

@media only screen and (min-width: 960px) {
  .app-footer__wrapper {
    align-items: center;
    grid-row-gap: 1rem;
  }

  .app-footer__navbar {
    grid-row: 1;
    align-self: end;
  }

  .app-footer__navbar-list {
    flex-direction: row;
  }

  .app-footer__politic {
    grid-column: 2;
    align-self: start;
  }

  .app-footer__logo,
  .app-footer__block {
    grid-row: 1 / span 2;
  }
}

@media only screen and (min-width: 1280px) {
  .app-footer__wrapper {
    padding: 2rem 2.5rem;
  }
}
</style>
