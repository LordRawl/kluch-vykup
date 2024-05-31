<script setup>
import { useAppStore } from '~/stores/appStore.js'

const shouldShowMenu = ref(false)
const shouldModalOpen = ref(false)
const { menuList } = useAppStore()

watch(shouldShowMenu, newValue => {
  document.body.style.overflow = newValue ? 'hidden' : null
})

const hideMenu = () => {
  if (window.matchMedia('(min-width: 1280px)').matches && shouldShowMenu.value) {
    shouldShowMenu.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', hideMenu)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', hideMenu)
})
</script>

<template>
  <header class="container app-header" :class="shouldShowMenu && 'app-header--open'">
    <div class="app-header__wrapper">
      <div class="app-header__logo">
        <img
          src="/img/logo.svg"
          alt="Выкуп недвижимости"
          width="75"
          height="24"
          class="app-header__logo-img"
        />
      </div>

      <nav class="app-header__navbar">
        <ul class="app-header__navbar-list">
          <li v-for="item in menuList" :key="item.title" class="app-header__navbar-item">
            <NuxtLink :to="item.link" class="app-header__navbar-link">{{ item.title }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="app-header__button-wrapper">
        <UIButton size="small" class="app-header__button" @click="shouldModalOpen = true"
          >Заказать оценку</UIButton
        >
      </div>

      <div class="app-header__phones">
        <a href="tel:+79210665015" class="app-header__contact">+7 (921) 066-50-15</a>

        <span class="app-header__contact-description">Заказать звонок</span>
      </div>

      <div class="app-header__socials-wrapper">
        <SocialList size="small" class="app-header__socials" />
      </div>

      <div class="app-header__toggler" @click="shouldShowMenu = !shouldShowMenu">
        <div class="app-header__toggler-inner" />
      </div>

      <Transition name="slide-down">
        <div class="app-header__menu" v-show="shouldShowMenu">
          <div class="app-header__menu-inner">
            <ul class="app-header__menu-list">
              <li v-for="item in menuList" :key="item.title" class="app-header__menu-item">
                <NuxtLink :to="item.link" class="app-header__menu-link">{{ item.title }}</NuxtLink>
              </li>
            </ul>

            <UIButton class="app-header__menu-button" @click="shouldModalOpen = true">
              Заказать оценку
            </UIButton>

            <SocialList class="app-header__menu-socials" />
          </div>
        </div>
      </Transition>
    </div>
  </header>

  <ModalEstimationForm v-model:should-show-modal="shouldModalOpen" />
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: var(--transition-opacity), var(--transition-transform);
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-2rem);
  opacity: 0;
}
</style>

<style lang="scss" scoped>
.app-header {
  position: relative;
  z-index: 99;
  margin-top: 1.25rem;

  & ~ * {
    transition: var(--transition-opacity);
  }

  &--open {
    & ~ * {
      opacity: 0;
    }

    .app-header__toggler-inner {
      background-color: transparent;

      &::before,
      &::after {
        top: 0;
        transition: top 0.15s ease-in-out, transform 0.15s 0.15s ease-in-out;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }
  }
}

.app-header__wrapper {
  --header-height: 3.75rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 1rem;
  line-height: 1.3;
  padding: 0.5rem 0.5rem 0.5rem 0.75rem;
  background-color: var(--color-gray-200);
  border-radius: var(--border-radius-md);
  height: var(--header-height);
}

.app-header__navbar {
  display: none;
}

.app-header__navbar-list {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.app-header__navbar-link {
  font-size: 0.875rem;
  color: var(--color-black);
  text-decoration: none;
  transition: var(--transition-color);

  &:hover {
    color: var(--color-primary);
  }
}

.app-header__button-wrapper {
  display: none;
}

.app-header__logo {
  font-size: 0.625rem;
  width: 7.5em;
  height: 2.5em;
}

.app-header__logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.app-header__phones {
  display: grid;
  grid-gap: 0.25rem;
}

.app-header__contact {
  font-size: 1rem;
  color: var(--color-black);
  text-decoration: none;
  transition: var(--transition-color);
  line-height: 1.4;

  &:hover {
    color: var(--color-primary);
  }
}

.app-header__contact-description {
  display: none;
}

.app-header__socials-wrapper {
  display: none;
}

.app-header__toggler {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.625rem;
  width: 4.4em;
  height: 4.4em;
  padding: 0.375rem;
}

.app-header__toggler-inner {
  position: relative;
  height: 0.125rem;
  transition: var(--transition-bgcolor);

  &,
  &::before,
  &::after {
    width: 100%;
    border-radius: 0.25rem;
    background-color: var(--color-black);
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    left: 0;
    transition: transform 0.15s ease-in-out, top 0.15s 0.15s ease-in-out;
  }

  &::before {
    top: -0.5rem;
  }

  &::after {
    top: 0.5rem;
  }
}

.app-header__menu {
  padding: 2.25rem 1.25rem 1.25rem;
  margin-top: -1rem;
  text-align: center;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: inherit;
  border-bottom-left-radius: var(--border-radius-md);
  border-bottom-right-radius: var(--border-radius-md);
  height: calc(100vh - var(--header-height) - 1.5rem);
  overflow-y: auto;
  z-index: -1;
}

.app-header__menu-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  min-height: 100%;
}

.app-header__menu-list {
  display: grid;
  grid-gap: 1.75rem;
}

.app-header__menu-item {
}

.app-header__menu-link {
  font-size: 1.125rem;
  color: var(--color-black);
  text-decoration: none;
  transition: var(--transition-color);

  &:hover {
    color: var(--color-primary);
  }
}

.app-header__menu-button {
  width: 100%;
}

@media only screen and (min-width: 480px) {
}

@media only screen and (min-width: 768px) {
  .app-header__wrapper {
    --header-height: 4.5rem;
    padding: 0.875rem 1.5rem 0.875rem 1.25rem;
    gap: 2.5rem;
  }

  .app-header__button-wrapper {
    display: block;
    margin-left: auto;
  }

  .app-header__menu-button {
    display: none;
  }

  .app-header__phones {
    padding-left: 2.5rem;
    position: relative;
    align-content: center;
    height: 100%;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 0.125rem;
      background-color: var(--color-gray-300);
      display: block;
    }
  }

  .app-header__contact {
    font-size: 1.25rem;
    line-height: 1.1;
    font-weight: 500;
    letter-spacing: 0.01em;
  }

  .app-header__contact-description {
    display: inline-block;
    font-size: 0.75rem;
    line-height: 1.3;
  }

  .app-header__logo {
    font-size: 1rem;
  }
}

@media only screen and (min-width: 1280px) {
  .app-header {
    margin-top: 2.5rem;
  }

  .app-header__wrapper {
    justify-content: space-between;
  }

  .app-header__navbar {
    display: block;
  }

  .app-header__navbar-list {
    gap: 2.5rem;
  }

  .app-header__toggler {
    display: none;
  }

  .app-header__socials-wrapper {
    display: block;
  }
}
</style>
