import React, {
  useState,
  createContext,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react";

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
