declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    calendar: {
        type: import("vue").PropType<import("../../build").Calendar>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    calendar: {
        type: import("vue").PropType<import("../../build").Calendar>;
        required: true;
    };
}>>, {}, {}>, {
    "week-day"?(_: {
        day: string;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
