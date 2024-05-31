<script setup>
const props = defineProps({
  shouldShowModal: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['modal-close'])

const handleEscape = e => {
  e.stopPropagation()

  if (e.keyCode === 27) {
    emit('modal-close')
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.classList.remove('modal-opened')
})

watch(
  () => props.shouldShowModal,
  newValue => {
    if (newValue) {
      document.body.classList.add('modal-opened')
    } else {
      document.body.classList.remove('modal-opened')
    }
  }
)
</script>

<template>
  <ClientOnly>
    <Teleport to="#modal">
      <Transition>
        <div v-if="shouldShowModal" class="modal">
          <div class="modal__overflowed" />

          <div class="modal__wrapper" @mousedown.self="emit('modal-close')">
            <div class="modal__container">
              <UIIcon class="modal__close" name="close" @click="emit('modal-close')" />

              <div class="modal__content">
                <slot />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<style lang="scss">
.modal-opened {
  overflow: hidden;

  .page {
    filter: blur(5px);
  }
}
</style>

<style lang="scss" scoped>
.modal {
  overflow: hidden;
  position: fixed;
  z-index: 99;
}

.modal__wrapper {
  position: fixed;
  inset: 0;
  overflow-y: auto;
  height: 100%;
  padding: 1rem 1.25rem;
  text-align: center;
  //scroll-padding-bottom: 1rem;
  //display: flex;
  //flex-direction: column;
  //z-index: 1;
  //
  &::after {
    content: '';
    //height: 1px;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }

  //&::after {
  //  content: '';
  //}
}

.modal__overflowed {
  position: fixed;
  background: var(--color-black);
  opacity: 0.6;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.modal__container {
  position: relative;
  width: 100%;
  max-width: 100%;
  background: var(--color-gray-200);
  border-radius: var(--border-radius-md);
  display: inline-flex;
  flex-direction: column;
  vertical-align: middle;
  text-align: left;
}

.modal__close {
  width: 2.75rem;
  height: 2.75rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
  fill: var(--color-black);
  transition: var(--transition-bgcolor);
  border-radius: var(--border-radius-xs);

  &:hover {
    background: var(--color-gray-300);
  }
}

@media only screen and (min-width: 640px) {
  .modal {
    padding: 4rem 1.25rem;
  }

  .modal__container {
    width: fit-content;
    margin: auto;
  }
}
</style>
