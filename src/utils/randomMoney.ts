import randomNumber from "./randomNumber";

//@TODO: Comma가 찍혀서 나오도록 하자!
/**
 * Returns a random amount of money in the given range.
 *
 * @param min Minimum amount of money.
 * @param max Maximum amount of money.
 * @param interval Refers to the minimum unit of money.
 * @returns Random amount of money.
 */
const randomMoney = (min: number, max: number, interval: number) => {
  const m = randomNumber(min, max);
  return Math.floor(m / interval) * interval;
};

export default randomMoney;
