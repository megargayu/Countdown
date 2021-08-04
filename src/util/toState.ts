import { DateTime, Duration } from "luxon";

const Units: [
  keyof Pick<
    Duration,
    "weeks" | "days" | "hours" | "minutes" | "seconds" | "milliseconds"
  >,
  string
][] = [
  ["weeks", "Week(s)"],
  ["days", "Day(s)"],
  ["hours", "Hour(s)"],
  ["minutes", "Minute(s)"],
  ["seconds", "Second(s)"],
];

const toState = (date: DateTime): [string, string][] => {
  const units = date
    .diff(DateTime.now())
    .shiftTo("weeks", "days", "hours", "minutes", "seconds");

  return Units.map(([key, unit]) => {
    return [unit, Math.round(units[key]).toString().padStart(2, "0")];
  });
};

export default toState;
