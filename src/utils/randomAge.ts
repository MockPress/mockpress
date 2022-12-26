import randomNumber from "./randomNumber";

const MIN = 0;
const MAX = 150;

/**
 * Returns a random number within a given range.
 * @param min Minimum age, defaults to 0.
 * @param max Maximum age, defaults to 150.
 * @returns Random age number within the given range.
 */
const randomAge = (min: number = MIN, max: number = MAX) => {
  return randomNumber(min, max);
};

export default randomAge;
