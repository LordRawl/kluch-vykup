import { UIInput, UISelect } from '#components'

const RULES = {
  REQUIRED: {
    name: 'Не указано имя',
    phone: 'Не указан телефон',
    email: 'Не указан email',
    empty: 'Обязательное поле',
    checked: 'Без согласия мы не сможем обработать вашу заявку'
  },
  PHONE: {
    correct: 'Введите корректный телефон'
  },
  EMAIL: {
    correct: 'Введите корректный email'
  }
}

const FormModel = {
  NAME: {
    component: UIInput,
    props: {
      placeholder: 'Имя',
      name: 'name'
    },
    rules: [
      {
        required: true,
        message: RULES.REQUIRED.name
      }
    ]
  },
  PHONE: {
    component: UIInput,
    props: {
      placeholder: '+7 (999) 999-9999',
      name: 'phone',
      mask: '+7 (999) 999-9999'
    },
    rules: [
      {
        required: true,
        message: RULES.REQUIRED.phone
      },
      {
        pattern: /^(\+7|8)?\s?\(?[2-9]\d{2}\)?\s?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/,
        message: RULES.PHONE.correct
      }
    ]
  },
  ADDRESS: {
    component: UIInput,
    props: {
      placeholder: 'Адрес',
      name: 'address'
    },
    rules: [
      {
        required: true,
        message: RULES.REQUIRED.empty
      }
    ]
  },
  CATEGORY: {
    component: UISelect,
    props: {
      placeholder: 'Тип недвижимости',
      name: 'category',
      titleField: 'name',
      valueField: 'id',
      options: [
        {
          id: 'Квартира',
          name: 'Квартира'
        },
        {
          id: 'Комната',
          name: 'Комната'
        },
        {
          id: 'Дом',
          name: 'Дом'
        },
        {
          id: 'Дача',
          name: 'Дача'
        },
        {
          id: 'Участок',
          name: 'Участок'
        },
        {
          id: 'Гараж',
          name: 'Гараж'
        },
        {
          id: 'Коммерческая',
          name: 'Коммерческая'
        }
      ]
    },
    rules: [
      {
        required: true,
        message: RULES.REQUIRED.empty
      }
    ]
  }
}

export default FormModel

export { RULES }
