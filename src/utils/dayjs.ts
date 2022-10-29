import dayjs, { Dayjs, UnitType } from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import timezonePlugin from "dayjs/plugin/timezone";
import updateLocale from "dayjs/plugin/updateLocale";
import utc from "dayjs/plugin/utc";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { HARDCODED_DAY_KO } from "../constants";

import "dayjs/locale/ko";

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.extend(timezonePlugin);
dayjs.extend(utc);
dayjs.extend(weekOfYear);

dayjs.updateLocale("ko", {
  weekdays: HARDCODED_DAY_KO,
  meridiem(hour: number) {
    return hour > 12 ? "오후" : "오전";
  },
});

export default dayjs;
export type { Dayjs, UnitType };
