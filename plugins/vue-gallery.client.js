import Lightbox from 'vue-easy-lightbox'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('Lightbox', Lightbox)
})
