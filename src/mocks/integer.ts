import { LoopFn } from "src/custom-type";
import * as util from "../utils";

/**
 * Generates a random integer in the given range.
 * @public
 *
 * @param min - Minimum for the generated number. Defaults to 0.
 * @param max - Maximum for the generated number. Defaults to 1000.
 * @returns LoopFunction of returning random number.
 */
const integer: IntegerType =
  (min = 0, max = 1000) =>
  () => {
    return util.randomNumber(min, max);
  };

type IntegerType = (width: number, height: number) => LoopFn<number>;

export default integer;
