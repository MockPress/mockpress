/**
 * Checks if the given input is an object.
 *
 * @param { unknown } obj Target to check for.
 * @returns { obj is Object }
 */
const isPlainObject = (obj) => {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

export default isPlainObject;
