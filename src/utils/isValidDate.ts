/**
 * Checks if the given input is a date object.
 * @public
 *
 * @param val - Target to check for.
 * @returns Boolean value to determine whether val is a Date
 */
const isValidDate = (val: unknown): val is Date => {
  if (!val) return false;
  if (Object.prototype.toString.call(val) !== "[object Date]") return false;
  return true;
};

export default isValidDate;
