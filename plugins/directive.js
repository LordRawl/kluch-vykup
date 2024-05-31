// import Inputmask from 'inputmask.phone'
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('mask', {
    async mounted(el, { value }) {
      if (!value || !el) return

      const Inputmask = await import('inputmask.phone')
      Inputmask.default(value).mask(el)
    }
  })
})
