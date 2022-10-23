// @TODO: seperator를 사용한다
const dateToYYYYMMDD = (date, seperator = "-") => {
  if (!isValidDate(date)) throw new Error("date is not valid");

  const offset = date.getTimezoneOffset();
  const temp = new Date(date.getTime() - offset * 60 * 1000);
  const yyyymmdd = temp.toISOString().split("T")[0]; // ISO8601 === YYYY-MM-DDTHH:mm:ss.sssZ
  return yyyymmdd;
};

export default dateToYYYYMMDD;
