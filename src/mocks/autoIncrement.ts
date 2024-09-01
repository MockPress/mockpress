import { LoopFn } from "src/custom-type";

/**
 * Generates an auto incremented index, based on the loopIndex of the generator.
 *
 * @remarks
 * ```
 * function autoIncrement(startPoint: number): LoopFn<number>
 * ```
 *
 * @example
 * ```
 * { id: autoIncrement() }
 * // 0, 1, 2 ...
 *
 * { id: autoIncrement(2) }
 * // 2, 3, 4 ...
 * ```
 * @param startPoint - Starting point of autoIncrement number. Defaults to 0.
 * @returns LoopFunction of auto-incremented number (+ 1 from previous data).
 *
 * @public
 */
const autoIncrement: AutoIncrementType =
  (startPoint = 0) =>
  (_, loopIndex) => {
    return startPoint + loopIndex + 1;
  };

type AutoIncrementType = (startPoint: number) => LoopFn<number>;

export default autoIncrement;
