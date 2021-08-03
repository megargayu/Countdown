import moment, { Moment } from "moment";
import extractUnits from "./extractUnits";

const Units = ["Week(s)", "Day(s)", "Hour(s)", "Minute(s)", "Second(s)"];

const toState = (date: Moment): [string, string][] => {
  const units = extractUnits(date.valueOf() - moment().valueOf());

  return units.map((item, index) => {
    return [Units[index], item.toString().padStart(2, "0")];
  });
};

export default toState;
