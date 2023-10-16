import { Calendar, Day, InputValue } from "../../interfaces/Calendar";
export interface IMonthTableProps {
    value?: InputValue;
    year: number;
    month: number;
    calendar: Calendar;
    range?: boolean;
    selectedFirstRange?: Date | null;
    currentHoveredDay?: Day | null;
    min?: Date | null;
    max?: Date | null;
    onlyPickDay?: boolean;
    unequalRange?: boolean;
    monthCount?: number;
}
