/**
 * Returns a random integer in the given range.
 * @public
 *
 * @param min - Minimum number.
 * @param max - Maximum number.
 * @returns A random integer in the given range.
 */
const randomNumber = (min: number, max: number) => {
  return Math.max(min, Math.floor(Math.random() * (max + 1)));
};

export default randomNumber;
