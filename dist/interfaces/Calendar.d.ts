export interface Calendar {
    daysInMonth: (month: number, year: number) => number;
    firstDayInMonth: (month: number, year: number) => number;
    getDate: (year: number, month: number, day: number) => Date;
    getYear: (date: Date) => number;
    getMonth: (date: Date) => number;
    getDayInMonth: (date: Date) => number;
    getDayInWeek: (date: Date) => number;
    startDayWeek: number;
    weekdays: string[];
    weekdaysMin: string[];
    months: string[];
    currentYear: number;
    currentMonth: number;
    currentDay: number;
    isAfter: (firstDate: Date, secondDate: Date) => boolean;
    isSame: (firstDate: Date, secondDate: Date) => boolean;
    isBetween: (date: Date, firstDate: Date, secondDate: Date) => boolean;
}
export type RangeValue = {
    start: Date | null;
    end: Date | null;
};
export type InputValue = Date | RangeValue | null;
export type Day = {
    dayInMonth: number;
    dayInWeek: number;
    month: number;
    year: number;
    isSelected: boolean;
    isBetween: boolean;
    disabled: boolean;
    startRange: boolean;
    endRange: boolean;
    today: boolean;
};
export type Page = {
    year: number;
    month: number;
};
export type IsCheck = {
    [key: number]: boolean;
};
export type BaseDayInfo = Pick<Day, "dayInMonth" | "month" | "year" | "dayInWeek" | "today">;
export type SelectDayInfo = Pick<Day, "isSelected" | "startRange" | "endRange">;
