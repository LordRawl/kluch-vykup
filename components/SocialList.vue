<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: 'default',
    validator: (value: string) => ['small', 'default'].includes(value)
  }
})

const socialList = [
  {
    icon: 'socials/telegram',
    link: '',
    name: 'telegram'
  },
  {
    icon: 'socials/whatsapp',
    link: '',
    name: 'whatsapp'
  },
  {
    icon: 'socials/vk',
    link: '',
    name: 'vk'
  },
]
</script>

<template>
  <ul class="social__list" :class="[`social__list--${size}`]">
    <li v-for="{icon, link, name} in socialList" :key="name" class="social__item">
      <NuxtLink :to="link" target="_blank" rel="noopener noreferrer" class="social__link" :class="[`social__link--${name}`]">
        <UIIcon :name="icon" class="social__icon" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.social__list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-item);

  &--small {
    --spacing-item: 0.5rem;
    --size-item: 1.5rem;
    --border-radius-item: var(--border-radius-xs);
    --size-icon: 1rem;
  }

  &--default {
    --spacing-item: 2.5rem;
    --size-item: 2.75rem;
    --border-radius-item: var(--border-radius-md);
    --size-icon: 1.75rem;
  }
}

.social__item {}

.social__link {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-item);
  width: var(--size-item);
  height: var(--size-item);
  cursor: pointer;
  transition: var(--transition-bgcolor);
  color: var(--color-white);

  &--telegram {
    background-color: #0088CC;

    &:hover {
      background-color: darken(#0088CC, 10%);
    }
  }

  &--whatsapp {
    background-color: #49AD33;

    &:hover {
      background-color: darken(#49AD33, 10%);
    }
  }

  &--vk {
    background-color: #0077FF;

    &:hover {
      background-color: darken(#0077FF, 10%);
    }
  }
}

.social__icon {
  width: var(--size-icon);
  height: var(--size-icon);
  fill: currentColor;
}
</style>
