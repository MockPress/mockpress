import randomNumber from "./randomNumber.js";

/**
 * Returns a random amount of money in the given range.
 *
 * @param { number } min Minimum amount of money.
 * @param { number } max Maximum amount of money.
 * @param { number } interval Refers to the minimum unit of money.
 * @returns { number } Random amount of money.
 */
const randomMoney = (min, max, interval) => {
  const m = randomNumber(min, max);
  return Math.floor(m / interval) * interval;
};

export default randomMoney;
