import moment, { Moment } from "moment";

export const dateIsValid = (date: Moment): boolean => {
  return !isNaN(date.valueOf()) && date.valueOf() >= moment().valueOf();
};

export const parseRawDate = (rawDate: string | null): Moment | null => {
  let newRawDate: string | number | null = rawDate;

  if (rawDate !== null && !isNaN(parseInt(rawDate))) {
    newRawDate = parseInt(rawDate);
  }

  return newRawDate === null ? null : moment(newRawDate);
};
