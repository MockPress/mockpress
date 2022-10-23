/**
 * Generates an auto incremented index, based on the loopIndex of the generator.
 *
 * @param { number } [startPoint] Starting point of autoIncrement number. Defaults to 0.
 * @returns { number } Auto-incremented number (+ 1 from previous data).
 */
const autoIncrement =
  (startPoint = 0) =>
  (_, loopIndex) => {
    return startPoint + loopIndex + 1;
  };

export default autoIncrement;
