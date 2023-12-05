import { defineComponent as L, openBlock as p, createElementBlock as g, createElementVNode as f, renderSlot as y, pushScopeId as E, popScopeId as Z, computed as v, Fragment as H, renderList as F, toDisplayString as q, normalizeClass as N, createVNode as T, unref as W, createTextVNode as j, ref as B, watch as z, reactive as G, onMounted as J, withCtx as $, createBlock as K } from "vue";
const Y = (u) => (E("data-v-c2869eef"), u = u(), Z(), u), Q = {
  dir: "ltr",
  class: "main-header-container"
}, U = /* @__PURE__ */ Y(() => /* @__PURE__ */ f("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 8 12",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ f("path", { d: "M7.41016 1.41L2.83016 6L7.41016 10.59L6.00016 12L0.00015614 6L6.00016 -6.16331e-08L7.41016 1.41Z" })
], -1)), X = /* @__PURE__ */ Y(() => /* @__PURE__ */ f("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 8 12",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ f("path", { d: "M0.589844 10.59L5.16984 6L0.589843 1.41L1.99984 -6.16331e-08L7.99984 6L1.99984 12L0.589844 10.59Z" })
], -1)), ee = /* @__PURE__ */ L({
  __name: "MainHeader",
  emits: ["next", "prev"],
  setup(u, { emit: i }) {
    return (e, r) => (p(), g("div", Q, [
      f("div", {
        class: "arrow-button next",
        onClick: r[0] || (r[0] = (k) => i("next"))
      }, [
        y(e.$slots, "header-next-button", {}, () => [
          U
        ], !0)
      ]),
      f("div", {
        class: "arrow-button prev",
        onClick: r[1] || (r[1] = (k) => i("prev"))
      }, [
        y(e.$slots, "header-prev-button", {}, () => [
          X
        ], !0)
      ])
    ]));
  }
});
const P = (u, i) => {
  const e = u.__vccOpts || u;
  for (const [r, k] of i)
    e[r] = k;
  return e;
}, te = /* @__PURE__ */ P(ee, [["__scopeId", "data-v-c2869eef"]]), ae = { class: "week-days-container" }, ne = /* @__PURE__ */ L({
  __name: "WeekHeader",
  props: {
    calendar: {}
  },
  setup(u) {
    const i = u, e = v(() => i.calendar.weekdaysMin);
    return (r, k) => (p(), g("div", ae, [
      (p(!0), g(H, null, F(e.value, (d, _) => y(r.$slots, "week-day", { day: d }, () => [
        (p(), g("div", {
          key: `week-day-${_}`,
          class: "week-day-container"
        }, q(d), 1))
      ], !0)), 256))
    ]));
  }
});
const re = /* @__PURE__ */ P(ne, [["__scopeId", "data-v-34b8b865"]]), oe = { class: "month-title" }, se = { class: "month-days-container" }, le = ["onClick", "onMouseenter"], ce = /* @__PURE__ */ L({
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
    ), k = v(
      () => e.calendar.daysInMonth(e.month, e.year)
    ), d = v(
      () => new Array(k.value).fill(0).map((a, n) => ({
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
    ), _ = v(
      () => d.value.map((a) => S(a.dayInMonth))
    ), I = v(
      () => d.value.map((a) => V(a.dayInMonth))
    ), h = v(() => d.value.map((a) => {
      const { start: n, end: l, isSelected: b } = A(a.dayInMonth);
      return {
        isSelected: b,
        startRange: n,
        endRange: l
      };
    })), c = v(() => d.value.map((a, n) => ({
      ...a,
      isSelected: h.value[n].isSelected,
      startRange: h.value[n].startRange,
      endRange: h.value[n].endRange,
      isBetween: I.value[n],
      disabled: _.value[n]
    }))), w = v(
      () => (e.calendar.firstDayInMonth(e.month, e.year) - e.calendar.startDayWeek + 7) % 7
    ), D = v(() => e.currentHoveredDay ? e.calendar.getDate(
      e.currentHoveredDay.year,
      e.currentHoveredDay.month,
      e.currentHoveredDay.dayInMonth
    ) : null), m = v(
      () => e.calendar.getDate(e.year, e.month, 1)
    ), S = (a) => {
      let n = !1, l = !1;
      return e.min && (n = e.calendar.isAfter(
        e.min,
        e.calendar.getDate(e.year, e.month, a)
      )), e.max && (l = e.calendar.isAfter(
        e.calendar.getDate(e.year, e.month, a),
        e.max
      )), n || l;
    }, V = (a) => e.range ? e.selectedFirstRange && D.value ? e.calendar.isAfter(D.value, e.selectedFirstRange) ? e.calendar.isBetween(
      e.calendar.getDate(e.year, e.month, a),
      e.selectedFirstRange,
      D.value
    ) : !1 : e.value.start && e.value.end ? e.calendar.isBetween(
      e.calendar.getDate(e.year, e.month, a),
      e.value.start,
      e.value.end
    ) : !1 : !1, A = (a) => {
      const n = e.calendar.getDate(e.year, e.month, a);
      if (e.range) {
        const l = e.value;
        if (e.selectedFirstRange) {
          const t = e.calendar.isSame(
            e.selectedFirstRange,
            n
          );
          let o = !1, s = !1;
          return D.value && (o = e.calendar.isSame(D.value, n), s = e.calendar.isAfter(
            D.value,
            e.selectedFirstRange
          )), {
            isSelected: t,
            start: s && t,
            end: s && o
          };
        }
        const b = l.start ? e.calendar.isSame(l.start, n) : !1, x = l.end ? e.calendar.isSame(l.end, n) : !1;
        return {
          isSelected: b || x,
          start: b,
          end: x
        };
      } else
        return {
          isSelected: e.calendar.isSame(e.value, n),
          start: !1,
          end: !1
        };
    }, C = (a) => {
      a.disabled || i("day-hover", a);
    }, R = (a) => {
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
    return (a, n) => (p(), g("div", {
      class: N(["month-table-container", { single: e.monthCount === 1 }])
    }, [
      y(a.$slots, "month-title", { startMonthDate: m.value }, () => [
        f("div", oe, q(r.value), 1)
      ], !0),
      y(a.$slots, "week-header", {}, () => [
        T(W(re), { calendar: a.calendar }, null, 8, ["calendar"])
      ], !0),
      f("div", se, [
        (p(!0), g(H, null, F(w.value, (l) => (p(), g("div", {
          key: `empty-${l}`,
          class: "main-day-wrapper empty"
        }))), 128)),
        (p(!0), g(H, null, F(c.value, (l) => (p(), g("div", {
          key: l.dayInMonth,
          class: "main-day-wrapper",
          onClick: (b) => R(l),
          onMouseenter: (b) => C(l)
        }, [
          y(a.$slots, "day-container", {
            day: l,
            daysInMonth: k.value
          }, () => [
            f("div", {
              class: N(["main-day-container", {
                selected: l.isSelected,
                between: l.isBetween,
                disable: l.disabled
              }])
            }, [
              y(a.$slots, "day", { day: l }, () => [
                j(q(l.dayInMonth), 1)
              ], !0)
            ], 2)
          ], !0)
        ], 40, le))), 128))
      ])
    ], 2));
  }
});
const de = /* @__PURE__ */ P(ce, [["__scopeId", "data-v-abb03691"]]), ue = { class: "customizable-date-picker-container" }, ie = { class: "month-list" }, ve = /* @__PURE__ */ L({
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
    const r = u, k = v(() => r.currentCalendar ?? 0), d = v(() => r.calendars[k.value]), _ = v({
      get() {
        return r.modelValue;
      },
      set(t) {
        e("update:modelValue", t);
      }
    }), I = v(() => r.monthCount ?? 1), h = B(d.value.currentYear), c = B(d.value.currentMonth);
    z(d, (t) => {
      h.value = t.currentYear, c.value = t.currentMonth;
    });
    const w = B(null), D = B(null), m = G([]), S = () => {
      m.length = 0;
      for (let t = 0; t < I.value; t++) {
        const o = c.value + t > 11 ? h.value + 1 : h.value, s = c.value + t < 12 ? c.value + t : (c.value + t) % 12;
        m.push({ year: o, month: s });
      }
    };
    J(() => {
      S();
    }), z(I, (t) => {
      m.length = 0;
      for (let o = 0; o < t; o++) {
        const s = c.value + o > 11 ? h.value + 1 : h.value, M = c.value + o < 12 ? c.value + o : (c.value + o) % 12;
        m.push({ year: s, month: M });
      }
    });
    const V = () => {
      const t = m[m.length - 1], o = t.month === 11 ? t.year + 1 : t.year, s = (t.month + 1) % 12;
      return m.push({ year: o, month: s }), { year: o, month: s };
    }, A = () => {
      const t = m[0], o = t.month === 0 ? t.year - 1 : t.year, s = t.month === 0 ? 11 : t.month - 1;
      return m.unshift({ year: o, month: s }), { year: o, month: s };
    };
    z(_, () => {
      r.range && r.trackStart && !_.value.end && (w.value = _.value.start);
    });
    const C = () => {
      c.value + 1 <= 11 ? c.value++ : (c.value = 0, h.value++), S(), e("page-change", {
        year: h.value,
        month: c.value
      });
    }, R = () => {
      c.value - 1 >= 0 ? c.value-- : (c.value = 11, h.value--), S(), e("page-change", {
        year: h.value,
        month: c.value
      });
    }, a = (t) => {
      e("update:modelValue", {
        start: r.trackStart ? t : null,
        end: null
      }), e("drag"), w.value = t;
    }, n = (t) => {
      w.value = null, e("update:modelValue", t);
    }, l = (t) => {
      D.value = t, e(
        "day-hover",
        d.value.getDate(t.year, t.month, t.dayInMonth)
      );
    }, b = (t) => {
      e("day-click", t), x(t);
    }, x = (t) => {
      if (!r.onlyPick || !r.range)
        return;
      const o = _.value || {}, s = d.value.getDate(t.year, t.month, t.dayInMonth);
      r.onlyPick === "start" ? (o.end && d.value.isAfter(s, o.end) && (o.end = s), o.start = s) : r.onlyPick === "end" && (o.start && d.value.isAfter(o.start, s) && (o.start = s), o.end = s), e("update:modelValue", _.value);
    };
    return i({
      prev: R,
      next: C,
      appendMonth: V,
      prependMonth: A
    }), (t, o) => (p(), g("div", ue, [
      T(W(te), {
        onNext: C,
        onPrev: R
      }, {
        "header-next-button": $(() => [
          y(t.$slots, "header-next-button", {}, void 0, !0)
        ]),
        "header-prev-button": $(() => [
          y(t.$slots, "header-prev-button", {}, void 0, !0)
        ]),
        _: 3
      }),
      f("div", ie, [
        (p(!0), g(H, null, F(m, (s) => (p(), K(W(de), {
          key: s.year.toString() + s.month.toString(),
          year: s.year,
          month: s.month,
          calendar: d.value,
          value: _.value,
          range: t.range,
          "selected-first-range": w.value,
          "current-hovered-day": D.value,
          min: r.min,
          max: r.max,
          "only-pick-day": r.range && !!r.onlyPick,
          "unequal-range": r.unequalRange,
          monthCount: I.value,
          onDayClick: b,
          onDayHover: l,
          onDrag: a,
          onInput: n
        }, {
          "month-title": $(({ startMonthDate: M }) => [
            y(t.$slots, "month-title", { startMonthDate: M }, void 0, !0)
          ]),
          "week-header": $(() => [
            y(t.$slots, "week-header", {}, void 0, !0)
          ]),
          "day-container": $(({ day: M, daysInMonth: O }) => [
            y(t.$slots, "day-container", {
              day: M,
              daysInMonth: O
            }, void 0, !0)
          ]),
          day: $(({ day: M }) => [
            y(t.$slots, "day", { day: M }, void 0, !0)
          ]),
          _: 2
        }, 1032, ["year", "month", "calendar", "value", "range", "selected-first-range", "current-hovered-day", "min", "max", "only-pick-day", "unequal-range", "monthCount"]))), 128))
      ])
    ]));
  }
});
const he = /* @__PURE__ */ P(ve, [["__scopeId", "data-v-88a36ae0"]]), me = {
  install: (u) => {
    u.component("VCustomizableDatePicker", he);
  }
};
export {
  he as CustomizableDatePicker,
  me as default
};
