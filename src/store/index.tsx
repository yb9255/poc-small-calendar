import React, {
  useState,
  useEffect,
  createContext,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react";

import dayjs from "../utils/dayjs";
interface dateContextTypes {
  firstDayOfCurMonth: string;
  today: string;
  selectedDay: string | null;
  setFirstDayOfCurMonth: Dispatch<SetStateAction<string>>;
  setToday: Dispatch<SetStateAction<string>>;
  setSelectedDay: Dispatch<SetStateAction<string | null>>;
}

const DateContext = createContext<dateContextTypes>({
  firstDayOfCurMonth: "",
  today: "",
  selectedDay: null,
  setFirstDayOfCurMonth: () => {},
  setToday: () => {},
  setSelectedDay: () => {},
});

export function DateContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [firstDayOfCurMonth, setFirstDayOfCurMonth] = useState("");
  const [today, setToday] = useState("");
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  useEffect(() => {
    const date = new Date();

    setFirstDayOfCurMonth(
      dayjs(new Date(date.getFullYear(), date.getMonth(), 1, 0, 0)).format()
    );

    setToday(dayjs(date.setHours(0, 0, 0, 0)).format());
  }, []);

  const value = useMemo(
    () => ({
      firstDayOfCurMonth,
      today,
      selectedDay,
      setFirstDayOfCurMonth,
      setToday,
      setSelectedDay,
    }),
    [firstDayOfCurMonth, today, selectedDay]
  );

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
}

export default DateContext;
