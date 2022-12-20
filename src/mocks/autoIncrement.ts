import { LoopFn } from "src/custom-type";

/**
 * Generates an auto incremented index, based on the loopIndex of the generator.
 * @public
 *
 * @param startPoint - Starting point of autoIncrement number. Defaults to 0.
 * @returns LoopFunction of auto-incremented number (+ 1 from previous data).
 */
const autoIncrement: AutoIncrementType =
  (startPoint = 0) =>
  (_, loopIndex) => {
    return startPoint + loopIndex + 1;
  };

type AutoIncrementType = (startPoint: number) => LoopFn<number>;

export default autoIncrement;
