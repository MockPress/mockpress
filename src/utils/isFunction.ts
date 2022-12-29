import { type FunctionType } from "../custom-type";
/**
 * Checks if the given input is a function.
 * @public
 *
 * @param val - Target to check for.
 * @returns Boolean value to determine whether val is a function.
 */
const isFunction = (val: unknown): val is FunctionType => {
  return Object.prototype.toString.call(val) === "[object Function]";
};

export default isFunction;
