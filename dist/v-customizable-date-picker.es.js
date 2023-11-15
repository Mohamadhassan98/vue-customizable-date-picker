import { defineComponent as H, openBlock as y, createElementBlock as p, createElementVNode as _, renderSlot as h, pushScopeId as Y, popScopeId as E, computed as v, Fragment as x, renderList as B, toDisplayString as A, normalizeClass as z, createVNode as N, unref as q, createTextVNode as Z, ref as I, watch as W, onMounted as j, withCtx as $, createBlock as G } from "vue";
const O = (d) => (Y("data-v-c2869eef"), d = d(), E(), d), J = {
  dir: "ltr",
  class: "main-header-container"
}, K = /* @__PURE__ */ O(() => /* @__PURE__ */ _("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 8 12",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ _("path", { d: "M7.41016 1.41L2.83016 6L7.41016 10.59L6.00016 12L0.00015614 6L6.00016 -6.16331e-08L7.41016 1.41Z" })
], -1)), Q = /* @__PURE__ */ O(() => /* @__PURE__ */ _("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 8 12",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ _("path", { d: "M0.589844 10.59L5.16984 6L0.589843 1.41L1.99984 -6.16331e-08L7.99984 6L1.99984 12L0.589844 10.59Z" })
], -1)), U = /* @__PURE__ */ H({
  __name: "MainHeader",
  emits: ["next", "prev"],
  setup(d, { emit: u }) {
    return (e, r) => (y(), p("div", J, [
      _("div", {
        class: "arrow-button next",
        onClick: r[0] || (r[0] = (f) => u("next"))
      }, [
        h(e.$slots, "header-next-button", {}, () => [
          K
        ], !0)
      ]),
      _("div", {
        class: "arrow-button prev",
        onClick: r[1] || (r[1] = (f) => u("prev"))
      }, [
        h(e.$slots, "header-prev-button", {}, () => [
          Q
        ], !0)
      ])
    ]));
  }
});
const F = (d, u) => {
  const e = d.__vccOpts || d;
  for (const [r, f] of u)
    e[r] = f;
  return e;
}, X = /* @__PURE__ */ F(U, [["__scopeId", "data-v-c2869eef"]]), ee = { class: "week-days-container" }, te = /* @__PURE__ */ H({
  __name: "WeekHeader",
  props: {
    calendar: {}
  },
  setup(d) {
    const u = d, e = v(() => u.calendar.weekdaysMin);
    return (r, f) => (y(), p("div", ee, [
      (y(!0), p(x, null, B(e.value, (c, g) => h(r.$slots, "week-day", { day: c }, () => [
        (y(), p("div", {
          key: `week-day-${g}`,
          class: "week-day-container"
        }, A(c), 1))
      ], !0)), 256))
    ]));
  }
});
const ae = /* @__PURE__ */ F(te, [["__scopeId", "data-v-34b8b865"]]), ne = { class: "month-title" }, re = { class: "month-days-container" }, se = ["onClick", "onMouseenter"], oe = /* @__PURE__ */ H({
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
  setup(d, { emit: u }) {
    const e = d, r = v(
      () => `${e.calendar.months[e.month]} ${e.year}`
    ), f = v(
      () => e.calendar.daysInMonth(e.month, e.year)
    ), c = v(
      () => new Array(f.value).fill(0).map((a, n) => ({
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
    ), g = v(
      () => c.value.map((a) => L(a.dayInMonth))
    ), S = v(
      () => c.value.map((a) => P(a.dayInMonth))
    ), m = v(() => c.value.map((a) => {
      const { start: n, end: s, isSelected: w } = C(a.dayInMonth);
      return {
        isSelected: w,
        startRange: n,
        endRange: s
      };
    })), i = v(() => c.value.map((a, n) => ({
      ...a,
      isSelected: m.value[n].isSelected,
      startRange: m.value[n].startRange,
      endRange: m.value[n].endRange,
      isBetween: S.value[n],
      disabled: g.value[n]
    }))), M = v(
      () => (e.calendar.firstDayInMonth(e.month, e.year) - e.calendar.startDayWeek + 7) % 7
    ), k = v(() => e.currentHoveredDay ? e.calendar.getDate(
      e.currentHoveredDay.year,
      e.currentHoveredDay.month,
      e.currentHoveredDay.dayInMonth
    ) : null), D = v(
      () => e.calendar.getDate(e.year, e.month, 1)
    ), L = (a) => {
      let n = !1, s = !1;
      return e.min && (n = e.calendar.isAfter(
        e.min,
        e.calendar.getDate(e.year, e.month, a)
      )), e.max && (s = e.calendar.isAfter(
        e.calendar.getDate(e.year, e.month, a),
        e.max
      )), n || s;
    }, P = (a) => e.range ? e.selectedFirstRange && k.value ? e.calendar.isAfter(k.value, e.selectedFirstRange) ? e.calendar.isBetween(
      e.calendar.getDate(e.year, e.month, a),
      e.selectedFirstRange,
      k.value
    ) : !1 : e.value.start && e.value.end ? e.calendar.isBetween(
      e.calendar.getDate(e.year, e.month, a),
      e.value.start,
      e.value.end
    ) : !1 : !1, C = (a) => {
      const n = e.calendar.getDate(e.year, e.month, a);
      if (e.range) {
        const s = e.value;
        if (e.selectedFirstRange) {
          const l = e.calendar.isSame(
            e.selectedFirstRange,
            n
          );
          let o = !1, b = !1;
          return k.value && (o = e.calendar.isSame(k.value, n), b = e.calendar.isAfter(
            k.value,
            e.selectedFirstRange
          )), {
            isSelected: l,
            start: b && l,
            end: b && o
          };
        }
        const w = s.start ? e.calendar.isSame(s.start, n) : !1, t = s.end ? e.calendar.isSame(s.end, n) : !1;
        return {
          isSelected: w || t,
          start: w,
          end: t
        };
      } else
        return {
          isSelected: e.calendar.isSame(e.value, n),
          start: !1,
          end: !1
        };
    }, R = (a) => {
      a.disabled || u("day-hover", a);
    }, V = (a) => {
      if (!a.disabled && (u("day-click", {
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
            e.calendar.isAfter(n, e.selectedFirstRange) || !e.unequalRange && e.calendar.isSame(n, e.selectedFirstRange) ? u("input", {
              start: e.selectedFirstRange,
              end: n
            }) : u("drag", n);
          } else
            u(
              "drag",
              e.calendar.getDate(e.year, e.month, a.dayInMonth)
            );
        else
          u(
            "input",
            e.calendar.getDate(e.year, e.month, a.dayInMonth)
          );
    };
    return (a, n) => (y(), p("div", {
      class: z(["month-table-container", { single: e.monthCount === 1 }])
    }, [
      h(a.$slots, "month-title", { startMonthDate: D.value }, () => [
        _("div", ne, A(r.value), 1)
      ], !0),
      h(a.$slots, "week-header", {}, () => [
        N(q(ae), { calendar: a.calendar }, null, 8, ["calendar"])
      ], !0),
      _("div", re, [
        (y(!0), p(x, null, B(M.value, (s) => (y(), p("div", {
          key: `empty-${s}`,
          class: "main-day-wrapper empty"
        }))), 128)),
        (y(!0), p(x, null, B(i.value, (s) => (y(), p("div", {
          key: s.dayInMonth,
          class: "main-day-wrapper",
          onClick: (w) => V(s),
          onMouseenter: (w) => R(s)
        }, [
          h(a.$slots, "day-container", {
            day: s,
            daysInMonth: f.value
          }, () => [
            _("div", {
              class: z(["main-day-container", {
                selected: s.isSelected,
                between: s.isBetween,
                disable: s.disabled
              }])
            }, [
              h(a.$slots, "day", { day: s }, () => [
                Z(A(s.dayInMonth), 1)
              ], !0)
            ], 2)
          ], !0)
        ], 40, se))), 128))
      ])
    ], 2));
  }
});
const le = /* @__PURE__ */ F(oe, [["__scopeId", "data-v-abb03691"]]), ce = { class: "customizable-date-picker-container" }, de = { class: "month-list" }, ue = /* @__PURE__ */ H({
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
  setup(d, { expose: u, emit: e }) {
    const r = d, f = v(() => r.currentCalendar ?? 0), c = v(() => r.calendars[f.value]), g = v({
      get() {
        return r.modelValue;
      },
      set(t) {
        e("update:modelValue", t);
      }
    }), S = v(() => r.monthCount ?? 1), m = I(c.value.currentYear), i = I(c.value.currentMonth);
    W(c, (t) => {
      m.value = t.currentYear, i.value = t.currentMonth;
    });
    const M = I(null), k = I(null), D = I([]);
    j(() => {
      for (let t = 0; t < S.value; t++) {
        const l = i.value + t > 11 ? m.value + 1 : m.value, o = i.value + t < 12 ? i.value + t : (i.value + t) % 12;
        D.value.push({ year: l, month: o });
      }
    });
    const L = () => {
      const t = D.value[D.value.length - 1], l = t.month === 11 ? t.year + 1 : t.year, o = (t.month + 1) % 12;
      D.value.push({ year: l, month: o });
    }, P = () => {
      const t = D.value[0], l = t.month === 0 ? t.year - 1 : t.year, o = t.month === 0 ? 11 : t.month - 1;
      D.value.unshift({ year: l, month: o });
    };
    W(g, () => {
      r.range && r.trackStart && !g.value.end && (M.value = g.value.start);
    });
    const C = () => {
      i.value + 1 <= 11 ? i.value++ : (i.value = 0, m.value++), e("page-change", {
        year: m.value,
        month: i.value
      });
    }, R = () => {
      i.value - 1 >= 0 ? i.value-- : (i.value = 11, m.value--), e("page-change", {
        year: m.value,
        month: i.value
      });
    }, V = (t) => {
      e("update:modelValue", {
        start: r.trackStart ? t : null,
        end: null
      }), e("drag"), M.value = t;
    }, a = (t) => {
      M.value = null, e("update:modelValue", t);
    }, n = (t) => {
      k.value = t, e(
        "day-hover",
        c.value.getDate(t.year, t.month, t.dayInMonth)
      );
    }, s = (t) => {
      e("day-click", t), w(t);
    }, w = (t) => {
      if (!r.onlyPick || !r.range)
        return;
      const l = g.value || {}, o = c.value.getDate(t.year, t.month, t.dayInMonth);
      r.onlyPick === "start" ? (l.end && c.value.isAfter(o, l.end) && (l.end = o), l.start = o) : r.onlyPick === "end" && (l.start && c.value.isAfter(l.start, o) && (l.start = o), l.end = o), e("update:modelValue", g.value);
    };
    return u({
      prev: R,
      next: C,
      appendMonth: L,
      prependMonth: P
    }), (t, l) => (y(), p("div", ce, [
      N(q(X), {
        onNext: C,
        onPrev: R
      }, {
        "header-next-button": $(() => [
          h(t.$slots, "header-next-button", {}, void 0, !0)
        ]),
        "header-prev-button": $(() => [
          h(t.$slots, "header-prev-button", {}, void 0, !0)
        ]),
        _: 3
      }),
      _("div", de, [
        (y(!0), p(x, null, B(D.value, (o) => (y(), G(q(le), {
          key: o.year.toString() + o.month.toString(),
          year: o.year,
          month: o.month,
          calendar: c.value,
          value: g.value,
          range: t.range,
          "selected-first-range": M.value,
          "current-hovered-day": k.value,
          min: r.min,
          max: r.max,
          "only-pick-day": r.range && !!r.onlyPick,
          "unequal-range": r.unequalRange,
          monthCount: S.value,
          onDayClick: s,
          onDayHover: n,
          onDrag: V,
          onInput: a
        }, {
          "month-title": $(({ startMonthDate: b }) => [
            h(t.$slots, "month-title", { startMonthDate: b }, void 0, !0)
          ]),
          "week-header": $(() => [
            h(t.$slots, "week-header", {}, void 0, !0)
          ]),
          "day-container": $(({ day: b, daysInMonth: T }) => [
            h(t.$slots, "day-container", {
              day: b,
              daysInMonth: T
            }, void 0, !0)
          ]),
          day: $(({ day: b }) => [
            h(t.$slots, "day", { day: b }, void 0, !0)
          ]),
          _: 2
        }, 1032, ["year", "month", "calendar", "value", "range", "selected-first-range", "current-hovered-day", "min", "max", "only-pick-day", "unequal-range", "monthCount"]))), 128))
      ])
    ]));
  }
});
const ie = /* @__PURE__ */ F(ue, [["__scopeId", "data-v-4efdf432"]]), he = {
  install: (d) => {
    d.component("VCustomizableDatePicker", ie);
  }
};
export {
  ie as CustomizableDatePicker,
  he as default
};
