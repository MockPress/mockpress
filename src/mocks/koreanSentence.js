import * as util from "../utils/index";

/**
 * Generate a random korean sentence
 * @param { undefined | 'short' | 'medium' | 'long' } Size of generated sentence.
 * @returns { string } Generated sentence of a given size.
 */
const koreanSentence = (size) => (_, loopIndex) => {
  return util.randomKoreanSentence(size);
};

export default koreanSentence;
