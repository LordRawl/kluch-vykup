<script setup>
import { useAppStore } from '~/stores/appStore.js'

const props = defineProps({
  shouldShowModal: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:should-show-modal'])

const { sendMessage } = useAppStore()

const onSubmit = data => {
  sendMessage(data)

  emit('update:should-show-modal', false)
}
</script>

<template>
  <BaseModal :should-show-modal @modal-close="emit('update:should-show-modal', false)">
    <BaseForm
      should-show-label
      @submit="onSubmit"
      class="modal-consultation-form"
      button-title="Получить консультацию"
    >
      <template #title>
        Бесплатная консультация
      </template>

      <template #subtitle>
        Заполните форму и&nbsp;мы&nbsp;перезвоним вам в&nbsp;течении 2-х минут
        и&nbsp;проконсультируем по&nbsp;всем вопросам
      </template>
    </BaseForm>
  </BaseModal>
</template>

<style scoped lang="scss">
.modal-consultation-form {
  max-width: 39rem;
}

@media only screen and (max-width: 480px) {
  :deep(.base-form__title) {
    max-width: 10em;
  }
}
</style>
