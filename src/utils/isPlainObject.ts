/**
 * Checks if the given input is an object.
 *
 * @param obj Target to check for.
 * @returns Boolean value to determine whether val is a plain object.
 */
const isPlainObject = (obj: unknown): obj is Record<any, any> => {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

export default isPlainObject;
