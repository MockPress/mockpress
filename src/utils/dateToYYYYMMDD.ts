import isValidDate from "./isValidDate";
// @TODO: separator를 사용한다
/**
 * Transforms a Date object to string in shape of 'YYYYMMDD'
 *
 * @param { Date } date Target Date object.
 * @param { string } [separator] Separator that separates the year, month, and date. Defaults to '-'. To be Implemented.
 * @returns { string } A date string in shape of 'YYYYMMDD'.
 */
const dateToYYYYMMDD = (date, separator = "-") => {
  if (!isValidDate(date)) throw new Error("date is not valid");

  const offset = date.getTimezoneOffset();
  const temp = new Date(date.getTime() - offset * 60 * 1000);
  const yyyymmdd = temp.toISOString().split("T")[0]; // ISO8601 === YYYY-MM-DDTHH:mm:ss.sssZ
  return yyyymmdd;
};

export default dateToYYYYMMDD;
