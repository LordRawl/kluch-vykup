<script setup>
const list = [
  {
    title: 'В чем разница между срочным выкупом и обычной продажей?',
    content:
      'Разница заключается в сроках продажи и стоимости выкупаемого объекта недвижимости. При срочном выкупе собственник получает 85-90% от рыночной стоимости объекта в течение нескольких дней. Если вам надоело долго продавать недвижимость, мы поможем решить эту проблему быстро и эффективно!'
  },
  {
    title: 'Как быстро я получу деньги?',
    content:
      'Мы перечислим денежные средства в день сделки. При необходимости можем выдать аванс в день обращения, чтобы вы могли сразу использовать средства на свои нужды.'
  },
  {
    title: 'Как организована безопасность сделки?',
    content:
      'В нашей команде работают опытные специалисты, которые тщательно подготовят все необходимые документы для сделки. Права сторон зарегистрированы в договоре в строгом соответствии с Российским законодательством, что гарантирует безопасность и прозрачность процесса.'
  },
  {
    title: 'От чего зависит цена выкупа квартиры?',
    content:
      'Цена выкупа зависит от множества факторов: типа недвижимости, её состояния, расположения, наличия проблем с жильем и других важных аспектов. Мы учитываем все эти факторы, чтобы предложить вам справедливую и обоснованную цену.'
  }
]
</script>

<template>
  <section class="main-faq">
    <div class="container">
      <h2 class="k-title main-faq__title">Ответы на часто задаваемые вопросы</h2>

      <ul class="main-faq__list">
        <li v-for="{ title, content } in list" :key="title" class="main-faq__item">
          <UIAccordion :title="title">
            {{ content }}
          </UIAccordion>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-faq {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.main-faq__title {
  margin-bottom: 1.5rem;
}

.main-faq__list {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 1.25rem;
}

.main-faq__item {
}

@media only screen and (min-width: 640px) {
  .main-faq {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 960px) {
  .main-faq {
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }
}

@media only screen and (min-width: 1280px) {
}
</style>
