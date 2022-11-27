/**
 * Checks if the given input is null or undefined.
 *
 * @param { unknown } input Target to check for.
 * @returns { obj is null | undefined }
 */
const isNullOrUndefined = (input) => {
  return input == null;
};

export default isNullOrUndefined;
