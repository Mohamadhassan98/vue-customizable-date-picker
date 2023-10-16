import { Page } from "../../interfaces/Calendar";
import { Calendar, Day, InputValue } from "../../interfaces/Calendar";
type TOnlyPick = "start" | "end";
export interface ICustomizableDatePickerProps {
    calendars?: Calendar[];
    modelValue?: InputValue;
    monthCount?: number;
    currentCalendar?: number;
    range?: boolean;
    onlyPick?: TOnlyPick;
    readOnly?: boolean;
    min?: Date | null;
    max?: Date | null;
    startMonthFromNow?: boolean;
    trackStart?: boolean;
    unequalRange?: boolean;
}
export interface ICustomizableDatePickerEmits {
    (e: "day-click", day: Day): void;
    (e: "day-hover", day: Date): void;
    (e: "drag"): void;
    (e: "page-change", value: Page): void;
    (e: "update:modelValue", value?: InputValue): void;
}
export {};
