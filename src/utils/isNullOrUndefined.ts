/**
 * Checks if the given input is null or undefined.
 *
 * @param val Target to check for.
 * @returns Boolean value to determine whether val is a null or undefined.
 */
const isNullOrUndefined = (val: unknown): val is null | undefined => {
  return val == null;
};

export default isNullOrUndefined;
