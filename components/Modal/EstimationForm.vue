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
      class="modal-estimation-form"
      button-title="Узнать стоимость"
    >
      <template #title>
        Оценка недвижимости
      </template>

      <template #subtitle>
        Оставьте заявку и&nbsp;узнайте какая стоимость вашей недвижимости. <br /><br />
        Всего 5&nbsp;минут разговора с&nbsp;менеджером и&nbsp;вы&nbsp;узнаете точную стоимость
        и&nbsp;срок выкупа
      </template>
    </BaseForm>
  </BaseModal>
</template>

<style scoped lang="scss">
.modal-estimation-form {
  max-width: 39rem;
}

@media only screen and (max-width: 480px) {
  :deep(.base-form__title) {
    max-width: 10em;
  }
}
</style>
