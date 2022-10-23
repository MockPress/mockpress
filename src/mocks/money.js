import * as util from "../utils/index.js";

/**
 * Generates a random amount of money in the given range.
 *
 * @param { number } [min] Minimum amount of money. Defaults to 100.
 * @param { number } [max] Maximum amount of money. Defaults to 10000.
 * @param { number } [interval] Refers to the minimum unit of money. Defaults to 1000.
 * @returns { number } Random amount of money.
 */
const money =
  (min = 100, max = 10000, interval = 1000) =>
  (_, loopIndex) => {
    return util.randomMoney(min, max, interval);
  };

export default money;
