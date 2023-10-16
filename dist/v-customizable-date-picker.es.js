import { defineComponent as x, openBlock as h, createElementBlock as m, createElementVNode as g, renderSlot as v, pushScopeId as T, popScopeId as Y, computed as d, Fragment as C, renderList as R, toDisplayString as A, normalizeClass as z, createVNode as N, unref as q, createTextVNode as E, ref as S, watch as W, withCtx as w, createBlock as Z } from "vue";
const O = (c) => (T("data-v-b6f7e2e1"), c = c(), Y(), c), j = {
  dir: "ltr",
  class: "main-header-container"
}, G = /* @__PURE__ */ O(() => /* @__PURE__ */ g("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 8 12",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ g("path", { d: "M7.41016 1.41L2.83016 6L7.41016 10.59L6.00016 12L0.00015614 6L6.00016 -6.16331e-08L7.41016 1.41Z" })
], -1)), J = /* @__PURE__ */ O(() => /* @__PURE__ */ g("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 8 12",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ g("path", { d: "M0.589844 10.59L5.16984 6L0.589843 1.41L1.99984 -6.16331e-08L7.99984 6L1.99984 12L0.589844 10.59Z" })
], -1)), K = /* @__PURE__ */ x({
  __name: "MainHeader",
  emits: ["next", "prev"],
  setup(c, { emit: u }) {
    return (e, r) => (h(), m("div", j, [
      g("div", {
        class: "arrow-button next",
        onClick: r[0] || (r[0] = (f) => u("next"))
      }, [
        v(e.$slots, "header-next-button", {}, () => [
          G
        ], !0)
      ]),
      g("div", {
        class: "arrow-button prev",
        onClick: r[1] || (r[1] = (f) => u("prev"))
      }, [
        v(e.$slots, "header-prev-button", {}, () => [
          J
        ], !0)
      ])
    ]));
  }
});
const B = (c, u) => {
  const e = c.__vccOpts || c;
  for (const [r, f] of u)
    e[r] = f;
  return e;
}, Q = /* @__PURE__ */ B(K, [["__scopeId", "data-v-b6f7e2e1"]]), U = { class: "week-days-container" }, X = /* @__PURE__ */ x({
  __name: "WeekHeader",
  props: {
    calendar: {}
  },
  setup(c) {
    const u = c, e = d(() => u.calendar.weekdaysMin);
    return (r, f) => (h(), m("div", U, [
      (h(!0), m(C, null, R(e.value, (l, p) => v(r.$slots, "week-day", { day: l }, () => [
        (h(), m("div", {
          key: `week-day-${p}`,
          class: "week-day-container"
        }, A(l), 1))
      ], !0)), 256))
    ]));
  }
});
const ee = /* @__PURE__ */ B(X, [["__scopeId", "data-v-c8a79ea0"]]), ae = { class: "month-title" }, te = { class: "month-days-container" }, ne = ["onClick", "onMouseenter"], re = /* @__PURE__ */ x({
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
  setup(c, { emit: u }) {
    const e = c, r = d(
      () => `${e.calendar.months[e.month]} ${e.year}`
    ), f = d(
      () => e.calendar.daysInMonth(e.month, e.year)
    ), l = d(
      () => new Array(f.value).fill(0).map((t, n) => ({
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
    ), p = d(
      () => l.value.map((t) => b(t.dayInMonth))
    ), M = d(
      () => l.value.map((t) => $(t.dayInMonth))
    ), y = d(() => l.value.map((t) => {
      const { start: n, end: a, isSelected: s } = F(t.dayInMonth);
      return {
        isSelected: s,
        startRange: n,
        endRange: a
      };
    })), i = d(() => l.value.map((t, n) => ({
      ...t,
      isSelected: y.value[n].isSelected,
      startRange: y.value[n].startRange,
      endRange: y.value[n].endRange,
      isBetween: M.value[n],
      disabled: p.value[n]
    }))), D = d(
      () => (e.calendar.firstDayInMonth(e.month, e.year) - e.calendar.startDayWeek + 7) % 7
    ), k = d(() => e.currentHoveredDay ? e.calendar.getDate(
      e.currentHoveredDay.year,
      e.currentHoveredDay.month,
      e.currentHoveredDay.dayInMonth
    ) : null), H = d(
      () => e.calendar.getDate(e.year, e.month, 1)
    ), b = (t) => {
      let n = !1, a = !1;
      return e.min && (n = e.calendar.isAfter(
        e.min,
        e.calendar.getDate(e.year, e.month, t)
      )), e.max && (a = e.calendar.isAfter(
        e.calendar.getDate(e.year, e.month, t),
        e.max
      )), n || a;
    }, $ = (t) => e.range ? e.selectedFirstRange && k.value ? e.calendar.isAfter(k.value, e.selectedFirstRange) ? e.calendar.isBetween(
      e.calendar.getDate(e.year, e.month, t),
      e.selectedFirstRange,
      k.value
    ) : !1 : e.value.start && e.value.end ? e.calendar.isBetween(
      e.calendar.getDate(e.year, e.month, t),
      e.value.start,
      e.value.end
    ) : !1 : !1, F = (t) => {
      const n = e.calendar.getDate(e.year, e.month, t);
      if (e.range) {
        const a = e.value;
        if (e.selectedFirstRange) {
          const _ = e.calendar.isSame(
            e.selectedFirstRange,
            n
          );
          let I = !1, V = !1;
          return k.value && (I = e.calendar.isSame(k.value, n), V = e.calendar.isAfter(
            k.value,
            e.selectedFirstRange
          )), {
            isSelected: _,
            start: V && _,
            end: V && I
          };
        }
        const s = a.start ? e.calendar.isSame(a.start, n) : !1, o = a.end ? e.calendar.isSame(a.end, n) : !1;
        return {
          isSelected: s || o,
          start: s,
          end: o
        };
      } else
        return {
          isSelected: e.calendar.isSame(e.value, n),
          start: !1,
          end: !1
        };
    }, L = (t) => {
      t.disabled || u("day-hover", t);
    }, P = (t) => {
      if (!t.disabled && (u("day-click", {
        ...t,
        year: e.year,
        month: e.month
      }), !e.onlyPickDay))
        if (e.range)
          if (e.selectedFirstRange) {
            const n = e.calendar.getDate(
              e.year,
              e.month,
              t.dayInMonth
            );
            e.calendar.isAfter(n, e.selectedFirstRange) || !e.unequalRange && e.calendar.isSame(n, e.selectedFirstRange) ? u("input", {
              start: e.selectedFirstRange,
              end: n
            }) : u("drag", n);
          } else
            u(
              "drag",
              e.calendar.getDate(e.year, e.month, t.dayInMonth)
            );
        else
          u(
            "input",
            e.calendar.getDate(e.year, e.month, t.dayInMonth)
          );
    };
    return (t, n) => (h(), m("div", {
      class: z(["month-table-container", { single: e.monthCount === 1 }])
    }, [
      v(t.$slots, "month-title", { startMonthDate: H.value }, () => [
        g("div", ae, A(r.value), 1)
      ], !0),
      v(t.$slots, "week-header", {}, () => [
        N(q(ee), { calendar: t.calendar }, null, 8, ["calendar"])
      ], !0),
      g("div", te, [
        (h(!0), m(C, null, R(D.value, (a) => (h(), m("div", {
          key: `empty-${a}`,
          class: "main-day-wrapper empty"
        }))), 128)),
        (h(!0), m(C, null, R(i.value, (a) => (h(), m("div", {
          key: a.dayInMonth,
          class: "main-day-wrapper",
          onClick: (s) => P(a),
          onMouseenter: (s) => L(a)
        }, [
          v(t.$slots, "day-container", {
            day: a,
            daysInMonth: f.value
          }, () => [
            g("div", {
              class: z(["main-day-container", {
                selected: a.isSelected,
                between: a.isBetween,
                disable: a.disabled
              }])
            }, [
              v(t.$slots, "day", { day: a }, () => [
                E(A(a.dayInMonth), 1)
              ], !0)
            ], 2)
          ], !0)
        ], 40, ne))), 128))
      ])
    ], 2));
  }
});
const se = /* @__PURE__ */ B(re, [["__scopeId", "data-v-7d225296"]]), le = { class: "customizable-date-picker-container" }, oe = { class: "month-list" }, de = /* @__PURE__ */ x({
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
  setup(c, { expose: u, emit: e }) {
    const r = c, f = d(() => r.currentCalendar ?? 0), l = d(() => r.calendars[f.value]), p = d({
      get() {
        return r.modelValue;
      },
      set(a) {
        e("update:modelValue", a);
      }
    }), M = d(() => r.monthCount ?? 1), y = S(l.value.currentYear), i = S(l.value.currentMonth);
    W(l, (a) => {
      y.value = a.currentYear, i.value = a.currentMonth;
    });
    const D = S(null), k = S(null), H = d(() => {
      let a = [];
      for (let s = 0; s < M.value; s++) {
        const o = i.value + s > 11 ? y.value + 1 : y.value, _ = i.value + s < 12 ? i.value + s : (i.value + s) % 12;
        a.push({ year: o, month: _ });
      }
      return a;
    });
    W(p, () => {
      r.range && r.trackStart && !p.value.end && (D.value = p.value.start);
    });
    const b = () => {
      i.value + 1 <= 11 ? i.value++ : (i.value = 0, y.value++), e("page-change", {
        year: y.value,
        month: i.value
      });
    }, $ = () => {
      i.value - 1 >= 0 ? i.value-- : (i.value = 11, y.value--), e("page-change", {
        year: y.value,
        month: i.value
      });
    }, F = (a) => {
      e("update:modelValue", {
        start: r.trackStart ? a : null,
        end: null
      }), e("drag"), D.value = a;
    }, L = (a) => {
      D.value = null, e("update:modelValue", a);
    }, P = (a) => {
      k.value = a, e(
        "day-hover",
        l.value.getDate(a.year, a.month, a.dayInMonth)
      );
    }, t = (a) => {
      e("day-click", a), n(a);
    }, n = (a) => {
      if (!r.onlyPick || !r.range)
        return;
      const s = p.value || {}, o = l.value.getDate(a.year, a.month, a.dayInMonth);
      r.onlyPick === "start" ? (s.end && l.value.isAfter(o, s.end) && (s.end = o), s.start = o) : r.onlyPick === "end" && (s.start && l.value.isAfter(s.start, o) && (s.start = o), s.end = o), e("update:modelValue", p.value);
    };
    return u({
      prev: $,
      next: b
    }), (a, s) => (h(), m("div", le, [
      N(q(Q), {
        onNext: b,
        onPrev: $
      }, {
        "header-next-button": w(() => [
          v(a.$slots, "header-next-button", {}, void 0, !0)
        ]),
        "header-prev-button": w(() => [
          v(a.$slots, "header-prev-button", {}, void 0, !0)
        ]),
        _: 3
      }),
      g("div", oe, [
        (h(!0), m(C, null, R(H.value, (o) => (h(), Z(q(se), {
          key: o.year.toString() + o.month.toString(),
          year: o.year,
          month: o.month,
          calendar: l.value,
          value: p.value,
          range: a.range,
          "selected-first-range": D.value,
          "current-hovered-day": k.value,
          min: r.min,
          max: r.max,
          "only-pick-day": r.range && !!r.onlyPick,
          "unequal-range": r.unequalRange,
          monthCount: M.value,
          onDayClick: t,
          onDayHover: P,
          onDrag: F,
          onInput: L
        }, {
          "month-title": w(({ startMonthDate: _ }) => [
            v(a.$slots, "month-title", { startMonthDate: _ }, void 0, !0)
          ]),
          "week-header": w(() => [
            v(a.$slots, "week-header", {}, void 0, !0)
          ]),
          "day-container": w(({ day: _, daysInMonth: I }) => [
            v(a.$slots, "day-container", {
              day: _,
              daysInMonth: I
            }, void 0, !0)
          ]),
          day: w(({ day: _ }) => [
            v(a.$slots, "day", { day: _ }, void 0, !0)
          ]),
          _: 2
        }, 1032, ["year", "month", "calendar", "value", "range", "selected-first-range", "current-hovered-day", "min", "max", "only-pick-day", "unequal-range", "monthCount"]))), 128))
      ])
    ]));
  }
});
const ce = /* @__PURE__ */ B(de, [["__scopeId", "data-v-19d2dfc2"]]), ie = {
  install: (c) => {
    c.component("VCustomizableDatePicker", ce);
  }
};
export {
  ce as CustomizableDatePicker,
  ie as default
};
