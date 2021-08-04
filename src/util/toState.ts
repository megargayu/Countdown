import { DateTime } from "luxon";
import extractUnits from "./extractUnits";

const Units = ["Week(s)", "Day(s)", "Hour(s)", "Minute(s)", "Second(s)"];

const toState = (date: DateTime): [string, string][] => {
  const units = extractUnits(date.toSeconds() - DateTime.now().toSeconds());

  return units.map((item, index) => {
    return [Units[index], item.toString().padStart(2, "0")];
  });
};

export default toState;
