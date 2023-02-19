import dayjs, { Dayjs } from "dayjs";

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

export const DUMMY_BOOKING_DATA = [
  {
    date: dayjs("2022-11-1").format(),
    bookingList: [
      {
        time: dayjs(new Date(2022, 10, 1, 10)).format(),
        title: "title1",
        booked: true,
        duration: 15,
      },
      {
        time: dayjs(new Date(2022, 10, 1, 21)).format(),
        title: "title2",
        booked: false,
        duration: 15,
      },
    ],
  },
  {
    date: dayjs("2022-10-4").format(),
    bookingList: [
      {
        time: dayjs(new Date(2022, 9, 4, 10)).format(),
        title: "title1",
        booked: false,
        duration: 15,
      },
      {
        time: dayjs(new Date(2022, 9, 4, 15, 30)).format(),
        title: "title2",
        booked: false,
        duration: 15,
      },
      {
        time: dayjs(new Date(2022, 9, 4, 21)).format(),
        title: "title3",
        booked: false,
        duration: 15,
      },
    ],
  },
  {
    date: dayjs("2023-1-1").format(),
    bookingList: [
      {
        time: dayjs(new Date(2023, 0, 1, 5)).format(),
        title: "title1",
        booked: true,
        duration: 15,
      },
      {
        time: dayjs(new Date(2023, 0, 1, 8)).format(),
        title: "title2",
        booked: true,
        duration: 15,
      },
    ],
  },
  {
    date: dayjs("2021-12-1").format(),
    bookingList: [
      {
        time: dayjs(new Date(2021, 11, 1, 22)).format(),
        title: "title1",
        booked: false,
        duration: 15,
      },
      {
        time: dayjs(new Date(2021, 11, 1, 23)).format(),
        title: "title2",
        booked: false,
        duration: 15,
      },
    ],
  },
];
