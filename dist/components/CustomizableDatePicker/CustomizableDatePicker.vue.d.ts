import { Day, InputValue, Page } from "../../interfaces/Calendar";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    calendars: {
        type: import("vue").PropType<import("../../interfaces/Calendar").Calendar[]>;
    };
    modelValue: {
        type: import("vue").PropType<InputValue>;
    };
    monthCount: {
        type: import("vue").PropType<number>;
    };
    currentCalendar: {
        type: import("vue").PropType<number>;
    };
    range: {
        type: import("vue").PropType<boolean>;
    };
    onlyPick: {
        type: import("vue").PropType<"end" | "start">;
    };
    readOnly: {
        type: import("vue").PropType<boolean>;
    };
    min: {
        type: import("vue").PropType<Date | null>;
    };
    max: {
        type: import("vue").PropType<Date | null>;
    };
    startMonthFromNow: {
        type: import("vue").PropType<boolean>;
    };
    trackStart: {
        type: import("vue").PropType<boolean>;
    };
    unequalRange: {
        type: import("vue").PropType<boolean>;
    };
}, {
    prev: () => void;
    next: () => void;
    appendMonth: () => void;
    prependMonth: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "day-click": (day: Day) => void;
    "day-hover": (day: Date) => void;
    drag: () => void;
    "page-change": (value: Page) => void;
    "update:modelValue": (value?: InputValue | undefined) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    calendars: {
        type: import("vue").PropType<import("../../interfaces/Calendar").Calendar[]>;
    };
    modelValue: {
        type: import("vue").PropType<InputValue>;
    };
    monthCount: {
        type: import("vue").PropType<number>;
    };
    currentCalendar: {
        type: import("vue").PropType<number>;
    };
    range: {
        type: import("vue").PropType<boolean>;
    };
    onlyPick: {
        type: import("vue").PropType<"end" | "start">;
    };
    readOnly: {
        type: import("vue").PropType<boolean>;
    };
    min: {
        type: import("vue").PropType<Date | null>;
    };
    max: {
        type: import("vue").PropType<Date | null>;
    };
    startMonthFromNow: {
        type: import("vue").PropType<boolean>;
    };
    trackStart: {
        type: import("vue").PropType<boolean>;
    };
    unequalRange: {
        type: import("vue").PropType<boolean>;
    };
}>> & {
    onDrag?: (() => any) | undefined;
    "onDay-click"?: ((day: Day) => any) | undefined;
    "onDay-hover"?: ((day: Date) => any) | undefined;
    "onPage-change"?: ((value: Page) => any) | undefined;
    "onUpdate:modelValue"?: ((value?: InputValue | undefined) => any) | undefined;
}, {}, {}>, {
    "header-next-button"?(_: {}): any;
    "header-prev-button"?(_: {}): any;
    "month-title"?(_: {
        startMonthDate: Date;
    }): any;
    "week-header"?(_: {}): any;
    "day-container"?(_: {
        day: Day;
        daysInMonth: number;
    }): any;
    day?(_: {
        day: Day;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
