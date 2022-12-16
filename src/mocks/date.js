import * as util from "../utils";

//@TODO: 더 쉬운 날짜 범위 지정 방식이 필요할듯 싶다

/**
 * Generates a random date in the range of the given parameters.
 *
 * @param { Date } startDate Generated date would be after the given date.
 * @param { Date } endDate Generated date would be before the given date.
 * @returns { Date } Generated Date object.
 */
const date = (startDate, endDate) => (_, loopIndex) => {
  return util.randomDate(startDate, endDate);
};

export default date;
