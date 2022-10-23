/**
 * Checks if the given input is a function.
 *
 * @param { unknown } obj Target to check for.
 * @returns { obj is Function }
 */
const isFunction = (obj) => {
  return Object.prototype.toString.call(obj) === "[object Function]";
};

export default isFunction;
