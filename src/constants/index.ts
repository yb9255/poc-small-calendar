import { Dayjs } from "dayjs";

export const dateState = {
  prevMonthDate: "prev-month-date",
  thisMonthDate: "this-month-date",
  nextMonthDate: "next-month-date",
  nextMonthDateOutOfThisMonthWeek: "next-month-date-out-of-this-month-week",
} as const;

export interface DateInfoTypes {
  state: typeof dateState[keyof typeof dateState];
  details: Dayjs;
}

export const HARDCODED_DAY_KO = ["일", "월", "화", "수", "목", "금", "토"];

export const DAY_OF_WEEK_TABLE = [
  "SUN",
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRI",
  "SAT",
];
