import { Day } from "../../interfaces/Calendar";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    value: {
        type: import("vue").PropType<import("../../interfaces/Calendar").InputValue>;
    };
    year: {
        type: import("vue").PropType<number>;
        required: true;
    };
    month: {
        type: import("vue").PropType<number>;
        required: true;
    };
    calendar: {
        type: import("vue").PropType<import("../../interfaces/Calendar").Calendar>;
        required: true;
    };
    range: {
        type: import("vue").PropType<boolean>;
    };
    selectedFirstRange: {
        type: import("vue").PropType<Date | null>;
    };
    currentHoveredDay: {
        type: import("vue").PropType<Day | null>;
    };
    min: {
        type: import("vue").PropType<Date | null>;
    };
    max: {
        type: import("vue").PropType<Date | null>;
    };
    onlyPickDay: {
        type: import("vue").PropType<boolean>;
    };
    unequalRange: {
        type: import("vue").PropType<boolean>;
    };
    monthCount: {
        type: import("vue").PropType<number>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "day-click" | "day-hover" | "drag")[], "input" | "day-click" | "day-hover" | "drag", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: import("vue").PropType<import("../../interfaces/Calendar").InputValue>;
    };
    year: {
        type: import("vue").PropType<number>;
        required: true;
    };
    month: {
        type: import("vue").PropType<number>;
        required: true;
    };
    calendar: {
        type: import("vue").PropType<import("../../interfaces/Calendar").Calendar>;
        required: true;
    };
    range: {
        type: import("vue").PropType<boolean>;
    };
    selectedFirstRange: {
        type: import("vue").PropType<Date | null>;
    };
    currentHoveredDay: {
        type: import("vue").PropType<Day | null>;
    };
    min: {
        type: import("vue").PropType<Date | null>;
    };
    max: {
        type: import("vue").PropType<Date | null>;
    };
    onlyPickDay: {
        type: import("vue").PropType<boolean>;
    };
    unequalRange: {
        type: import("vue").PropType<boolean>;
    };
    monthCount: {
        type: import("vue").PropType<number>;
    };
}>> & {
    onDrag?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    "onDay-click"?: ((...args: any[]) => any) | undefined;
    "onDay-hover"?: ((...args: any[]) => any) | undefined;
}, {}, {}>, {
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
