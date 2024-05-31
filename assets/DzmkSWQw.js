import {
  u as xt,
  _ as Ct,
  a as Mt,
  b as Kt,
  c as pe,
  d as Jt,
  F as D,
  e as me,
  f as fe
} from './CftDT6nn.js'
import {
  i as he,
  r as W,
  w as ve,
  a as R,
  o as ct,
  b as be,
  c as ge,
  d as ye,
  g as ot,
  p as ut,
  _ as P,
  e as w,
  f as $,
  h as i,
  j as v,
  k as E,
  l as T,
  u as L,
  m as Qt,
  n as F,
  q as N,
  s as Z,
  F as k,
  t as G,
  v as Q,
  x as V,
  y as et,
  z as we,
  A as bt,
  B as Ft,
  T as $e,
  C as xe,
  D as Ce,
  E as B,
  G as J,
  H as q,
  I as nt,
  J as Me,
  V as A,
  K as Nt,
  L as st,
  M as I,
  N as U,
  O as X,
  P as jt,
  Q as je,
  R as Ee,
  S as at,
  U as Le
} from './9iAdYHhH.js'
import './DhNc6Y5l.js'
import './DNJuQygB.js'
function Se(t, e = {}) {
  const s = e.head || he()
  if (s) return s.ssr ? s.push(t, e) : Oe(s, t, e)
}
function Oe(t, e, s = {}) {
  const n = W(!1),
    a = W({})
  ve(() => {
    a.value = n.value ? {} : ye(e)
  })
  const o = t.push(a.value, s)
  return (
    R(a, _ => {
      o.patch(_)
    }),
    ot() &&
      (ct(() => {
        o.dispose()
      }),
      be(() => {
        n.value = !0
      }),
      ge(() => {
        n.value = !1
      })),
    o
  )
}
const Ie = ut('/kluch-vykup/img/hero/main-hero--mobile.jpg'),
  Ae = ut('/kluch-vykup/img/hero/main-hero.jpg'),
  Xt = t => (F('data-v-8e6df3c5'), (t = t()), N(), t),
  Te = Ie,
  ke = { class: 'main-hero' },
  Pe = Qt(
    '<div class="container" data-v-8e6df3c5><div class="main-hero__block" data-v-8e6df3c5><picture class="main-hero__bg" data-v-8e6df3c5><source media="(max-width: 640px)" srcset="' +
      Te +
      '" data-v-8e6df3c5><img src="' +
      Ae +
      '" alt="" class="main-hero__bg-img" data-v-8e6df3c5></picture><div class="main-hero__content" data-v-8e6df3c5><h1 class="main-hero__title" data-v-8e6df3c5> Выкупим любую недвижимость в Вологде и области </h1><p class="main-hero__text" data-v-8e6df3c5> Выплата достигается по лучшей цене <b data-v-8e6df3c5>до 90% от реальной рыночной стоимости.</b> <br data-v-8e6df3c5>Оперативная покупка и заключение сделки в течении 24 часов. </p></div></div></div>',
    1
  ),
  Ye = { class: 'container main-hero__aside' },
  Ve = Xt(() => i('br', null, null, -1)),
  He = Xt(() => i('br', null, null, -1)),
  Re = {
    __name: 'Hero',
    setup(t) {
      const { sendMessage: e } = xt()
      return (s, n) => {
        const a = Ct
        return (
          w(),
          $('section', ke, [
            Pe,
            i('div', Ye, [
              v(
                a,
                {
                  'should-show-label': '',
                  onSubmit: L(e),
                  class: 'main-hero__form',
                  'button-title': 'Узнать стоимость'
                },
                {
                  title: E(() => [T(' Оценка недвижимости ')]),
                  subtitle: E(() => [
                    T(' Оставьте заявку и узнайте какая стоимость вашей недвижимости. '),
                    Ve,
                    He,
                    T(
                      ' Всего 5 минут разговора с менеджером и вы узнаете точную стоимость и срок выкупа '
                    )
                  ]),
                  _: 1
                },
                8,
                ['onSubmit']
              )
            ])
          ])
        )
      }
    }
  },
  Fe = P(Re, [['__scopeId', 'data-v-8e6df3c5']]),
  Ne = t => (F('data-v-69d1f3f6'), (t = t()), N(), t),
  De = { class: 'container main-benefits' },
  ze = Ne(() => i('h2', { class: 'visually-hidden' }, 'Преимущества для вас', -1)),
  Be = { class: 'main-benefits__list' },
  Ue = ['innerHTML'],
  We = ['innerHTML'],
  Ge = Z({
    __name: 'Benefits',
    setup(t) {
      const e = [
        {
          title: 'Полное юридическое <br>сопровождение',
          description:
            'Мы&nbsp;предоставляем вам своего опытного и&nbsp;грамотного юриста на&nbsp;всех этапах сделки.'
        },
        {
          title: 'Аванс <br>в день обращения',
          description:
            'Мы&nbsp;гарантируем выкуп вашей недвижимости, поэтому предоставляем аванс наличными или на&nbsp;карту <nobr>до 1 млн. руб.</nobr>'
        },
        {
          title: 'Выкуп недвижимости',
          description: 'Выкупаем недвижимость лично, <br>без комиссии и&nbsp;посредников.'
        },
        {
          title: 'Гарантия выкупа',
          description: 'Выкупаем даже если наложены ограничения или имеются долговые обязательства.'
        }
      ]
      return (s, n) => (
        w(),
        $('section', De, [
          ze,
          i('ul', Be, [
            (w(),
            $(
              k,
              null,
              G(e, ({ title: a, description: o }) =>
                i('li', { key: a, class: 'main-benefits__item' }, [
                  i('h3', { class: 'main-benefits__heading', innerHTML: a }, null, 8, Ue),
                  i('p', { class: 'main-benefits__description', innerHTML: o }, null, 8, We)
                ])
              ),
              64
            ))
          ])
        ])
      )
    }
  }),
  qe = P(Ge, [['__scopeId', 'data-v-69d1f3f6']]),
  Et = t => (F('data-v-bfd142cc'), (t = t()), N(), t),
  Ze = { class: 'main-about' },
  Ke = { class: 'container main-about__container' },
  Je = Et(() => i('h2', { class: 'k-title main-about__title' }, 'О компании', -1)),
  Qe = Et(() =>
    i(
      'p',
      { class: 'main-about__subtitle' },
      [
        T(
          ' Наша компания специализируется на выкупе недвижимости в Вологодской области с 2011 года. '
        ),
        i('br'),
        i('br'),
        T(
          ' Мы проводим сделки по выкупу любой недвижимости за собственные деньги. При необходимости, представим интересы клиентов в судах, организуем переговорный процесс с кредиторами и сособственниками, выплатим долги, знаем специфику банковского дела, поможем разобраться в сложных ситуациях. '
        )
      ],
      -1
    )
  ),
  Xe = { class: 'main-about__slider' },
  tn = Et(() => i('h3', { class: 'main-about__heading' }, 'В команде опытные профессионалы:', -1)),
  en = { class: 'main-about-team__photo-wrapper' },
  nn = ['srcset'],
  sn = ['src', 'alt'],
  an = { class: 'main-about-team__name' },
  on = { class: 'main-about-team__job' },
  ln = {
    __name: 'About',
    setup(t) {
      const e = {
          perPage: 5,
          perMove: 1,
          autoHeight: !0,
          drag: !1,
          arrows: !1,
          pagination: !1,
          gap: '1.25rem',
          arrowPath:
            'M25.4118 12.9145C25.6071 12.7192 25.9236 12.7192 26.1188 12.9145L32.8484 19.6464C33.0436 19.8417 33.0436 20.1583 32.8484 20.3536L26.1188 27.0856C25.9236 27.2809 25.6071 27.2809 25.4118 27.0856C25.2166 26.8903 25.2166 26.5737 25.4118 26.3784L31.2878 20.5003L7.49945 20.5049C7.22336 20.505 6.9995 20.2811 6.99945 20.0049C6.9994 19.7287 7.22317 19.5048 7.49926 19.5047L31.2882 19.5002L25.4118 13.6217C25.2166 13.4264 25.2166 13.1098 25.4118 12.9145Z',
          breakpoints: {
            1279: { perPage: 3, pagination: !0, arrows: !0, drag: !0 },
            767: { perPage: 2, arrows: !1 },
            460: { perPage: 1 }
          },
          classes: {
            pagination: 'carousel__pagination',
            page: 'carousel__bullet',
            arrows: 'carousel__arrows',
            arrow: 'carousel__arrow',
            prev: 'carousel__arrow--prev',
            next: 'carousel__arrow--next'
          }
        },
        s = [
          { image: 'ilya-smyshlyaev', job: 'специалист по срочному выкупу', name: 'Илья Смышляев' },
          { image: 'lyubov-smyshlyaeva', job: 'ипотечный брокер', name: 'Любовь Смышляева' },
          { image: 'evgenia-larionova', job: 'эксперт-оценщик', name: 'Евгения Ларионова' },
          { image: 'anastasia-mikhalevskaya', job: 'юрист', name: 'Анастасия Михалевская' },
          { image: 'olga-kochneva', job: 'юрист', name: 'Ольга Кочнева' }
        ],
        n = W(!1)
      return (a, o) => {
        const l = Q('CarouselSlide'),
          _ = Q('Carousel'),
          u = Mt,
          c = Kt
        return (
          w(),
          $(
            k,
            null,
            [
              i('section', Ze, [
                i('div', Ke, [
                  Je,
                  Qe,
                  i('div', Xe, [
                    tn,
                    v(
                      _,
                      { options: e, class: 'main-about-team__slider' },
                      {
                        default: E(() => [
                          (w(),
                          $(
                            k,
                            null,
                            G(s, ({ image: d, job: b, name: r }, p) =>
                              v(
                                l,
                                { key: r, index: p, class: 'main-about-team__slide' },
                                {
                                  default: E(() => [
                                    i('picture', en, [
                                      i(
                                        'source',
                                        {
                                          srcset: `/kluch-vykup/img/team/${d}.webp`,
                                          type: 'image/webp'
                                        },
                                        null,
                                        8,
                                        nn
                                      ),
                                      i(
                                        'img',
                                        {
                                          src: `/kluch-vykup/img/team/${d}.jpg`,
                                          alt: r,
                                          width: '320',
                                          height: '410',
                                          class: 'main-about-team__photo'
                                        },
                                        null,
                                        8,
                                        sn
                                      )
                                    ]),
                                    i('p', an, V(r), 1),
                                    i('p', on, V(b), 1)
                                  ]),
                                  _: 2
                                },
                                1032,
                                ['index']
                              )
                            ),
                            64
                          ))
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  v(
                    u,
                    { class: 'main-about__button', onClick: o[0] || (o[0] = d => (n.value = !0)) },
                    { default: E(() => [T(' Оставить заявку ')]), _: 1 }
                  )
                ])
              ]),
              v(
                c,
                {
                  'should-show-modal': L(n),
                  'onUpdate:shouldShowModal': o[1] || (o[1] = d => (et(n) ? (n.value = d) : null))
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
  rn = P(ln, [['__scopeId', 'data-v-bfd142cc']]),
  cn = t => (F('data-v-48c4ef16'), (t = t()), N(), t),
  un = { class: 'main-tile' },
  dn = { class: 'container' },
  _n = cn(() =>
    i('h2', { class: 'k-title main-tile__title' }, 'Недвижимость, которую мы выкупаем', -1)
  ),
  pn = { class: 'main-tile__list' },
  mn = { class: 'main-tile__img-wrapper' },
  fn = ['srcset'],
  hn = ['src'],
  vn = ['innerHTML'],
  bn = {
    __name: 'Tile',
    setup(t) {
      const e = [
        { title: 'Квартира, комната или доля в квартире', image: 'apartment' },
        { title: 'Загородный дом, таунхаус, дача', image: 'house' },
        { title: 'Земельный участок', image: 'land' },
        { title: 'Гараж', image: 'garage' }
      ]
      return (s, n) => (
        w(),
        $('section', un, [
          i('div', dn, [
            _n,
            i('ul', pn, [
              (w(),
              $(
                k,
                null,
                G(e, (a, o) =>
                  i('li', { key: o, class: 'main-tile__item' }, [
                    i('picture', mn, [
                      i(
                        'source',
                        { srcset: `/kluch-vykup/img/tile/${a.image}.webp`, type: 'image/webp' },
                        null,
                        8,
                        fn
                      ),
                      i(
                        'img',
                        {
                          src: `/kluch-vykup/img/tile/${a.image}.jpg`,
                          width: '152',
                          height: '152',
                          class: 'main-tile__img'
                        },
                        null,
                        8,
                        hn
                      )
                    ]),
                    i('h3', { class: 'main-tile__heading', innerHTML: a.title }, null, 8, vn)
                  ])
                ),
                64
              ))
            ])
          ])
        ])
      )
    }
  },
  gn = P(bn, [['__scopeId', 'data-v-48c4ef16']])
/*!
 * @splidejs/splide-extension-grid
 * Version  : 0.4.1
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */ function yn(t) {
  t.length = 0
}
function Lt(t, e, s) {
  return Array.prototype.slice.call(t, e, s)
}
function dt(t) {
  return t.bind.apply(t, [null].concat(Lt(arguments, 1)))
}
function St(t, e) {
  return typeof e === t
}
var te = Array.isArray
dt(St, 'function')
dt(St, 'string')
dt(St, 'undefined')
function ee(t) {
  return te(t) ? t : [t]
}
function Dt(t, e) {
  ee(t).forEach(e)
}
var wn = Object.keys
function $n(t, e, s) {
  if (t) {
    var n = wn(t)
    n = n
    for (var a = 0; a < n.length; a++) {
      var o = n[a]
      if (o !== '__proto__' && e(t[o], o) === !1) break
    }
  }
  return t
}
function xn(t) {
  return (
    Lt(arguments, 1).forEach(function(e) {
      $n(e, function(s, n) {
        t[n] = e[n]
      })
    }),
    t
  )
}
var ne = 'splide'
function Cn() {
  var t = []
  function e(l, _, u, c) {
    a(l, _, function(d, b, r) {
      var p = 'addEventListener' in d,
        j = p ? d.removeEventListener.bind(d, b, u, c) : d.removeListener.bind(d, u)
      p ? d.addEventListener(b, u, c) : d.addListener(u), t.push([d, b, r, u, j])
    })
  }
  function s(l, _, u) {
    a(l, _, function(c, d, b) {
      t = t.filter(function(r) {
        return r[0] === c && r[1] === d && r[2] === b && (!u || r[3] === u) ? (r[4](), !1) : !0
      })
    })
  }
  function n(l, _, u) {
    var c,
      d = !0
    return (
      typeof CustomEvent == 'function'
        ? (c = new CustomEvent(_, { bubbles: d, detail: u }))
        : ((c = document.createEvent('CustomEvent')), c.initCustomEvent(_, d, !1, u)),
      l.dispatchEvent(c),
      c
    )
  }
  function a(l, _, u) {
    Dt(l, function(c) {
      c &&
        Dt(_, function(d) {
          d.split(' ').forEach(function(b) {
            var r = b.split('.')
            u(c, r[0], r[1])
          })
        })
    })
  }
  function o() {
    t.forEach(function(l) {
      l[4]()
    }),
      yn(t)
  }
  return { bind: e, unbind: s, dispatch: n, destroy: o }
}
var Mn = 'visible',
  jn = 'hidden',
  ft = 'refresh',
  En = 'updated',
  Ln = 'destroy'
function se(t) {
  var e = t ? t.event.bus : document.createDocumentFragment(),
    s = Cn()
  function n(o, l) {
    s.bind(e, ee(o).join(' '), function(_) {
      l.apply(l, te(_.detail) ? _.detail : [])
    })
  }
  function a(o) {
    s.dispatch(e, o, Lt(arguments, 1))
  }
  return t && t.event.on(Ln, s.destroy), xn(s, { bus: e, on: n, off: dt(s.unbind, e), emit: a })
}
var Sn = ne,
  _t = ne + '__slide',
  On = _t + '__container'
function zt(t) {
  t.length = 0
}
function pt(t, e, s) {
  return Array.prototype.slice.call(t, e, s)
}
function Ot(t) {
  return t.bind(null, ...pt(arguments, 1))
}
function mt(t, e) {
  return typeof e === t
}
function In(t) {
  return !Tt(t) && mt('object', t)
}
const It = Array.isArray
Ot(mt, 'function')
const At = Ot(mt, 'string'),
  An = Ot(mt, 'undefined')
function Tt(t) {
  return t === null
}
function Tn(t) {
  return t instanceof HTMLElement
}
function kt(t) {
  return It(t) ? t : [t]
}
function tt(t, e) {
  kt(t).forEach(e)
}
function Bt(t, e) {
  return t.push(...kt(e)), t
}
function ae(t, e, s) {
  t &&
    tt(e, n => {
      n && t.classList[s ? 'add' : 'remove'](n)
    })
}
function gt(t, e) {
  ae(t, At(e) ? e.split(' ') : e, !0)
}
function rt(t, e) {
  tt(e, t.appendChild.bind(t))
}
function kn(t, e) {
  return Tn(t) && (t.msMatchesSelector || t.matches).call(t, e)
}
function Pn(t, e) {
  const s = t ? pt(t.children) : []
  return e ? s.filter(n => kn(n, e)) : s
}
function Ut(t, e) {
  return e ? Pn(t, e)[0] : t.firstElementChild
}
const oe = Object.keys
function ie(t, e, s) {
  if (t) {
    let n = oe(t)
    n = n
    for (let a = 0; a < n.length; a++) {
      const o = n[a]
      if (o !== '__proto__' && e(t[o], o) === !1) break
    }
  }
  return t
}
function Yn(t) {
  return (
    pt(arguments, 1).forEach(e => {
      ie(e, (s, n) => {
        t[n] = e[n]
      })
    }),
    t
  )
}
function Vn(t, e) {
  kt(oe(t)).forEach(s => {
    delete t[s]
  })
}
function yt(t, e) {
  tt(t, s => {
    tt(e, n => {
      s && s.removeAttribute(n)
    })
  })
}
function Pt(t, e, s) {
  In(e)
    ? ie(e, (n, a) => {
        Pt(t, a, n)
      })
    : tt(t, n => {
        Tt(s) || s === '' ? yt(n, e) : n.setAttribute(e, String(s))
      })
}
function Wt(t, e, s) {
  const n = document.createElement(t)
  return e && (At(e) ? gt(n, e) : Pt(n, e)), s && rt(s, n), n
}
function z(t, e, s) {
  if (An(s)) return getComputedStyle(t)[e]
  Tt(s) || (t.style[e] = `${s}`)
}
function Hn(t, e) {
  return t && t.classList.contains(e)
}
function Rn(t) {
  tt(t, e => {
    e && e.parentNode && e.parentNode.removeChild(e)
  })
}
function Gt(t, e) {
  return e ? pt(t.querySelectorAll(e)) : []
}
function qt(t, e) {
  ae(t, e, !1)
}
function lt(t) {
  return At(t) ? t : t ? `${t}px` : ''
}
const Fn = 'splide'
function Nn(t, e) {
  if (!t) throw new Error(`[${Fn}] ${e}`)
}
const { min: Dn, max: Fa, floor: Na, ceil: Da, abs: za } = Math
function zn(t) {
  return t < 10 ? `0${t}` : `${t}`
}
const le = `${_t}__row`,
  wt = `${_t}--col`,
  Bn = { rows: 1, cols: 1, dimensions: [], gap: {} }
function Un(t) {
  function e() {
    const { rows: a, cols: o, dimensions: l } = t
    return It(l) && l.length ? l : [[a, o]]
  }
  function s(a) {
    const o = e()
    return o[Dn(a, o.length - 1)]
  }
  function n(a) {
    const o = e()
    let l,
      _,
      u = 0
    for (let c = 0; c < o.length; c++) {
      const d = o[c]
      if (((l = d[0] || 1), (_ = d[1] || 1), (u += l * _), a < u)) break
    }
    return Nn(l && _, 'Invalid dimension'), [l, _]
  }
  return { get: s, getAt: n }
}
function Wn(t, e, s) {
  const { on: n, destroy: a } = se(t),
    { Components: o, options: l } = t,
    { resolve: _ } = o.Direction,
    { forEach: u } = o.Slides
  function c() {
    b(), l.slideFocus && (n(Mn, x), n(jn, C))
  }
  function d() {
    u(f => {
      const { slide: h } = f
      g(h, !1),
        O(h).forEach(m => {
          yt(m, 'style')
        }),
        S(h).forEach(m => {
          j(m, !0), yt(m, 'style')
        })
    }),
      a()
  }
  function b() {
    u(f => {
      const { slide: h } = f,
        [m, y] = s.get(f.isClone ? f.slideIndex : f.index)
      r(m, h),
        p(y, h),
        S(f.slide).forEach((M, Y) => {
          ;(M.id = `${f.slide.id}-col${zn(Y + 1)}`), t.options.cover && j(M)
        })
    })
  }
  function r(f, h) {
    const { row: m } = e.gap,
      y = `calc(${100 / f}%${m ? ` - ${lt(m)} * ${(f - 1) / f}` : ''})`
    O(h).forEach((M, Y, H) => {
      z(M, 'height', y),
        z(M, 'display', 'flex'),
        z(M, 'margin', `0 0 ${lt(m)} 0`),
        z(M, 'padding', 0),
        Y === H.length - 1 && z(M, 'marginBottom', 0)
    })
  }
  function p(f, h) {
    const { col: m } = e.gap,
      y = `calc(${100 / f}%${m ? ` - ${lt(m)} * ${(f - 1) / f}` : ''})`
    S(h).forEach((M, Y, H) => {
      z(M, 'width', y), Y !== H.length - 1 && z(M, _('marginRight'), lt(m))
    })
  }
  function j(f, h) {
    const m = Ut(f, `.${On}`),
      y = Ut(m || f, 'img')
    y &&
      y.src &&
      (z(m || f, 'background', h ? '' : `center/cover no-repeat url("${y.src}")`),
      z(y, 'display', h ? '' : 'none'))
  }
  function O(f) {
    return Gt(f, `.${le}`)
  }
  function S(f) {
    return Gt(f, `.${wt}`)
  }
  function g(f, h) {
    S(f).forEach(m => {
      Pt(m, 'tabindex', h ? 0 : null)
    })
  }
  function x(f) {
    g(f.slide, !0)
  }
  function C(f) {
    g(f.slide, !1)
  }
  return { mount: c, destroy: d }
}
function Gn(t, e, s) {
  const { on: n, off: a } = se(t),
    { Elements: o } = e,
    l = {},
    _ = Un(l),
    u = Wn(t, l, _),
    c = `${Sn}--grid`,
    d = []
  function b() {
    r(), n(En, r)
  }
  function r() {
    Vn(l),
      Yn(l, Bn, s.grid || {}),
      C()
        ? (p(), Bt(d, o.slides), gt(t.root, c), rt(o.list, S()), a(ft), n(ft, O), j())
        : f() && (p(), j())
  }
  function p() {
    if (f()) {
      const { slides: h } = o
      u.destroy(),
        d.forEach(m => {
          qt(m, wt), rt(o.list, m)
        }),
        Rn(h),
        qt(t.root, c),
        zt(h),
        Bt(h, d),
        zt(d),
        a(ft)
    }
  }
  function j() {
    t.refresh()
  }
  function O() {
    f() && u.mount()
  }
  function S() {
    const h = []
    let m = 0,
      y = 0,
      M,
      Y
    return (
      d.forEach((H, _e) => {
        const [Ht, Rt] = _.getAt(_e)
        y || (m || ((M = Wt(H.tagName, _t)), h.push(M)), (Y = g(Ht, H, M))),
          x(Rt, H, Y),
          ++y >= Rt && ((y = 0), (m = ++m >= Ht ? 0 : m))
      }),
      h
    )
  }
  function g(h, m, y) {
    const M = m.tagName.toLowerCase() === 'li' ? 'ul' : 'div'
    return Wt(M, le, y)
  }
  function x(h, m, y) {
    return gt(m, wt), rt(y, m), m
  }
  function C() {
    if (s.grid) {
      const { rows: h, cols: m, dimensions: y } = l
      return h > 1 || m > 1 || (It(y) && y.length > 0)
    }
    return !1
  }
  function f() {
    return Hn(t.root, c)
  }
  return { mount: b, destroy: p }
}
const qn = t => (F('data-v-18951d86'), (t = t()), N(), t),
  Zn = { class: 'main-problems' },
  Kn = { class: 'container main-problems__container' },
  Jn = qn(() => i('h2', { class: 'k-title main-problems__title' }, 'Какие проблемы мы решаем', -1)),
  Qn = { class: 'main-problems-slider__content' },
  Xn = ['innerHTML'],
  ts = ['innerHTML'],
  es = { class: 'main-problems-slider__photo-wrapper' },
  ns = ['srcset'],
  ss = ['src'],
  as = {
    __name: 'Problems',
    setup(t) {
      const e = {
          perPage: 1,
          perMove: 1,
          autoHeight: !0,
          arrows: !0,
          pagination: !1,
          gap: '1.25rem',
          grid: { rows: 2, cols: 2, gap: { row: '1.25rem', col: '1.25rem' } },
          arrowPath:
            'M25.4118 12.9145C25.6071 12.7192 25.9236 12.7192 26.1188 12.9145L32.8484 19.6464C33.0436 19.8417 33.0436 20.1583 32.8484 20.3536L26.1188 27.0856C25.9236 27.2809 25.6071 27.2809 25.4118 27.0856C25.2166 26.8903 25.2166 26.5737 25.4118 26.3784L31.2878 20.5003L7.49945 20.5049C7.22336 20.505 6.9995 20.2811 6.99945 20.0049C6.9994 19.7287 7.22317 19.5048 7.49926 19.5047L31.2882 19.5002L25.4118 13.6217C25.2166 13.4264 25.2166 13.1098 25.4118 12.9145Z',
          breakpoints: {
            1279: { pagination: !0, grid: { rows: 2, cols: 1 } },
            767: { arrows: !1 },
            639: { grid: { rows: 1, cols: 1 } }
          },
          classes: {
            pagination: 'carousel__pagination',
            page: 'carousel__bullet',
            arrows: 'carousel__arrows',
            arrow: 'carousel__arrow',
            prev: 'carousel__arrow--prev',
            next: 'carousel__arrow--next'
          }
        },
        s = [
          {
            title: 'Быстрый выкуп <br>в течении 24 часов',
            description:
              'Мы&nbsp;можем выкупить вашу квартиру в&nbsp;течение 24&nbsp;часов после обращения. Вам не&nbsp;нужно тратить время на&nbsp;поиски покупателя, оформление документов и&nbsp;торги.'
          },
          {
            title: 'Выплата долгов <br>и закрытие ипотеки',
            description:
              'Мы&nbsp;выкупаем квартиры в&nbsp;ипотеке, в&nbsp;залоге, под арестом, с&nbsp;долгами ЖКХ и&nbsp;иным финансовым организациям. <br>Без комиссий и&nbsp;дополнительных расходов.'
          },
          {
            title: 'Конфликтные <br>ситуации',
            description:
              'Мы&nbsp;можем помочь вам решить сложные ситуации, связанные с&nbsp;разделом имущества, наследством или спорами с&nbsp;застройщиком.'
          },
          {
            title: 'Выкуп квартир <br>в любом состоянии',
            description:
              'Мы&nbsp;предлагаем реальную помощь <br>и&nbsp;максимально высокую цену за&nbsp;поврежденную недвижимость: после потопа, пожара, без ремонта и&nbsp;др.'
          },
          {
            title: 'Выкуп с проблемными документами',
            description:
              'В&nbsp;нашей команде опытные юристы по&nbsp;недвижимости , которые помогут: восстановить недостающие документы на&nbsp;недвижимость, провести приватизацию, восстановить сроки наследства и&nbsp;др.'
          },
          {
            title: 'Финансовое обеспечение лечения или образования',
            description:
              'Гарантируем быстрое предоставление средств, выдадим аванс до&nbsp;продажи вашей недвижимости.'
          },
          {
            title: 'Переезд в другой город',
            description:
              'Быстро выдадим деньги за&nbsp;вашу недвижимость и&nbsp;поможем подобрать квартиру в&nbsp;желаемом городе, наша компания сотрудничает с&nbsp;надежными партнерами в&nbsp;19&nbsp;городах России.'
          },
          {
            title: 'Не нашли вашу ситуацию?',
            description: 'Рассмотрим в&nbsp;индивидуальном порядке и&nbsp;предложим решения.'
          }
        ],
        n = W(!1)
      return (a, o) => {
        const l = Q('CarouselSlide'),
          _ = Q('Carousel'),
          u = Mt,
          c = pe
        return (
          w(),
          $(
            k,
            null,
            [
              i('section', Zn, [
                i('div', Kn, [
                  Jn,
                  v(
                    _,
                    { options: e, extensions: { Grid: L(Gn) }, class: 'main-problems-slider' },
                    {
                      default: E(() => [
                        (w(),
                        $(
                          k,
                          null,
                          G(s, ({ description: d, title: b }, r) =>
                            v(
                              l,
                              { key: b, index: r, class: 'main-problems-slider__slide' },
                              {
                                default: E(() => [
                                  i('div', Qn, [
                                    i(
                                      'p',
                                      { class: 'main-problems-slider__title', innerHTML: b },
                                      null,
                                      8,
                                      Xn
                                    ),
                                    i(
                                      'p',
                                      { class: 'main-problems-slider__description', innerHTML: d },
                                      null,
                                      8,
                                      ts
                                    )
                                  ]),
                                  i('picture', es, [
                                    i(
                                      'source',
                                      {
                                        srcset: `/kluch-vykup/img/problems/${r + 1}.webp`,
                                        type: 'image/webp'
                                      },
                                      null,
                                      8,
                                      ns
                                    ),
                                    i(
                                      'img',
                                      {
                                        src: `/kluch-vykup/img/problems/${r + 1}.png`,
                                        alt: '',
                                        width: '180',
                                        height: '180',
                                        class: 'main-problems-slider__photo'
                                      },
                                      null,
                                      8,
                                      ss
                                    )
                                  ])
                                ]),
                                _: 2
                              },
                              1032,
                              ['index']
                            )
                          ),
                          64
                        ))
                      ]),
                      _: 1
                    },
                    8,
                    ['extensions']
                  ),
                  v(
                    u,
                    {
                      class: 'main-problems__button',
                      onClick: o[0] || (o[0] = d => (n.value = !0))
                    },
                    { default: E(() => [T('Получить консультацию')]), _: 1 }
                  )
                ])
              ]),
              v(
                c,
                {
                  'should-show-modal': L(n),
                  'onUpdate:shouldShowModal': o[1] || (o[1] = d => (et(n) ? (n.value = d) : null))
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
  os = P(as, [['__scopeId', 'data-v-18951d86']]),
  re = t => (F('data-v-fd4c1abc'), (t = t()), N(), t),
  is = { class: 'main-steps' },
  ls = { class: 'container' },
  rs = re(() => i('h2', { class: 'k-title main-steps__title' }, 'Процесс выкупа недвижимости', -1)),
  cs = re(() =>
    i('p', { class: 'k-subtitle main-steps__subtitle' }, 'От обращения до сделки за 24 часа', -1)
  ),
  us = { class: 'main-steps__list' },
  ds = { class: 'main-steps__wrapper' },
  _s = { class: 'main-steps__content' },
  ps = ['innerHTML'],
  ms = ['innerHTML'],
  fs = { key: 0, class: 'main-steps__time' },
  hs = {
    __name: 'Steps',
    setup(t) {
      const e = W(!1),
        s = [
          {
            title: 'Обращение в&nbsp;компанию',
            description: 'Специалист в&nbsp;индивидуальном порядке разберет вашу ситуацию',
            action: { title: 'Оставить заявку', callback: () => (e.value = !0) },
            time: '15 минут',
            icon: 'call-calling'
          },
          {
            title: 'Оценка недвижимости',
            description: 'Оценка стоимости недвижимости проводится бесплатно',
            time: 'от 2 часов',
            icon: 'calculator'
          },
          {
            title: 'Сбор документов',
            description: 'Соберем и&nbsp;подготовим все необходимые для сделки документы',
            time: 'от 3 часов',
            icon: 'task-square'
          },
          {
            title: 'Заключение сделки и&nbsp;получение денег',
            description: 'Перечислим денежные средства в&nbsp;день сделки',
            icon: 'edit'
          }
        ]
      return (n, a) => {
        const o = Mt,
          l = Jt,
          _ = Kt
        return (
          w(),
          $(
            k,
            null,
            [
              i('section', is, [
                i('div', ls, [
                  rs,
                  cs,
                  i('ul', us, [
                    (w(),
                    $(
                      k,
                      null,
                      G(s, (u, c) =>
                        i('li', { key: c, class: 'main-steps__item' }, [
                          i('div', ds, [
                            i('div', _s, [
                              i(
                                'h3',
                                { class: 'main-steps__heading', innerHTML: u.title },
                                null,
                                8,
                                ps
                              ),
                              i(
                                'p',
                                { class: 'main-steps__text', innerHTML: u.description },
                                null,
                                8,
                                ms
                              ),
                              u.action
                                ? (w(),
                                  we(
                                    o,
                                    { key: 0, size: 'medium', onClick: u.action.callback },
                                    { default: E(() => [T(V(u.action.title), 1)]), _: 2 },
                                    1032,
                                    ['onClick']
                                  ))
                                : bt('', !0)
                            ]),
                            v(
                              l,
                              {
                                name: u.icon,
                                width: '60',
                                height: '60',
                                class: 'main-steps__icon'
                              },
                              null,
                              8,
                              ['name']
                            )
                          ]),
                          u.time ? (w(), $('p', fs, V(u.time), 1)) : bt('', !0)
                        ])
                      ),
                      64
                    ))
                  ])
                ])
              ]),
              v(
                _,
                {
                  'should-show-modal': L(e),
                  'onUpdate:shouldShowModal': a[0] || (a[0] = u => (et(e) ? (e.value = u) : null))
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
  vs = P(hs, [['__scopeId', 'data-v-fd4c1abc']]),
  ce = t => (F('data-v-9d8a0776'), (t = t()), N(), t),
  bs = { class: 'main-calculator' },
  gs = { class: 'container' },
  ys = ce(() => i('h2', { class: 'k-title main-calculator__title' }, 'Калькулятор стоимости', -1)),
  ws = ce(() =>
    i(
      'p',
      { class: 'k-subtitle main-calculator__subtitle' },
      ' Узнайте предварительную стоимость недвижимости без выезда на объект в течении 15 минут. ',
      -1
    )
  ),
  $s = {
    __name: 'Calculator',
    setup(t) {
      const { sendMessage: e } = xt(),
        s = [
          {
            ...D.CATEGORY,
            props: {
              ...D.CATEGORY.props,
              title: 'Тип объекта:',
              modelValue: D.CATEGORY.props.options[0].id,
              class: 'main-calculator__form-item--small'
            }
          },
          {
            ...D.ADDRESS,
            props: {
              ...D.ADDRESS.props,
              title: 'Адрес:',
              placeholder: 'Введите адрес',
              class: 'main-calculator__form-item--large'
            }
          },
          {
            ...D.NAME,
            props: {
              ...D.NAME.props,
              title: 'Имя:',
              placeholder: 'Введите ваше имя',
              class: 'main-calculator__form-item--medium'
            }
          },
          {
            ...D.PHONE,
            props: {
              ...D.PHONE.props,
              title: 'Телефон:',
              class: 'main-calculator__form-item--medium'
            }
          }
        ]
      return (n, a) => {
        const o = Ct
        return (
          w(),
          $('section', bs, [
            i('div', gs, [
              ys,
              ws,
              v(o, { fields: s, class: 'main-calculator__form', onSubmit: L(e) }, null, 8, [
                'onSubmit'
              ])
            ])
          ])
        )
      }
    }
  },
  xs = P($s, [['__scopeId', 'data-v-9d8a0776']]),
  Yt = t => (F('data-v-072ddfc5'), (t = t()), N(), t),
  Cs = { class: 'main-objects' },
  Ms = { class: 'container main-objects__container' },
  js = Yt(() => i('h2', { class: 'k-title main-objects__title' }, 'Выкупленные объекты', -1)),
  Es = { class: 'main-objects-slider__photo-wrapper' },
  Ls = ['srcset'],
  Ss = ['src'],
  Os = { class: 'main-objects-slider__content' },
  Is = ['innerHTML'],
  As = { class: 'main-objects-slider__params' },
  Ts = { class: 'main-objects-slider__buyout main-objects-slider__text--medium' },
  ks = { class: 'main-objects-slider__review-wrapper' },
  Ps = Yt(() => i('p', { class: 'main-objects-slider__text--medium' }, 'Отзыв клиента', -1)),
  Ys = { class: 'main-objects-slider__review' },
  Vs = { class: 'main-objects-slider__review-text' },
  Hs = { class: 'main-objects-slider__review-name main-objects-slider__text--medium' },
  Rs = Yt(() => i('div', { class: 'main-objects-slider__review-stars' }, null, -1)),
  Fs = {
    __name: 'Objects',
    setup(t) {
      const e = {
          perPage: 1,
          perMove: 1,
          autoHeight: !0,
          arrows: !0,
          pagination: !0,
          gap: '1.25rem',
          arrowPath:
            'M25.4118 12.9145C25.6071 12.7192 25.9236 12.7192 26.1188 12.9145L32.8484 19.6464C33.0436 19.8417 33.0436 20.1583 32.8484 20.3536L26.1188 27.0856C25.9236 27.2809 25.6071 27.2809 25.4118 27.0856C25.2166 26.8903 25.2166 26.5737 25.4118 26.3784L31.2878 20.5003L7.49945 20.5049C7.22336 20.505 6.9995 20.2811 6.99945 20.0049C6.9994 19.7287 7.22317 19.5048 7.49926 19.5047L31.2882 19.5002L25.4118 13.6217C25.2166 13.4264 25.2166 13.1098 25.4118 12.9145Z',
          breakpoints: {},
          classes: {
            pagination: 'carousel__pagination',
            page: 'carousel__bullet',
            arrows: 'carousel__arrows',
            arrow: 'carousel__arrow',
            prev: 'carousel__arrow--prev',
            next: 'carousel__arrow--next'
          }
        },
        s = [
          {
            title: 'Однокомнатная квартира',
            params: {
              Адрес: 'г. Вологда, ул. Козленская',
              'Общая площадь': '31,9 кв.м',
              'Оценочная стоимость': '3 750 000 ₽',
              'Погашено долгов': '350 000 ₽'
            },
            buyout: '3 060 000 ₽',
            review: {
              text:
                'Огромное спасибо Илье за быструю покупку квартиры. Семье были срочно нужны деньги, а квартира — в залоге. Илья приехал в тот же день, оценил квартиру и подробно объяснил дальнейшие действия! Я доволен полученной суммой.',
              name: 'Константин Елисеев'
            }
          },
          {
            title: 'Участок с щитовым домом',
            params: {
              Адрес: 'г. Вологодский р-н, ст. Дикая',
              'Общая площадь участка': '6,5 соток',
              'Общая площадь дома': '42 кв.м',
              'Оценочная стоимость': '2 900 000 ₽'
            },
            buyout: '2 610 000 ₽',
            review: {
              text:
                'Спасибо за быструю работу! Мне достался от родителей дом в деревне, думал, долго буду искать покупателя. Илья предложил неплохую цену, в тот же день подписали договор. И вот, я уже катаюсь на машине, которую так хотел купить.',
              name: 'Денис Кузнецов'
            }
          },
          {
            title: 'Участок с баней',
            params: {
              Адрес: 'с. Кубенское',
              'Общая площадь участка': '5 соток',
              'Оценочная стоимость': '2 500 000 ₽'
            },
            buyout: '2 250 000 ₽',
            review: {
              text:
                'Хочу поблагодарить компанию «Выкуп недвижимости» за помощь с выкупом участка. Илья не только купил участок, но и помог подобрать мне квартиру в Вологде.',
              name: 'Елена Серова'
            }
          },
          {
            title: 'Гараж',
            params: {
              Адрес: 'г. Вологда, ул. Старое шоссе',
              'Общая площадь': '31,9 кв.м',
              'Оценочная стоимость': '800 000 ₽'
            },
            buyout: '720 000 ₽',
            review: {
              text:
                'Спасибо Илье за помощь, деньги за гараж получил на второй день. Сумма устроила и главное, никаких комиссий.',
              name: 'Иван Рогозин'
            }
          },
          {
            title: 'Комната в трехкомнатной квартире',
            params: {
              Адрес: 'г. Вологда, ул. Герцена',
              'Общая площадь': '17 кв.м',
              'Оценочная стоимость': '1 200 000 ₽',
              'Погашено долгов': '200 000 ₽'
            },
            buyout: '900 000 ₽',
            review: {
              text:
                'Спасибо Илье за помощь в продаже комнаты. Соседи неадекватные — жить там было невозможно. Долги погашены, могу взять ипотеку и купить полноценную квартиру, полученной суммы хватает на первоначальный взнос.',
              name: 'Юлия Куликова'
            }
          },
          {
            title: 'Комната в общежитии',
            params: {
              Адрес: 'г. Вологда, ул. Горького',
              'Общая площадь': '12 кв.м',
              'Оценочная стоимость': '980 000 ₽',
              'Погашено долгов': '130 000 ₽'
            },
            buyout: '750 000 ₽',
            review: {
              text: 'Спасибо. Деньги получил быстро, долги погашены.',
              name: 'Дмитрий Холмиков'
            }
          },
          {
            title: 'Двухкомнатная квартира',
            params: {
              Адрес: 'г. Вологда, ул. Ленинградская',
              'Общая площадь': '52,6 кв.м',
              'Оценочная стоимость': '3 200 000 ₽',
              'Погашена ипотека': '2 000 000 ₽'
            },
            buyout: '1 050 000 ₽',
            review: {
              text:
                'Илья, спасибо за решение проблемы. Муж остался без работы и ипотеку было платить нереально. Освободились от рабского гнёта, получили остаток суммы на руки. Довольны.',
              name: 'Татьяна и Иван Смирновы'
            }
          },
          {
            title: 'Две комнаты в секции',
            params: {
              Адрес: 'г. Вологда, ул. Конева',
              'Общая площадь': '24,4 кв.м',
              'Оценочная стоимость': '1 500 000 ₽',
              'Погашено долгов': '350 000 ₽'
            },
            buyout: '950 000 ₽',
            review: {
              text:
                'Все хорошо, Илья помог решить проблему с документами, погасил долги. Деньги получила в оговорённые сроки.',
              name: 'Ольга Крутикова'
            }
          }
        ]
      return (n, a) => {
        const o = Q('CarouselSlide'),
          l = Q('Carousel')
        return (
          w(),
          $('section', Cs, [
            i('div', Ms, [
              js,
              v(
                l,
                { options: e, class: 'main-objects-slider' },
                {
                  default: E(() => [
                    (w(),
                    $(
                      k,
                      null,
                      G(s, ({ title: _, params: u, buyout: c, review: d }, b) =>
                        v(
                          o,
                          { key: `slide-${b + 1}`, index: b, class: 'main-objects-slider__slide' },
                          {
                            default: E(() => [
                              i('picture', Es, [
                                i(
                                  'source',
                                  {
                                    srcset: `/kluch-vykup/img/objects/${b + 1}.webp`,
                                    type: 'image/webp'
                                  },
                                  null,
                                  8,
                                  Ls
                                ),
                                i(
                                  'img',
                                  {
                                    src: `/kluch-vykup/img/objects/${b + 1}.jpg`,
                                    alt: '',
                                    width: '320',
                                    height: '214',
                                    class: 'main-objects-slider__photo'
                                  },
                                  null,
                                  8,
                                  Ss
                                )
                              ]),
                              i('div', Os, [
                                i(
                                  'p',
                                  { class: 'main-objects-slider__title', innerHTML: _ },
                                  null,
                                  8,
                                  Is
                                ),
                                i('ul', As, [
                                  (w(!0),
                                  $(
                                    k,
                                    null,
                                    G(
                                      u,
                                      (r, p) => (
                                        w(),
                                        $(
                                          'li',
                                          {
                                            key: `bullet-${b}-${p}`,
                                            class: 'main-objects-slider__bullet'
                                          },
                                          V(p) + ': ' + V(r),
                                          1
                                        )
                                      )
                                    ),
                                    128
                                  ))
                                ]),
                                i('p', Ts, [T(' Срочный выкуп: '), i('span', null, V(c), 1)])
                              ]),
                              i('div', ks, [
                                Ps,
                                i('div', Ys, [
                                  i('p', Vs, V(d.text), 1),
                                  i('p', Hs, V(d.name), 1),
                                  Rs
                                ])
                              ])
                            ]),
                            _: 2
                          },
                          1032,
                          ['index']
                        )
                      ),
                      64
                    ))
                  ]),
                  _: 1
                }
              )
            ])
          ])
        )
      }
    }
  },
  Ns = P(Fs, [['__scopeId', 'data-v-072ddfc5']]),
  Ds = ut('/kluch-vykup/img/form-image.webp'),
  zs = ut('/kluch-vykup/img/form-image.png'),
  Bs = Ds,
  Us = { class: 'main-form' },
  Ws = { class: 'container main-form__container' },
  Gs = Qt(
    '<figure class="main-form__block" data-v-4cb28577><figcaption class="main-form__contact" data-v-4cb28577><p class="main-form__name" data-v-4cb28577>Илья Смышляев</p><p class="main-form__text" data-v-4cb28577>Специалист по срочному выкупу</p></figcaption><div class="main-form__circle" data-v-4cb28577></div><picture class="main-form__img-wrapper" data-v-4cb28577><source srcset="' +
      Bs +
      '" type="image/webp" data-v-4cb28577><img src="' +
      zs +
      '" alt="Илья Смышляев" width="152" height="191" class="main-form__img" data-v-4cb28577></picture></figure>',
    1
  ),
  qs = {
    __name: 'Form',
    setup(t) {
      const { sendMessage: e } = xt()
      return (s, n) => {
        const a = Ct
        return (
          w(),
          $('section', Us, [
            i('div', Ws, [
              v(
                a,
                {
                  class: 'main-form__form',
                  onSubmit: L(e),
                  'button-title': 'Получить консультацию'
                },
                {
                  title: E(() => [T(' Бесплатная консультация ')]),
                  subtitle: E(() => [
                    T(
                      ' Заполните форму и мы перезвоним вам в течении 2-х минут и проконсультируем по всем вопросам '
                    )
                  ]),
                  _: 1
                },
                8,
                ['onSubmit']
              ),
              Gs
            ])
          ])
        )
      }
    }
  },
  Zs = P(qs, [['__scopeId', 'data-v-4cb28577']]),
  Ks = { class: 'ui-accordion__title' },
  Js = { key: 0, class: 'ui-accordion__content' },
  Qs = {
    __name: 'Accordion',
    props: { title: { type: String, default: null } },
    setup(t) {
      const e = W(!1)
      return (s, n) => {
        const a = me
        return (
          w(),
          $(
            'div',
            {
              class: 'ui-accordion',
              tabindex: '0',
              onKeydown:
                n[1] ||
                (n[1] = xe(
                  Ce(o => (e.value = !L(e)), ['self']),
                  ['enter']
                ))
            },
            [
              i(
                'div',
                { class: 'ui-accordion__header', onClick: n[0] || (n[0] = o => (e.value = !L(e))) },
                [
                  i('p', Ks, V(t.title), 1),
                  Ft(
                    s.$slots,
                    'suffix',
                    {},
                    () => [
                      v(a, { 'is-reverse': L(e), class: 'ui-accordion__arrow' }, null, 8, [
                        'is-reverse'
                      ])
                    ],
                    !0
                  )
                ]
              ),
              v($e, null, {
                default: E(() => [
                  L(e) ? (w(), $('div', Js, [Ft(s.$slots, 'default', {}, void 0, !0)])) : bt('', !0)
                ]),
                _: 3
              })
            ],
            32
          )
        )
      }
    }
  },
  Xs = P(Qs, [['__scopeId', 'data-v-4584d49c']]),
  ta = t => (F('data-v-9d8b5720'), (t = t()), N(), t),
  ea = { class: 'main-faq' },
  na = { class: 'container' },
  sa = ta(() =>
    i('h2', { class: 'k-title main-faq__title' }, 'Ответы на часто задаваемые вопросы', -1)
  ),
  aa = { class: 'main-faq__list' },
  oa = {
    __name: 'Faq',
    setup(t) {
      const e = [
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
      return (s, n) => {
        const a = Xs
        return (
          w(),
          $('section', ea, [
            i('div', na, [
              sa,
              i('ul', aa, [
                (w(),
                $(
                  k,
                  null,
                  G(e, ({ title: o, content: l }) =>
                    i('li', { key: o, class: 'main-faq__item' }, [
                      v(a, { title: o }, { default: E(() => [T(V(l), 1)]), _: 2 }, 1032, ['title'])
                    ])
                  ),
                  64
                ))
              ])
            ])
          ])
        )
      }
    }
  },
  ia = P(oa, [['__scopeId', 'data-v-9d8b5720']]),
  ht = t => t instanceof Date,
  la = t => Object.keys(t).length === 0,
  $t = t => t != null && typeof t == 'object',
  Zt = (t, ...e) => Object.prototype.hasOwnProperty.call(t, ...e),
  vt = t => $t(t) && la(t),
  ra = () => Object.create(null),
  Vt = (t, e) => {
    if (t === e) return {}
    if (!$t(t) || !$t(e)) return e
    const s = Object.keys(t).reduce((n, a) => (Zt(e, a) || (n[a] = void 0), n), ra())
    return ht(t) || ht(e)
      ? t.valueOf() == e.valueOf()
        ? {}
        : e
      : Object.keys(e).reduce((n, a) => {
          if (!Zt(t, a)) return (n[a] = e[a]), n
          const o = Vt(t[a], e[a])
          return (vt(o) && !ht(o) && (vt(t[a]) || !vt(e[a]))) || (n[a] = o), n
        }, s)
  }
function ue() {
  ot() || I({ text: 'injectMap must be only called on runtime.', isInternal: !0 })
  const t = X('map')
  return (
    (!t || !et(t)) && I({ text: 'Was not able to inject valid map in injectMap.', isInternal: !0 }),
    t
  )
}
function ca() {
  ot() || I({ text: 'injectLayers must be only called on runtime.', isInternal: !0 })
  const t = X('layers')
  return (
    (!t || !et(t)) &&
      I({ text: 'Was not able to inject valid layers in injectLayers.', isInternal: !0 }),
    t
  )
}
async function ua({ timeoutCallback: t, waitDuration: e } = {}) {
  if (
    (typeof window > 'u' &&
      I({ text: 'waitTillYmapInit cannot be called on SSR.', isInternal: !0 }),
    !(typeof ymaps3 < 'u'))
  )
    return new Promise((s, n) => {
      if (typeof ymaps3 > 'u') {
        let a
        ;(e = typeof e < 'u' ? e : A.settings.value.mapsScriptWaitDuration),
          e !== !1 &&
            ((a = setTimeout(
              () => {
                t == null || t(a, !0),
                  n(
                    new A.YandexMapException(
                      'Was not able to wait for map initialization in waitTillYmapInit. Ensure that map was initialized. You can change this behavior by using mapsScriptWaitDuration.'
                    )
                  )
              },
              typeof e == 'number' ? e : 5e3
            )),
            t == null || t(a, !1)),
          R(
            A.isLoaded,
            () => {
              a && (clearTimeout(a), t == null || t(a, !0)),
                A.loadStatus.value === 'loaded' ? s() : n(A.loadError)
            },
            { immediate: !0 }
          )
      } else s()
    })
}
async function de({ map: t, timeoutCallback: e, waitDuration: s } = {}) {
  !t && !ot() && I({ text: 'onMapInit must be only called on runtime.', isInternal: !0 }),
    typeof window > 'u' && I({ text: 'waitTillMapInit cannot be called on SSR.', isInternal: !0 })
  const n = t || ue()
  if (!n.value)
    return new Promise((a, o) => {
      let l
      ;(s = typeof s < 'u' ? s : A.settings.value.mapsRenderWaitDuration),
        s !== !1 &&
          ((l = setTimeout(
            () => {
              e == null || e(l, !0),
                o(
                  new A.YandexMapException(
                    'Was not able to wait for map initialization in waitTillMapInit. You can change this behavior by using mapsRenderWaitDuration.'
                  )
                )
            },
            typeof s == 'number' ? s : 5e3
          )),
          e == null || e(l, !1))
      let _
      _ = R(
        n,
        () => {
          n.value && (_ == null || _(), l && (clearTimeout(l), e == null || e(l, !0)), a())
        },
        { immediate: !0 }
      )
    })
}
function da({ children: t, isMercator: e, root: s }) {
  var n
  s || I({ text: 'Failed to execute deleteMapChild due to destroyed root', isInternal: !0 }),
    t && !e
      ? typeof (s == null ? void 0 : s.value) == 'object' && Array.isArray(s.value)
        ? (s.value = s.value.filter(a => a !== t))
        : (n = s.value) == null || n.removeChild(t)
      : s.value && t && e && 'update' in s.value && s.value.update({ projection: void 0 })
}
const _a = Z({
  name: 'YandexMap',
  props: {
    modelValue: { type: Object, default: null },
    value: { type: Object, default: null },
    tag: { type: String, default: 'div' },
    width: { type: String, default: '100%' },
    height: { type: String, default: '100%' },
    zIndex: { type: Number, default: 0 },
    settings: { type: Object, required: !0 },
    readonlySettings: { type: Boolean, default: !1 },
    realSettingsLocation: { type: Boolean, default: !1 },
    layers: { type: Array, default: () => [] },
    cursorGrab: { type: Boolean, default: !1 }
  },
  emits: {
    input(t) {
      return !t || typeof ymaps3 > 'u' || t instanceof ymaps3.YMap
    },
    'update:modelValue'(t) {
      return !t || typeof ymaps3 > 'u' || t instanceof ymaps3.YMap
    }
  },
  slots: Object,
  setup(t, { slots: e, emit: s }) {
    const n = B(null),
      a = B(null),
      o = B([]),
      l = B(null),
      _ = B(null),
      u = B(!1),
      c = W(0)
    J('map', n),
      J('layers', o),
      J('projection', l),
      J('needsToHold', c),
      s('input', n.value),
      s('update:modelValue', n.value)
    const d = q(() => ({ ...t.settings, projection: void 0 })),
      b = async () => {
        t.settings.location || I({ text: 'You must specify location in YandexMap settings' }),
          n.value && n.value.destroy()
        const r = _.value
        if (!r) return
        const p = d.value
        l.value && (p.projection = l.value),
          (n.value = new ymaps3.YMap(r, p, [...o.value, ...t.layers])),
          s('input', n.value),
          s('update:modelValue', n.value)
      }
    return (
      nt(async () => {
        let r,
          p,
          j = null
        ct(() => {
          j && clearTimeout(j)
        })
        const O = () => {
          p == null || p()
          let g = at(d)
          p = R(
            d,
            x => {
              var C
              if (!n.value) return
              const f = at(x)
              t.realSettingsLocation &&
                f.location &&
                ('center' in f.location && 'center' in g.location
                  ? (g.location.center = n.value.center)
                  : 'bounds' in f.location &&
                    'bounds' in g.location &&
                    (g.location.bounds = n.value.bounds),
                'zoom' in f.location && 'zoom' in g.location && (g.location.zoom = n.value.zoom))
              const h = Object.keys(Vt(g, f))
              if (h.length === 0) return
              const m = { ...f }
              for (const y in m) h.includes(y) || delete m[y]
              ;(g = f), (C = n.value) == null || C.update(m)
            },
            { deep: !0 }
          )
        }
        t.readonlySettings || O(),
          R(
            () => t.readonlySettings,
            g => {
              g ? O() : p == null || p()
            }
          ),
          R(
            () => t.cursorGrab,
            async g => {
              await de({
                map: n,
                timeoutCallback: (x, C) => {
                  C ? (j = null) : (j = x)
                }
              }).catch(() => {}),
                n.value &&
                  (g
                    ? ((r = new ymaps3.YMapListener({
                        onActionStart: x => {
                          var C
                          x.type === 'drag' &&
                            t.cursorGrab &&
                            ((C = a.value) == null || C.classList.add('__ymap--grabbing'))
                        },
                        onActionEnd: x => {
                          var C
                          x.type === 'drag' &&
                            ((C = a.value) == null || C.classList.remove('__ymap--grabbing'))
                        }
                      })),
                      n.value.addChild(r))
                    : r && n.value.removeChild(r))
            },
            { immediate: !0 }
          )
        const S = g => {
          var x
          const C = g.target
          !C ||
            !('classList' in C) ||
            ((C.classList.contains('ymaps3x0--button') ||
              ((x = C.closest) != null && x.call(C, '.ymaps3x0--button'))) &&
              g.preventDefault())
        }
        if (
          (R(
            _,
            g => {
              g &&
                (g.removeEventListener('click', S, { capture: !0 }),
                g.addEventListener('click', S, { capture: !0 }))
            },
            { immediate: !0 }
          ),
          await Me(),
          !A.isLoaded.value)
        ) {
          if (A.settings.value.initializeOn === 'onComponentMount')
            try {
              await Nt()
            } catch (g) {
              console.error(
                'An error occured while initializing Yandex Map with onComponentMount setting'
              ),
                console.error(g)
              return
            }
          else
            (A.loadStatus.value === 'loading' ||
              A.settings.value.initializeOn === 'onPluginInit') &&
              (A.settings.value.initializeOn === 'onPluginInit' &&
                A.loadStatus.value !== 'loading' &&
                (await st()),
              await Nt())
          A.isLoaded.value ||
            I({
              text:
                'You have set up <yandex-map> component without initializing Yandex maps. Please check initializeOn setting or call initYmaps manually before registering this component.'
            })
        }
        ;(u.value = !0),
          await st(),
          c.value &&
            (await new Promise(g =>
              R(
                c,
                () => {
                  c.value || g()
                },
                { immediate: !0 }
              )
            )),
          await b()
      }),
      ct(() => {
        ;(n.value = null), s('input', n.value), s('update:modelValue', n.value)
      }),
      () => {
        var r
        const p = {
            class: ['__ymap', { '__ymap--grab': t.cursorGrab }],
            ref: a,
            style: { width: t.width, height: t.height, 'z-index': t.zIndex.toString() }
          },
          j = U('div', { class: '__ymap_container', ref: _ }),
          O = { class: '__ymap_slots', style: { display: 'none' } }
        return u.value
          ? U(t.tag, p, [j, U('div', O, (r = e.default) == null ? void 0 : r.call(e, {}))])
          : U(t.tag, p, [j, U('div', O)])
      }
    )
  }
})
async function it({
  returnOnly: t,
  willDeleteByHand: e,
  strictMapRoot: s,
  requiredImport: n,
  createFunction: a,
  settings: o,
  settingsUpdateIgnoreKeys: l,
  isLayer: _,
  isMercator: u,
  isMapRoot: c,
  mapRootRef: d,
  duplicateInit: b
}) {
  ot() || I({ text: 'setupMapChildren must be only called on runtime.', isInternal: !0 })
  const r = B(),
    p = X('mapRoot', null),
    j = X('mapRootInitPromises', null)
  let O
  const S = ue(),
    g = ca()
  let x = null
  const C = (h, m) => {
    x || (x = new Set()), m ? x.delete(h) : x.add(h)
  }
  if (
    (c && !b && (J('mapRoot', d || r), (O = B([])), J('mapRootInitPromises', O)),
    !t &&
      !e &&
      ct(() => {
        r.value && da({ children: r.value, isMercator: u, root: p != null && p.value ? p : S }),
          x != null && x.size && (x.forEach(h => clearTimeout(h)), x.clear())
      }),
    o)
  ) {
    let h = at(o)
    R(
      o,
      m => {
        if (!m) return
        const y = Object.keys(Vt(h, m))
        if (y.length === 0) return
        const M = at(m)
        for (const H in M) y.includes(H) || delete M[H]
        const Y = l && (et(l) ? l.value : l)
        Y && Le(M, Y),
          Object.keys(M).length !== 0 &&
            ((h = at(m)), r.value && 'update' in r.value && r.value.update(M))
      },
      { deep: !0 }
    )
  }
  !_ && !u
    ? (await de({ timeoutCallback: C }),
      S.value ||
        I({
          text:
            'map is undefined in setupMapChildren. Please verify that Yandex Maps were initialized successfully and you only use components inside <yandex-map>.'
        }))
    : await ua({ timeoutCallback: C }),
    s &&
      ((p != null && p.value) || (await st()),
      (p != null && p.value) ||
        I({
          text:
            "mapRoot is undefined in setupMapChildren. Please verify that you are using component inside it's root: for example, don't use Controls outside <yandex-map-controls>."
        })),
    c && (await st(), await Promise.all((O == null ? void 0 : O.value) || []))
  let f
  if (n) {
    const h = n()
    j != null && j.value && j.value.push(Promise.resolve(h)), (f = await h)
  }
  return (
    (r.value = a(f)),
    !t && S.value && !u
      ? (j != null && j.value && (await Promise.all(j.value), n || (await st())),
        typeof (p == null ? void 0 : p.value) == 'object' && Array.isArray(p.value)
          ? (p.value = [...p.value, r.value])
          : ((p == null ? void 0 : p.value) || S.value).addChild(r.value))
      : _
      ? g.value.push(r.value)
      : u && S.value && S.value.update({ projection: r.value }),
    r.value
  )
}
const pa = Z({
    name: 'YandexMapDefaultFeaturesLayer',
    props: {
      value: { type: Object, default: null },
      modelValue: { type: Object, default: null },
      settings: { type: Object, default: () => ({}) }
    },
    emits: {
      input(t) {
        return !0
      },
      'update:modelValue'(t) {
        return !0
      },
      hold(t) {
        return !0
      }
    },
    slots: Object,
    setup(t, { slots: e, emit: s }) {
      const n = X('needsToHold')
      n.value++
      let a
      return (
        nt(async () => {
          ;(a = await it({
            createFunction: () => new ymaps3.YMapDefaultFeaturesLayer(t.settings || {}),
            settings: q(() => t.settings),
            isLayer: !0
          })),
            s('input', a),
            s('update:modelValue', a),
            n.value--
        }),
        () => {
          var o
          return jt((o = e.default) == null ? void 0 : o.call(e, {}))
        }
      )
    }
  }),
  ma = Z({
    name: 'YandexMapDefaultSchemeLayer',
    props: {
      value: { type: Object, default: null },
      modelValue: { type: Object, default: null },
      settings: { type: Object, default: () => ({}) }
    },
    slots: Object,
    emits: {
      input(t) {
        return !0
      },
      'update:modelValue'(t) {
        return !0
      },
      hold(t) {
        return !0
      }
    },
    setup(t, { slots: e, emit: s }) {
      const n = X('needsToHold')
      n.value++
      let a
      return (
        nt(async () => {
          ;(a = await it({
            createFunction: () => new ymaps3.YMapDefaultSchemeLayer(t.settings || {}),
            settings: q(() => t.settings),
            isLayer: !0
          })),
            s('input', a),
            s('update:modelValue', a),
            n.value--
        }),
        () => {
          var o
          return (o = e.default) == null ? void 0 : o.call(e, {})
        }
      )
    }
  })
function fa({ position: t, containerAttrs: e, wrapperAttrs: s, zeroSizes: n }) {
  const a = { class: ['__ymap-marker'], style: {} },
    o = { class: ['__ymap-marker_wrapper'], style: {} },
    l = t === 'default' || t === 'default default'
  if (t && !l)
    if (t.startsWith('translate')) o.style.transform = t
    else {
      let u = 0,
        c = 0
      const d = t.split(' ')
      for (let b = 0; b < d.length; b++) {
        let r = 0
        const p = d[b]
        switch (p) {
          case 'top':
          case 'left':
            r = -100
            break
          case 'top-center':
          case 'left-center':
            r = -50
            break
          case 'bottom':
          case 'right':
            r = 100
            break
          case 'bottom-center':
          case 'right-center':
            r = 50
            break
          default:
            r = 0
        }
        p.startsWith('left') || p.startsWith('right') ? (u = r) : (c = r)
      }
      o.style.transform = `translate(${u}%, ${c}%)`
    }
  ;(n === !0 || (n !== !1 && t && !l)) &&
    ((a.style.width = '0'),
    (a.style.height = '0'),
    o.style.transform && (o.style.width = 'fit-content'))
  const _ = { root: { ...(e ?? {}) }, children: { ...(s ?? {}) } }
  for (const [u, c] of Object.entries(_)) {
    const d = u === 'root' ? a : o
    c.class &&
      (Array.isArray(c.class) || (c.class = [c.class]), (c.class = [...d.class, ...c.class])),
      c != null &&
        c.style &&
        (typeof c.style != 'object' || Array.isArray(c.style)
          ? console.warn(
              `Style property was given in ${u} of marker, but it is not an object. Style of this prop can only be an object, therefore it was ignored.`
            )
          : (c.style = { ...d.style, ...c.style })),
      Object.assign(d, c)
  }
  return { root: a, children: o }
}
const ha = Z({
    name: 'YandexMapMarker',
    inheritAttrs: !1,
    props: {
      value: { type: Object, default: null },
      modelValue: { type: Object, default: null },
      settings: { type: Object, required: !0 },
      position: { type: String },
      containerAttrs: { type: Object, default: () => ({}) },
      wrapperAttrs: { type: Object, default: () => ({}) },
      zeroSizes: { type: Boolean, default: null }
    },
    emits: {
      input(t) {
        return !0
      },
      'update:modelValue'(t) {
        return !0
      }
    },
    slots: Object,
    setup(t, { slots: e, emit: s, attrs: n }) {
      let a
      const o = W(null)
      nt(async () => {
        t.settings.coordinates ||
          I({ text: 'You must specify coordinates in YandexMapMarker settings' }),
          (a = await it({
            settings: q(() => t.settings),
            createFunction: () => new ymaps3.YMapMarker(t.settings, o.value)
          })),
          s('input', a),
          s('update:modelValue', a)
      }),
        R(o, () => {
          var _
          o.value && ((_ = o.value.parentNode) == null || _.removeChild(o.value))
        })
      const l = q(() =>
        fa({
          position: t.position,
          containerAttrs: t.containerAttrs,
          wrapperAttrs: t.wrapperAttrs,
          zeroSizes: t.zeroSizes
        })
      )
      return () => {
        var _
        return je([
          U('div', { ...l.value.root, ref: o, ...Ee(n) }, [
            U('div', { ...l.value.children }, (_ = e.default) == null ? void 0 : _.call(e, {}))
          ])
        ])
      }
    }
  }),
  va = Z({
    name: 'YandexMapControls',
    props: {
      value: { type: Object, default: null },
      modelValue: { type: Object, default: null },
      settings: { type: Object, required: !0 }
    },
    emits: {
      input(t) {
        return !0
      },
      'update:modelValue'(t) {
        return !0
      }
    },
    slots: Object,
    setup(t, { slots: e, emit: s }) {
      const n = B(null)
      return (
        nt(async () => {
          t.settings.position ||
            I({ text: 'You must specify position in YandexMapControls settings' }),
            (n.value = await it({
              createFunction: () => new ymaps3.YMapControls(t.settings),
              isMapRoot: !0,
              settings: q(() => t.settings)
            })),
            s('input', n.value),
            s('update:modelValue', n.value)
        }),
        () => {
          var a
          return n.value ? jt((a = e.default) == null ? void 0 : a.call(e, {})) : U('div')
        }
      )
    }
  }),
  ba = Z({
    name: 'YandexMapZoomControl',
    props: {
      value: { type: Object, default: null },
      modelValue: { type: Object, default: null },
      settings: { type: Object, default: () => ({}) }
    },
    slots: Object,
    emits: {
      input(t) {
        return !0
      },
      'update:modelValue'(t) {
        return !0
      }
    },
    setup(t, { slots: e, emit: s }) {
      let n
      return (
        nt(async () => {
          ;(n = await it({
            createFunction: a => new a.YMapZoomControl(t.settings),
            requiredImport: () => ymaps3.import('@yandex/ymaps3-controls@0.0.1'),
            settings: q(() => t.settings),
            strictMapRoot: !0
          })),
            s('input', n),
            s('update:modelValue', n)
        }),
        () => {
          var a
          return jt((a = e.default) == null ? void 0 : a.call(e, {}))
        }
      )
    }
  }),
  K = t => (F('data-v-dd1548e9'), (t = t()), N(), t),
  ga = { class: 'main-contacts' },
  ya = { class: 'container' },
  wa = K(() => i('h2', { class: 'k-title main-contacts__title' }, 'Контакты', -1)),
  $a = { class: 'main-contacts__wrapper' },
  xa = { class: 'main-contacts__content' },
  Ca = K(() =>
    i(
      'h3',
      { class: 'main-contacts__heading' },
      ' г. Вологда, ул. Сергея Орлова, БЦ «Белладжио» ',
      -1
    )
  ),
  Ma = K(() =>
    i(
      'p',
      { class: 'main-contacts__text main-contacts__text--max' },
      ' Будем рады видеть вас в нашем офисе! Готовы решить любую вашу проблему. ',
      -1
    )
  ),
  ja = { class: 'main-contacts__work' },
  Ea = { class: 'main-contacts__time' },
  La = K(() => i('p', { class: 'main-contacts__text' }, 'Часы работы:', -1)),
  Sa = K(() => i('p', { class: 'main-contacts__text' }, 'Пн-Пт: с 9:00 до 18:00', -1)),
  Oa = K(() =>
    i('p', { class: 'main-contacts__text' }, 'Сб-Вс: Принимаем звонки с 9:00 до 20:00', -1)
  ),
  Ia = K(() =>
    i('a', { href: 'tel:+79210665015', class: 'main-contacts__phone' }, '+7 (921) 066-50-15', -1)
  ),
  Aa = { class: 'main-contacts__socials-wrapper' },
  Ta = { class: 'main-contacts__map-wrapper' },
  ka = {
    __name: 'Contacts',
    setup(t) {
      return (e, s) => {
        const n = Jt,
          a = fe
        return (
          w(),
          $('section', ga, [
            i('div', ya, [
              wa,
              i('div', $a, [
                i('div', xa, [
                  Ca,
                  Ma,
                  i('div', ja, [
                    i('div', Ea, [v(n, { name: 'clock', class: 'main-contacts__icon' }), La]),
                    Sa,
                    Oa
                  ]),
                  Ia,
                  i('div', Aa, [v(a, { class: 'main-contacts__socials' })])
                ]),
                i('div', Ta, [
                  v(
                    L(_a),
                    {
                      class: 'main-contacts__map',
                      settings: { location: { center: [39.888586, 59.223628], zoom: 15 } }
                    },
                    {
                      default: E(() => [
                        v(L(ma)),
                        v(L(pa)),
                        v(
                          L(va),
                          { settings: { position: 'right' } },
                          { default: E(() => [v(L(ba))]), _: 1 }
                        ),
                        v(
                          L(ha),
                          {
                            position: 'left-center top',
                            settings: { coordinates: [39.888586, 59.223628] }
                          },
                          {
                            default: E(() => [
                              v(n, { name: 'pin', class: 'main-contacts__map-icon' })
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      _: 1
                    }
                  )
                ])
              ])
            ])
          ])
        )
      }
    }
  },
  Pa = P(ka, [['__scopeId', 'data-v-dd1548e9']]),
  Ba = {
    __name: 'index',
    setup(t) {
      return (
        Se({
          title: '"Свой дом" оценка недвижимости',
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: 'Быстро и профессионально проведем оценку вашей недвижимости'
            }
          ]
        }),
        (e, s) => {
          const n = Fe,
            a = qe,
            o = rn,
            l = gn,
            _ = os,
            u = vs,
            c = xs,
            d = Ns,
            b = Zs,
            r = ia,
            p = Pa
          return (
            w(),
            $(
              k,
              null,
              [
                v(n),
                v(a),
                v(o, { id: 'about' }),
                v(l, { id: 'main-tile' }),
                v(_),
                v(u),
                v(c),
                v(d),
                v(b),
                v(r),
                v(p)
              ],
              64
            )
          )
        }
      )
    }
  }
export { Ba as default }
