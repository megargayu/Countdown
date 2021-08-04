import { DateTime } from "luxon";

export const dateIsValid = (date: DateTime): boolean => {
  return date.isValid && date.toMillis() >= DateTime.now().toMillis();
};

export const parseRawDate = (rawDate: string | null): DateTime | null => {
  if (rawDate === null || isNaN(Number(rawDate))) {
    return null;
  }

  const newRawDate = Number(rawDate);

  const converted = DateTime.fromMillis(newRawDate);
  return converted.isValid ? converted : null;
};
