import { dateState, DateInfoTypes } from "../constants";
import dayjs from "./dayjs";

export function getMonthTable(currentYear: number, firstDayOfCurMonth: number) {
  const firstDayOfWeekCurMonth = dayjs(
    new Date(currentYear, firstDayOfCurMonth, 1)
  ).day();

  const lastDateOfCurMonth = dayjs(
    new Date(currentYear, firstDayOfCurMonth + 1, 0)
  ).date();

  let offsetFromFirstDate = 0 - firstDayOfWeekCurMonth;

  const monthTable = new Array(6)
    .fill(null)
    .map(() => {
      return new Array(7).fill(null).map(() => {
        offsetFromFirstDate++;

        if (offsetFromFirstDate < 1) {
          return {
            state: dateState.prevMonthDate,
            details: dayjs(
              new Date(currentYear, firstDayOfCurMonth, offsetFromFirstDate)
            ),
          };
        }

        if (offsetFromFirstDate > lastDateOfCurMonth) {
          return {
            state: dateState.nextMonthDate,
            details: dayjs(
              new Date(currentYear, firstDayOfCurMonth, offsetFromFirstDate)
            ),
          };
        }

        return {
          state: dateState.thisMonthDate,
          details: dayjs(
            new Date(currentYear, firstDayOfCurMonth, offsetFromFirstDate)
          ),
        };
      });
    })
    .filter((week: DateInfoTypes[]) => {
      const hasThisMonthDate = week.some(
        (dateInfo) => dateInfo.state === dateState.thisMonthDate
      );

      if (!hasThisMonthDate) {
        return week.map((dateInfo) => {
          dateInfo.state = dateState.nextMonthDateOutOfThisMonthWeek;
          return dateInfo;
        });
      }

      return week;
    });

  return monthTable;
}
