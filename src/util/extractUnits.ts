const extractUnits = (milliseconds: number): number[] => {
  let seconds = Math.floor(milliseconds / 1000);
  milliseconds -= seconds * 1000;

  let minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;

  let hours = Math.floor(minutes / 60);
  minutes -= hours * 60;

  let days = Math.floor(hours / 24);
  hours -= days * 24;

  const weeks = Math.floor(days / 7);
  days -= weeks * 7;

  return [weeks, days, hours, minutes, seconds];
};

export default extractUnits;
