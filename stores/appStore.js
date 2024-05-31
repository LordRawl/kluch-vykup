import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    menuList: [
      {
        title: 'О компании',
        link: {
          path: '/',
          hash: '#about'
        }
      },
      {
        title: 'Мы выкупаем',
        link: {
          path: '/',
          hash: '#main-tile'
        }
      },
      {
        title: 'Решение проблем',
        link: {
          path: '/',
          hash: '#about'
        }
      },
      {
        title: 'Контакты',
        link: {
          path: '/',
          hash: '#contacts'
        }
      }
    ]
  }),

  actions: {
    async sendMessage(message) {
      await $fetch('/api/message', { method: 'post', body: message })
    }
  }
})
