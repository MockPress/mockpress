import * as util from "../utils";

/**
 * Generates a random korean word
 *
 * @returns { function(any, number): string } Random word
 */
const koreanWord = () => (_, loopIndex) => {
  return util.randomKoreanWord();
};

export default koreanWord;
