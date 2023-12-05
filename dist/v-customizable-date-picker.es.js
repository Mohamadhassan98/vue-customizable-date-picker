import { defineComponent as H, openBlock as m, createElementBlock as _, createElementVNode as k, renderSlot as y, pushScopeId as T, popScopeId as E, computed as v, Fragment as x, renderList as B, toDisplayString as q, normalizeClass as W, createVNode as N, unref as z, createTextVNode as Z, ref as R, watch as A, reactive as j, onMounted as G, withCtx as $, createBlock as J } from "vue";
const Y = (u) => (T("data-v-c2869eef"), u = u(), E(), u), K = {
  dir: "ltr",
  class: "main-header-container"
}, Q = /* @__PURE__ */ Y(() => /* @__PURE__ */ k("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 8 12",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ k("path", { d: "M7.41016 1.41L2.83016 6L7.41016 10.59L6.00016 12L0.00015614 6L6.00016 -6.16331e-08L7.41016 1.41Z" })
], -1)), U = /* @__PURE__ */ Y(() => /* @__PURE__ */ k("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 8 12",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ k("path", { d: "M0.589844 10.59L5.16984 6L0.589843 1.41L1.99984 -6.16331e-08L7.99984 6L1.99984 12L0.589844 10.59Z" })
], -1)), X = /* @__PURE__ */ H({
  __name: "MainHeader",
  emits: ["next", "prev"],
  setup(u, { emit: i }) {
    return (e, r) => (m(), _("div", K, [
      k("div", {
        class: "arrow-button next",
        onClick: r[0] || (r[0] = (D) => i("next"))
      }, [
        y(e.$slots, "header-next-button", {}, () => [
          Q
        ], !0)
      ]),
      k("div", {
        class: "arrow-button prev",
        onClick: r[1] || (r[1] = (D) => i("prev"))
      }, [
        y(e.$slots, "header-prev-button", {}, () => [
          U
        ], !0)
      ])
    ]));
  }
});
const F = (u, i) => {
  const e = u.__vccOpts || u;
  for (const [r, D] of i)
    e[r] = D;
  return e;
}, ee = /* @__PURE__ */ F(X, [["__scopeId", "data-v-c2869eef"]]), te = { class: "week-days-container" }, ae = /* @__PURE__ */ H({
  __name: "WeekHeader",
  props: {
    calendar: {}
  },
  setup(u) {
    const i = u, e = v(() => i.calendar.weekdaysMin);
    return (r, D) => (m(), _("div", te, [
      (m(!0), _(x, null, B(e.value, (d, f) => y(r.$slots, "week-day", { day: d }, () => [
        (m(), _("div", {
          key: `week-day-${f}`,
          class: "week-day-container"
        }, q(d), 1))
      ], !0)), 256))
    ]));
  }
});
const ne = /* @__PURE__ */ F(ae, [["__scopeId", "data-v-34b8b865"]]), re = { class: "month-title" }, oe = { class: "month-days-container" }, se = ["onClick", "onMouseenter"], le = /* @__PURE__ */ H({
  __name: "MonthTable",
  props: {
    value: {},
    year: {},
    month: {},
    calendar: {},
    range: { type: Boolean },
    selectedFirstRange: {},
    currentHoveredDay: {},
    min: {},
    max: {},
    onlyPickDay: { type: Boolean },
    unequalRange: { type: Boolean },
    monthCount: {}
  },
  emits: ["day-click", "day-hover", "drag", "input"],
  setup(u, { emit: i }) {
    const e = u, r = v(
      () => `${e.calendar.months[e.month]} ${e.year}`
    ), D = v(
      () => e.calendar.daysInMonth(e.month, e.year)
    ), d = v(
      () => new Array(D.value).fill(0).map((a, n) => ({
        dayInMonth: n + 1,
        month: e.month,
        year: e.year,
        dayInWeek: e.calendar.getDayInWeek(
          e.calendar.getDate(e.year, e.month, n + 1)
        ),
        today: e.calendar.isSame(
          /* @__PURE__ */ new Date(),
          e.calendar.getDate(e.year, e.month, n + 1)
        )
      }))
    ), f = v(
      () => d.value.map((a) => L(a.dayInMonth))
    ), I = v(
      () => d.value.map((a) => P(a.dayInMonth))
    ), h = v(() => d.value.map((a) => {
      const { start: n, end: l, isSelected: M } = S(a.dayInMonth);
      return {
        isSelected: M,
        startRange: n,
        endRange: l
      };
    })), c = v(() => d.value.map((a, n) => ({
      ...a,
      isSelected: h.value[n].isSelected,
      startRange: h.value[n].startRange,
      endRange: h.value[n].endRange,
      isBetween: I.value[n],
      disabled: f.value[n]
    }))), w = v(
      () => (e.calendar.firstDayInMonth(e.month, e.year) - e.calendar.startDayWeek + 7) % 7
    ), b = v(() => e.currentHoveredDay ? e.calendar.getDate(
      e.currentHoveredDay.year,
      e.currentHoveredDay.month,
      e.currentHoveredDay.dayInMonth
    ) : null), p = v(
      () => e.calendar.getDate(e.year, e.month, 1)
    ), L = (a) => {
      let n = !1, l = !1;
      return e.min && (n = e.calendar.isAfter(
        e.min,
        e.calendar.getDate(e.year, e.month, a)
      )), e.max && (l = e.calendar.isAfter(
        e.calendar.getDate(e.year, e.month, a),
        e.max
      )), n || l;
    }, P = (a) => e.range ? e.selectedFirstRange && b.value ? e.calendar.isAfter(b.value, e.selectedFirstRange) ? e.calendar.isBetween(
      e.calendar.getDate(e.year, e.month, a),
      e.selectedFirstRange,
      b.value
    ) : !1 : e.value.start && e.value.end ? e.calendar.isBetween(
      e.calendar.getDate(e.year, e.month, a),
      e.value.start,
      e.value.end
    ) : !1 : !1, S = (a) => {
      const n = e.calendar.getDate(e.year, e.month, a);
      if (e.range) {
        const l = e.value;
        if (e.selectedFirstRange) {
          const o = e.calendar.isSame(
            e.selectedFirstRange,
            n
          );
          let s = !1, g = !1;
          return b.value && (s = e.calendar.isSame(b.value, n), g = e.calendar.isAfter(
            b.value,
            e.selectedFirstRange
          )), {
            isSelected: o,
            start: g && o,
            end: g && s
          };
        }
        const M = l.start ? e.calendar.isSame(l.start, n) : !1, t = l.end ? e.calendar.isSame(l.end, n) : !1;
        return {
          isSelected: M || t,
          start: M,
          end: t
        };
      } else
        return {
          isSelected: e.calendar.isSame(e.value, n),
          start: !1,
          end: !1
        };
    }, C = (a) => {
      a.disabled || i("day-hover", a);
    }, V = (a) => {
      if (!a.disabled && (i("day-click", {
        ...a,
        year: e.year,
        month: e.month
      }), !e.onlyPickDay))
        if (e.range)
          if (e.selectedFirstRange) {
            const n = e.calendar.getDate(
              e.year,
              e.month,
              a.dayInMonth
            );
            e.calendar.isAfter(n, e.selectedFirstRange) || !e.unequalRange && e.calendar.isSame(n, e.selectedFirstRange) ? i("input", {
              start: e.selectedFirstRange,
              end: n
            }) : i("drag", n);
          } else
            i(
              "drag",
              e.calendar.getDate(e.year, e.month, a.dayInMonth)
            );
        else
          i(
            "input",
            e.calendar.getDate(e.year, e.month, a.dayInMonth)
          );
    };
    return (a, n) => (m(), _("div", {
      class: W(["month-table-container", { single: e.monthCount === 1 }])
    }, [
      y(a.$slots, "month-title", { startMonthDate: p.value }, () => [
        k("div", re, q(r.value), 1)
      ], !0),
      y(a.$slots, "week-header", {}, () => [
        N(z(ne), { calendar: a.calendar }, null, 8, ["calendar"])
      ], !0),
      k("div", oe, [
        (m(!0), _(x, null, B(w.value, (l) => (m(), _("div", {
          key: `empty-${l}`,
          class: "main-day-wrapper empty"
        }))), 128)),
        (m(!0), _(x, null, B(c.value, (l) => (m(), _("div", {
          key: l.dayInMonth,
          class: "main-day-wrapper",
          onClick: (M) => V(l),
          onMouseenter: (M) => C(l)
        }, [
          y(a.$slots, "day-container", {
            day: l,
            daysInMonth: D.value
          }, () => [
            k("div", {
              class: W(["main-day-container", {
                selected: l.isSelected,
                between: l.isBetween,
                disable: l.disabled
              }])
            }, [
              y(a.$slots, "day", { day: l }, () => [
                Z(q(l.dayInMonth), 1)
              ], !0)
            ], 2)
          ], !0)
        ], 40, se))), 128))
      ])
    ], 2));
  }
});
const ce = /* @__PURE__ */ F(le, [["__scopeId", "data-v-abb03691"]]), de = { class: "customizable-date-picker-container" }, ue = { class: "month-list" }, ie = /* @__PURE__ */ H({
  __name: "CustomizableDatePicker",
  props: {
    calendars: {},
    modelValue: {},
    monthCount: {},
    currentCalendar: {},
    range: { type: Boolean },
    onlyPick: {},
    readOnly: { type: Boolean },
    min: {},
    max: {},
    startMonthFromNow: { type: Boolean },
    trackStart: { type: Boolean },
    unequalRange: { type: Boolean }
  },
  emits: ["day-click", "day-hover", "drag", "page-change", "update:modelValue"],
  setup(u, { expose: i, emit: e }) {
    const r = u, D = v(() => r.currentCalendar ?? 0), d = v(() => r.calendars[D.value]), f = v({
      get() {
        return r.modelValue;
      },
      set(t) {
        e("update:modelValue", t);
      }
    }), I = v(() => r.monthCount ?? 1), h = R(d.value.currentYear), c = R(d.value.currentMonth);
    A(d, (t) => {
      h.value = t.currentYear, c.value = t.currentMonth;
    });
    const w = R(null), b = R(null), p = j([]);
    G(() => {
      for (let t = 0; t < I.value; t++) {
        const o = c.value + t > 11 ? h.value + 1 : h.value, s = c.value + t < 12 ? c.value + t : (c.value + t) % 12;
        p.push({ year: o, month: s });
      }
    }), A(I, (t) => {
      p.length = 0;
      for (let o = 0; o < t; o++) {
        const s = c.value + o > 11 ? h.value + 1 : h.value, g = c.value + o < 12 ? c.value + o : (c.value + o) % 12;
        p.push({ year: s, month: g });
      }
    });
    const L = () => {
      const t = p[p.length - 1], o = t.month === 11 ? t.year + 1 : t.year, s = (t.month + 1) % 12;
      return p.push({ year: o, month: s }), { year: o, month: s };
    }, P = () => {
      const t = p[0], o = t.month === 0 ? t.year - 1 : t.year, s = t.month === 0 ? 11 : t.month - 1;
      return p.unshift({ year: o, month: s }), { year: o, month: s };
    };
    A(f, () => {
      r.range && r.trackStart && !f.value.end && (w.value = f.value.start);
    });
    const S = () => {
      c.value + 1 <= 11 ? c.value++ : (c.value = 0, h.value++), e("page-change", {
        year: h.value,
        month: c.value
      });
    }, C = () => {
      c.value - 1 >= 0 ? c.value-- : (c.value = 11, h.value--), e("page-change", {
        year: h.value,
        month: c.value
      });
    }, V = (t) => {
      e("update:modelValue", {
        start: r.trackStart ? t : null,
        end: null
      }), e("drag"), w.value = t;
    }, a = (t) => {
      w.value = null, e("update:modelValue", t);
    }, n = (t) => {
      b.value = t, e(
        "day-hover",
        d.value.getDate(t.year, t.month, t.dayInMonth)
      );
    }, l = (t) => {
      e("day-click", t), M(t);
    }, M = (t) => {
      if (!r.onlyPick || !r.range)
        return;
      const o = f.value || {}, s = d.value.getDate(t.year, t.month, t.dayInMonth);
      r.onlyPick === "start" ? (o.end && d.value.isAfter(s, o.end) && (o.end = s), o.start = s) : r.onlyPick === "end" && (o.start && d.value.isAfter(o.start, s) && (o.start = s), o.end = s), e("update:modelValue", f.value);
    };
    return i({
      prev: C,
      next: S,
      appendMonth: L,
      prependMonth: P
    }), (t, o) => (m(), _("div", de, [
      N(z(ee), {
        onNext: S,
        onPrev: C
      }, {
        "header-next-button": $(() => [
          y(t.$slots, "header-next-button", {}, void 0, !0)
        ]),
        "header-prev-button": $(() => [
          y(t.$slots, "header-prev-button", {}, void 0, !0)
        ]),
        _: 3
      }),
      k("div", ue, [
        (m(!0), _(x, null, B(p, (s) => (m(), J(z(ce), {
          key: s.year.toString() + s.month.toString(),
          year: s.year,
          month: s.month,
          calendar: d.value,
          value: f.value,
          range: t.range,
          "selected-first-range": w.value,
          "current-hovered-day": b.value,
          min: r.min,
          max: r.max,
          "only-pick-day": r.range && !!r.onlyPick,
          "unequal-range": r.unequalRange,
          monthCount: I.value,
          onDayClick: l,
          onDayHover: n,
          onDrag: V,
          onInput: a
        }, {
          "month-title": $(({ startMonthDate: g }) => [
            y(t.$slots, "month-title", { startMonthDate: g }, void 0, !0)
          ]),
          "week-header": $(() => [
            y(t.$slots, "week-header", {}, void 0, !0)
          ]),
          "day-container": $(({ day: g, daysInMonth: O }) => [
            y(t.$slots, "day-container", {
              day: g,
              daysInMonth: O
            }, void 0, !0)
          ]),
          day: $(({ day: g }) => [
            y(t.$slots, "day", { day: g }, void 0, !0)
          ]),
          _: 2
        }, 1032, ["year", "month", "calendar", "value", "range", "selected-first-range", "current-hovered-day", "min", "max", "only-pick-day", "unequal-range", "monthCount"]))), 128))
      ])
    ]));
  }
});
const ve = /* @__PURE__ */ F(ie, [["__scopeId", "data-v-757e9f8a"]]), ye = {
  install: (u) => {
    u.component("VCustomizableDatePicker", ve);
  }
};
export {
  ve as CustomizableDatePicker,
  ye as default
};
