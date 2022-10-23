import * as util from "../utils/index.js";

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
