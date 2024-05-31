import { firstLetterUppercase } from '~/utils/tools.js'

const PARAMS_MODEL = {
  name: 'Имя',
  phone: 'Телефон',
  email: 'Email',
  address: 'Адрес',
  category: 'Тип недвижимости'
}

export default defineEventHandler(async event => {
  const config = useRuntimeConfig()
  const params = getQuery(event)

  Object.entries(params).forEach(([paramKey, paramValue]) => {
    if (Array.isArray(paramValue)) {
      params[paramKey] = paramValue.toString()
    }
  })

  const body = await readBody(event)

  const text = Object.entries(body)
    .map(([paramKey, paramValue]) => {
      const paramName = PARAMS_MODEL[paramKey] || firstLetterUppercase(paramKey)
      return `${paramName}: ${paramValue}`
    })
    .join('\n')
  // const chat_id = 197330758
  // const text = `Name: Ivan \nPhone: +79530397341 \nMessage: hi`
  // const telegram_bot_token = '6317571007:AAFuwzZTq-o8PuDfILqT-D17dEWVy7rYRxI'

  // const data = await $fetch(`https://api.telegram.org/bot${telegram_bot_token}/sendMessage`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     chat_id,
  //     text,
  //     parse_mode: 'HTML'
  //   })
  // }).catch(error => {
  //   console.error('Error sending message:', error)
  // })

  const vkKey =
    'vk1.a.HPFRZT3NvvsfDxrH-B6cmm7oM_3jUY09UCoWm1Zs4CD04AwD8xCxNKuh9JfezxhNgsqiqsZM7zLGSp6EhyShhBKR52CI3oXe_btVLZ-M9IoLVcdgkOUlwmC88dHlob0L_JlCf7gbCq8xgbHXj4zBFLht5MEPlgvVqQx4H6fzXmGrc_NlUi7yH_slffFq6xfSANYX64DBQGFDJ0nhWt7yEA'

  const data = await $fetch(`https://api.vk.ru/method/messages.send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${vkKey}`
    },
    params: {
      peer_id: 2000000001,
      random_id: 0,
      message: text,
      v: '5.236'
    }
  }).catch(error => {
    console.error('Error sending message:', error)
  })

  console.log({ data })

  return data
})
