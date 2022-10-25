import * as util from "../utils/index.js";

/**
 * Generates a text of a length in the given range.
 *
 * @param { number } [min] Minimum length of word. Defaults to 4.
 * @param { number } [max] Maximum length of word. Defaults to 8.
 * @returns Random word in the given range.
 */
const text =
  (min = 4, max = 8) =>
  (_, loopIndex) => {
    return util.randomWord(min, max);
  };

export default text;
