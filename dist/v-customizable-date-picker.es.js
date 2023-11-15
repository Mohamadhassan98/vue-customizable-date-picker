import { defineComponent as H, openBlock as m, createElementBlock as g, createElementVNode as k, renderSlot as y, pushScopeId as T, popScopeId as E, computed as v, Fragment as x, renderList as B, toDisplayString as z, normalizeClass as N, createVNode as Y, unref as W, createTextVNode as Z, ref as S, watch as q, onMounted as j, withCtx as $, createBlock as G } from "vue";
const O = (u) => (T("data-v-c2869eef"), u = u(), E(), u), J = {
  dir: "ltr",
  class: "main-header-container"
}, K = /* @__PURE__ */ O(() => /* @__PURE__ */ k("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 8 12",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ k("path", { d: "M7.41016 1.41L2.83016 6L7.41016 10.59L6.00016 12L0.00015614 6L6.00016 -6.16331e-08L7.41016 1.41Z" })
], -1)), Q = /* @__PURE__ */ O(() => /* @__PURE__ */ k("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 8 12",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ k("path", { d: "M0.589844 10.59L5.16984 6L0.589843 1.41L1.99984 -6.16331e-08L7.99984 6L1.99984 12L0.589844 10.59Z" })
], -1)), U = /* @__PURE__ */ H({
  __name: "MainHeader",
  emits: ["next", "prev"],
  setup(u, { emit: i }) {
    return (e, o) => (m(), g("div", J, [
      k("div", {
        class: "arrow-button next",
        onClick: o[0] || (o[0] = (D) => i("next"))
      }, [
        y(e.$slots, "header-next-button", {}, () => [
          K
        ], !0)
      ]),
      k("div", {
        class: "arrow-button prev",
        onClick: o[1] || (o[1] = (D) => i("prev"))
      }, [
        y(e.$slots, "header-prev-button", {}, () => [
          Q
        ], !0)
      ])
    ]));
  }
});
const F = (u, i) => {
  const e = u.__vccOpts || u;
  for (const [o, D] of i)
    e[o] = D;
  return e;
}, X = /* @__PURE__ */ F(U, [["__scopeId", "data-v-c2869eef"]]), ee = { class: "week-days-container" }, te = /* @__PURE__ */ H({
  __name: "WeekHeader",
  props: {
    calendar: {}
  },
  setup(u) {
    const i = u, e = v(() => i.calendar.weekdaysMin);
    return (o, D) => (m(), g("div", ee, [
      (m(!0), g(x, null, B(e.value, (d, _) => y(o.$slots, "week-day", { day: d }, () => [
        (m(), g("div", {
          key: `week-day-${_}`,
          class: "week-day-container"
        }, z(d), 1))
      ], !0)), 256))
    ]));
  }
});
const ae = /* @__PURE__ */ F(te, [["__scopeId", "data-v-34b8b865"]]), ne = { class: "month-title" }, re = { class: "month-days-container" }, oe = ["onClick", "onMouseenter"], se = /* @__PURE__ */ H({
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
    const e = u, o = v(
      () => `${e.calendar.months[e.month]} ${e.year}`
    ), D = v(
      () => e.calendar.daysInMonth(e.month, e.year)
    ), d = v(
      () => new Array(D.value).fill(0).map((a, r) => ({
        dayInMonth: r + 1,
        month: e.month,
        year: e.year,
        dayInWeek: e.calendar.getDayInWeek(
          e.calendar.getDate(e.year, e.month, r + 1)
        ),
        today: e.calendar.isSame(
          /* @__PURE__ */ new Date(),
          e.calendar.getDate(e.year, e.month, r + 1)
        )
      }))
    ), _ = v(
      () => d.value.map((a) => L(a.dayInMonth))
    ), I = v(
      () => d.value.map((a) => P(a.dayInMonth))
    ), h = v(() => d.value.map((a) => {
      const { start: r, end: s, isSelected: M } = C(a.dayInMonth);
      return {
        isSelected: M,
        startRange: r,
        endRange: s
      };
    })), c = v(() => d.value.map((a, r) => ({
      ...a,
      isSelected: h.value[r].isSelected,
      startRange: h.value[r].startRange,
      endRange: h.value[r].endRange,
      isBetween: I.value[r],
      disabled: _.value[r]
    }))), w = v(
      () => (e.calendar.firstDayInMonth(e.month, e.year) - e.calendar.startDayWeek + 7) % 7
    ), b = v(() => e.currentHoveredDay ? e.calendar.getDate(
      e.currentHoveredDay.year,
      e.currentHoveredDay.month,
      e.currentHoveredDay.dayInMonth
    ) : null), f = v(
      () => e.calendar.getDate(e.year, e.month, 1)
    ), L = (a) => {
      let r = !1, s = !1;
      return e.min && (r = e.calendar.isAfter(
        e.min,
        e.calendar.getDate(e.year, e.month, a)
      )), e.max && (s = e.calendar.isAfter(
        e.calendar.getDate(e.year, e.month, a),
        e.max
      )), r || s;
    }, P = (a) => e.range ? e.selectedFirstRange && b.value ? e.calendar.isAfter(b.value, e.selectedFirstRange) ? e.calendar.isBetween(
      e.calendar.getDate(e.year, e.month, a),
      e.selectedFirstRange,
      b.value
    ) : !1 : e.value.start && e.value.end ? e.calendar.isBetween(
      e.calendar.getDate(e.year, e.month, a),
      e.value.start,
      e.value.end
    ) : !1 : !1, C = (a) => {
      const r = e.calendar.getDate(e.year, e.month, a);
      if (e.range) {
        const s = e.value;
        if (e.selectedFirstRange) {
          const l = e.calendar.isSame(
            e.selectedFirstRange,
            r
          );
          let n = !1, p = !1;
          return b.value && (n = e.calendar.isSame(b.value, r), p = e.calendar.isAfter(
            b.value,
            e.selectedFirstRange
          )), {
            isSelected: l,
            start: p && l,
            end: p && n
          };
        }
        const M = s.start ? e.calendar.isSame(s.start, r) : !1, t = s.end ? e.calendar.isSame(s.end, r) : !1;
        return {
          isSelected: M || t,
          start: M,
          end: t
        };
      } else
        return {
          isSelected: e.calendar.isSame(e.value, r),
          start: !1,
          end: !1
        };
    }, R = (a) => {
      a.disabled || i("day-hover", a);
    }, V = (a) => {
      if (!a.disabled && (i("day-click", {
        ...a,
        year: e.year,
        month: e.month
      }), !e.onlyPickDay))
        if (e.range)
          if (e.selectedFirstRange) {
            const r = e.calendar.getDate(
              e.year,
              e.month,
              a.dayInMonth
            );
            e.calendar.isAfter(r, e.selectedFirstRange) || !e.unequalRange && e.calendar.isSame(r, e.selectedFirstRange) ? i("input", {
              start: e.selectedFirstRange,
              end: r
            }) : i("drag", r);
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
    return (a, r) => (m(), g("div", {
      class: N(["month-table-container", { single: e.monthCount === 1 }])
    }, [
      y(a.$slots, "month-title", { startMonthDate: f.value }, () => [
        k("div", ne, z(o.value), 1)
      ], !0),
      y(a.$slots, "week-header", {}, () => [
        Y(W(ae), { calendar: a.calendar }, null, 8, ["calendar"])
      ], !0),
      k("div", re, [
        (m(!0), g(x, null, B(w.value, (s) => (m(), g("div", {
          key: `empty-${s}`,
          class: "main-day-wrapper empty"
        }))), 128)),
        (m(!0), g(x, null, B(c.value, (s) => (m(), g("div", {
          key: s.dayInMonth,
          class: "main-day-wrapper",
          onClick: (M) => V(s),
          onMouseenter: (M) => R(s)
        }, [
          y(a.$slots, "day-container", {
            day: s,
            daysInMonth: D.value
          }, () => [
            k("div", {
              class: N(["main-day-container", {
                selected: s.isSelected,
                between: s.isBetween,
                disable: s.disabled
              }])
            }, [
              y(a.$slots, "day", { day: s }, () => [
                Z(z(s.dayInMonth), 1)
              ], !0)
            ], 2)
          ], !0)
        ], 40, oe))), 128))
      ])
    ], 2));
  }
});
const le = /* @__PURE__ */ F(se, [["__scopeId", "data-v-abb03691"]]), ce = { class: "customizable-date-picker-container" }, de = { class: "month-list" }, ue = /* @__PURE__ */ H({
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
    const o = u, D = v(() => o.currentCalendar ?? 0), d = v(() => o.calendars[D.value]), _ = v({
      get() {
        return o.modelValue;
      },
      set(t) {
        e("update:modelValue", t);
      }
    }), I = v(() => o.monthCount ?? 1), h = S(d.value.currentYear), c = S(d.value.currentMonth);
    q(d, (t) => {
      h.value = t.currentYear, c.value = t.currentMonth;
    });
    const w = S(null), b = S(null), f = S([]);
    j(() => {
      for (let t = 0; t < I.value; t++) {
        const l = c.value + t > 11 ? h.value + 1 : h.value, n = c.value + t < 12 ? c.value + t : (c.value + t) % 12;
        f.value.push({ year: l, month: n });
      }
    }), q(I, (t) => {
      const l = [];
      for (let n = 0; n < t; n++) {
        const p = c.value + n > 11 ? h.value + 1 : h.value, A = c.value + n < 12 ? c.value + n : (c.value + n) % 12;
        l.push({ year: p, month: A });
      }
      f.value = l;
    });
    const L = () => {
      const t = f.value[f.value.length - 1], l = t.month === 11 ? t.year + 1 : t.year, n = (t.month + 1) % 12;
      return f.value.push({ year: l, month: n }), { year: l, month: n };
    }, P = () => {
      const t = f.value[0], l = t.month === 0 ? t.year - 1 : t.year, n = t.month === 0 ? 11 : t.month - 1;
      return f.value.unshift({ year: l, month: n }), { year: l, month: n };
    };
    q(_, () => {
      o.range && o.trackStart && !_.value.end && (w.value = _.value.start);
    });
    const C = () => {
      c.value + 1 <= 11 ? c.value++ : (c.value = 0, h.value++), e("page-change", {
        year: h.value,
        month: c.value
      });
    }, R = () => {
      c.value - 1 >= 0 ? c.value-- : (c.value = 11, h.value--), e("page-change", {
        year: h.value,
        month: c.value
      });
    }, V = (t) => {
      e("update:modelValue", {
        start: o.trackStart ? t : null,
        end: null
      }), e("drag"), w.value = t;
    }, a = (t) => {
      w.value = null, e("update:modelValue", t);
    }, r = (t) => {
      b.value = t, e(
        "day-hover",
        d.value.getDate(t.year, t.month, t.dayInMonth)
      );
    }, s = (t) => {
      e("day-click", t), M(t);
    }, M = (t) => {
      if (!o.onlyPick || !o.range)
        return;
      const l = _.value || {}, n = d.value.getDate(t.year, t.month, t.dayInMonth);
      o.onlyPick === "start" ? (l.end && d.value.isAfter(n, l.end) && (l.end = n), l.start = n) : o.onlyPick === "end" && (l.start && d.value.isAfter(l.start, n) && (l.start = n), l.end = n), e("update:modelValue", _.value);
    };
    return i({
      prev: R,
      next: C,
      appendMonth: L,
      prependMonth: P
    }), (t, l) => (m(), g("div", ce, [
      Y(W(X), {
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
      k("div", de, [
        (m(!0), g(x, null, B(f.value, (n) => (m(), G(W(le), {
          key: n.year.toString() + n.month.toString(),
          year: n.year,
          month: n.month,
          calendar: d.value,
          value: _.value,
          range: t.range,
          "selected-first-range": w.value,
          "current-hovered-day": b.value,
          min: o.min,
          max: o.max,
          "only-pick-day": o.range && !!o.onlyPick,
          "unequal-range": o.unequalRange,
          monthCount: I.value,
          onDayClick: s,
          onDayHover: r,
          onDrag: V,
          onInput: a
        }, {
          "month-title": $(({ startMonthDate: p }) => [
            y(t.$slots, "month-title", { startMonthDate: p }, void 0, !0)
          ]),
          "week-header": $(() => [
            y(t.$slots, "week-header", {}, void 0, !0)
          ]),
          "day-container": $(({ day: p, daysInMonth: A }) => [
            y(t.$slots, "day-container", {
              day: p,
              daysInMonth: A
            }, void 0, !0)
          ]),
          day: $(({ day: p }) => [
            y(t.$slots, "day", { day: p }, void 0, !0)
          ]),
          _: 2
        }, 1032, ["year", "month", "calendar", "value", "range", "selected-first-range", "current-hovered-day", "min", "max", "only-pick-day", "unequal-range", "monthCount"]))), 128))
      ])
    ]));
  }
});
const ie = /* @__PURE__ */ F(ue, [["__scopeId", "data-v-10f42a99"]]), he = {
  install: (u) => {
    u.component("VCustomizableDatePicker", ie);
  }
};
export {
  ie as CustomizableDatePicker,
  he as default
};
