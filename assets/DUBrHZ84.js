import { u as L, g as y, a as B, f as U, b as N, c as A } from './CftDT6nn.js'
import {
  p as E,
  _ as k,
  r as w,
  a as T,
  I as V,
  o as D,
  e as d,
  f as c,
  h as e,
  F as h,
  t as $,
  j as s,
  k as i,
  l as u,
  x as g,
  u as r,
  W as H,
  X as O,
  T as R,
  Y as j,
  y as C,
  n as b,
  q as x,
  B as q
} from './9iAdYHhH.js'
import './DhNc6Y5l.js'
import './DNJuQygB.js'
const z = E('/kluch-vykup/img/logo.svg'),
  S = o => (b('data-v-0596956c'), (o = o()), x(), o),
  W = { class: 'app-header__wrapper' },
  X = S(() =>
    e(
      'div',
      { class: 'app-header__logo' },
      [
        e('img', {
          src: z,
          alt: 'Выкуп недвижимости',
          width: '75',
          height: '24',
          class: 'app-header__logo-img'
        })
      ],
      -1
    )
  ),
  Y = { class: 'app-header__navbar' },
  G = { class: 'app-header__navbar-list' },
  J = { class: 'app-header__button-wrapper' },
  K = S(() =>
    e(
      'div',
      { class: 'app-header__phones' },
      [
        e('a', { href: 'tel:+79210665015', class: 'app-header__contact' }, '+7 (921) 066-50-15'),
        e('span', { class: 'app-header__contact-description' }, 'Заказать звонок')
      ],
      -1
    )
  ),
  P = { class: 'app-header__socials-wrapper' },
  Q = S(() => e('div', { class: 'app-header__toggler-inner' }, null, -1)),
  Z = [Q],
  ee = { class: 'app-header__menu' },
  oe = { class: 'app-header__menu-inner' },
  se = { class: 'app-header__menu-list' },
  te = {
    __name: 'Header',
    setup(o) {
      const a = w(!1),
        n = w(!1),
        { menuList: m } = L()
      T(a, v => {
        document.body.style.overflow = v ? 'hidden' : null
      })
      const l = () => {
        window.matchMedia('(min-width: 1280px)').matches && a.value && (a.value = !1)
      }
      return (
        V(() => {
          window.addEventListener('resize', l)
        }),
        D(() => {
          window.removeEventListener('resize', l)
        }),
        (v, _) => {
          const f = y,
            p = B,
            M = U,
            F = N
          return (
            d(),
            c(
              h,
              null,
              [
                e(
                  'header',
                  { class: j(['container app-header', r(a) && 'app-header--open']) },
                  [
                    e('div', W, [
                      X,
                      e('nav', Y, [
                        e('ul', G, [
                          (d(!0),
                          c(
                            h,
                            null,
                            $(
                              r(m),
                              t => (
                                d(),
                                c('li', { key: t.title, class: 'app-header__navbar-item' }, [
                                  s(
                                    f,
                                    { to: t.link, class: 'app-header__navbar-link' },
                                    { default: i(() => [u(g(t.title), 1)]), _: 2 },
                                    1032,
                                    ['to']
                                  )
                                ])
                              )
                            ),
                            128
                          ))
                        ])
                      ]),
                      e('div', J, [
                        s(
                          p,
                          {
                            size: 'small',
                            class: 'app-header__button',
                            onClick: _[0] || (_[0] = t => (n.value = !0))
                          },
                          { default: i(() => [u('Заказать оценку')]), _: 1 }
                        )
                      ]),
                      K,
                      e('div', P, [s(M, { size: 'small', class: 'app-header__socials' })]),
                      e(
                        'div',
                        {
                          class: 'app-header__toggler',
                          onClick: _[1] || (_[1] = t => (a.value = !r(a)))
                        },
                        Z
                      ),
                      s(
                        R,
                        { name: 'slide-down' },
                        {
                          default: i(() => [
                            H(
                              e(
                                'div',
                                ee,
                                [
                                  e('div', oe, [
                                    e('ul', se, [
                                      (d(!0),
                                      c(
                                        h,
                                        null,
                                        $(
                                          r(m),
                                          t => (
                                            d(),
                                            c(
                                              'li',
                                              { key: t.title, class: 'app-header__menu-item' },
                                              [
                                                s(
                                                  f,
                                                  { to: t.link, class: 'app-header__menu-link' },
                                                  { default: i(() => [u(g(t.title), 1)]), _: 2 },
                                                  1032,
                                                  ['to']
                                                )
                                              ]
                                            )
                                          )
                                        ),
                                        128
                                      ))
                                    ]),
                                    s(
                                      p,
                                      {
                                        class: 'app-header__menu-button',
                                        onClick: _[2] || (_[2] = t => (n.value = !0))
                                      },
                                      { default: i(() => [u(' Заказать оценку ')]), _: 1 }
                                    ),
                                    s(M, { class: 'app-header__menu-socials' })
                                  ])
                                ],
                                512
                              ),
                              [[O, r(a)]]
                            )
                          ]),
                          _: 1
                        }
                      )
                    ])
                  ],
                  2
                ),
                s(
                  F,
                  {
                    'should-show-modal': r(n),
                    'onUpdate:shouldShowModal': _[3] || (_[3] = t => (C(n) ? (n.value = t) : null))
                  },
                  null,
                  8,
                  ['should-show-modal']
                )
              ],
              64
            )
          )
        }
      )
    }
  },
  ae = k(te, [['__scopeId', 'data-v-0596956c']]),
  I = o => (b('data-v-4237be19'), (o = o()), x(), o),
  ne = { class: 'container app-footer' },
  _e = { class: 'app-footer__wrapper' },
  le = I(() =>
    e(
      'div',
      { class: 'app-footer__logo' },
      [
        e('img', {
          src: z,
          alt: 'Выкуп недвижимости',
          width: '75',
          height: '24',
          class: 'app-footer__logo-img'
        })
      ],
      -1
    )
  ),
  pe = { class: 'app-footer__navbar' },
  de = { class: 'app-footer__navbar-list' },
  ce = { class: 'app-footer__block' },
  re = I(() =>
    e('a', { href: 'tel:+79210665015', class: 'app-footer__contact' }, '+7 (921) 066-50-15', -1)
  ),
  ie = I(() =>
    e('a', { href: '/', class: 'app-footer__politic' }, 'Политика конфиденциальности', -1)
  ),
  ue = {
    __name: 'Footer',
    setup(o) {
      const { menuList: a } = L(),
        n = w(!1)
      return (m, l) => {
        const v = y,
          _ = B,
          f = A
        return (
          d(),
          c(
            h,
            null,
            [
              e('footer', ne, [
                e('div', _e, [
                  le,
                  e('nav', pe, [
                    e('ul', de, [
                      (d(!0),
                      c(
                        h,
                        null,
                        $(
                          r(a),
                          p => (
                            d(),
                            c('li', { key: p.title, class: 'app-footer__navbar-item' }, [
                              s(
                                v,
                                { to: p.link, class: 'app-footer__navbar-link' },
                                { default: i(() => [u(g(p.title), 1)]), _: 2 },
                                1032,
                                ['to']
                              )
                            ])
                          )
                        ),
                        128
                      ))
                    ])
                  ]),
                  e('div', ce, [
                    s(
                      _,
                      {
                        size: 'small',
                        class: 'app-footer__button',
                        onClick: l[0] || (l[0] = p => (n.value = !0))
                      },
                      { default: i(() => [u(' Бесплатная консультация ')]), _: 1 }
                    ),
                    re
                  ]),
                  ie
                ])
              ]),
              s(
                f,
                {
                  'should-show-modal': r(n),
                  'onUpdate:shouldShowModal': l[1] || (l[1] = p => (C(n) ? (n.value = p) : null))
                },
                null,
                8,
                ['should-show-modal']
              )
            ],
            64
          )
        )
      }
    }
  },
  he = k(ue, [['__scopeId', 'data-v-4237be19']]),
  me = o => (b('data-v-a0d4a44c'), (o = o()), x(), o),
  ve = { class: 'page' },
  fe = { class: 'page__main' },
  we = me(() => e('div', { id: 'modal' }, null, -1)),
  $e = {
    __name: 'default',
    setup(o) {
      return (a, n) => {
        const m = ae,
          l = he
        return (
          d(),
          c(
            h,
            null,
            [
              e('div', ve, [s(m), e('main', fe, [q(a.$slots, 'default', {}, void 0, !0)]), s(l)]),
              we
            ],
            64
          )
        )
      }
    }
  },
  Se = k($e, [['__scopeId', 'data-v-a0d4a44c']])
export { Se as default }
