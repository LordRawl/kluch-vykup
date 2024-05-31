import { Splide, SplideSlide } from '@splidejs/vue-splide'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('Carousel', Splide)
  nuxtApp.vueApp.component('CarouselSlide', SplideSlide)
})
