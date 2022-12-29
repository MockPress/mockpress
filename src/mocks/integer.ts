import { LoopFn } from "src/custom-type";
import * as util from "../utils";

/**
 * Generates a random integer in the given range.
 *
 * @remarks
 * ```
 * function integer(min: number, max: number): LoopFn<number>
 * ```
 *
 * @example
 * ```
 * { num: mock.integer(0, 1000) }
 * // 607
 * ```
 *
 * @param min - Minimum for the generated number. Defaults to 0.
 * @param max - Maximum for the generated number. Defaults to 1000.
 * @returns LoopFunction of returning random number.
 * @public
 */
const integer: IntegerType =
  (min = 0, max = 1000) =>
  () => {
    return util.randomNumber(min, max);
  };

type IntegerType = (width: number, height: number) => LoopFn<number>;

export default integer;
