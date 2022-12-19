/**
 * Returns a random integer in the given range.
 *
 * @param { number } min Minimum number.
 * @param { number } max Maximum number.
 * @returns A random integer in the given range.
 */
const randomNumber = (min, max) => {
  return Math.max(min, Math.floor(Math.random() * (max + 1)));
};

export default randomNumber;
