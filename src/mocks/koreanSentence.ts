import { LoopFn } from "src/custom-type";
import * as util from "../utils";

/**
 * Generate a random korean sentence
 * @public
 *
 * @param Size - of generated sentence.
 * @returns LoopFunction of returning generated sentence of a given size.
 */
const koreanSentence: KoreanSentenceType = (size) => () => {
  return util.randomKoreanSentence(size);
};

type KoreanSentenceType = (
  size?: "short" | "medium" | "long"
) => LoopFn<string>;

export default koreanSentence;
