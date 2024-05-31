<template>
  <NuxtLayout>
    <div class="">
      <div class="">
        <p class="">{{ error.statusCode }}</p>

        <h1 class="">Страница не найдена</h1>

        <button class="" @click="handleClearError">
          Вернуться на главную
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => clearError({ redirect: '/' })
</script>
