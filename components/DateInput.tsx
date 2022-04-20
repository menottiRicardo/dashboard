import { format } from "date-fns";
import { SetStateAction, useState } from "react";
import { CalendarIcon } from "@heroicons/react/outline";
import { DateFormatter, DayPicker, useInput } from "react-day-picker";
import "react-day-picker/dist/style.css";

const seasonEmoji: Record<string, string> = {
  winter: "⛄️",
  spring: "🌸",
  summer: "🌻",
  autumn: "🍂",
};

const getSeason = (month: Date): string => {
  const monthNumber = month.getMonth();
  if (monthNumber >= 0 && monthNumber < 3) return "winter";
  if (monthNumber >= 3 && monthNumber < 6) return "spring";
  if (monthNumber >= 6 && monthNumber < 9) return "summer";
  else return "autumn";
};

const formatCaption: DateFormatter = (date, options) => {
  const season = getSeason(date);
  return (
    <>
      <span role="img" aria-label={season}>
        {seasonEmoji[season]}
      </span>{" "}
      {format(date, "LLLL yyyy", { locale: options?.locale })}
    </>
  );
};

interface DateInputInterface {
  selected: Date;
  _selected: React.Dispatch<SetStateAction<Date>>;
}
const DateInput = ({ selected, _selected }: DateInputInterface) => {
  const [show, setShow] = useState(false);
  const { inputProps, dayPickerProps } = useInput({
    defaultSelected: new Date(),
    fromYear: 2010,
    toYear: 2022,
    format: "PP",
  });
  return (
    <div className="justify-center flex py-2">
      <div>
        <div
          className="flex bg-white rounded-full w-full py-2 px-3 outline-none shadow-sm"
          onClick={() => setShow(!show)}
        >
          <input
            {...inputProps}
            className="bg-transparent outline-none"
          />
          <CalendarIcon className="w-5 text-primary-600" />
        </div>
        {show && (
          <div className="bg-white rounded-xl shadow-md">
            <DayPicker
              {...dayPickerProps}
              formatters={{ formatCaption }}
              mode="single"
              selected={selected}
              onSelect={_selected as any}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DateInput;
