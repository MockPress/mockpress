import * as util from "../utils";

/**
 * Generates a random age number.
 *
 * @param min Minimum age.
 * @param max Maximum age.
 * @returns Generated age within the range.
 */

const age = (min?: number, max?: number) => {
  return util.randomAge(min, max);
};

export default age;
