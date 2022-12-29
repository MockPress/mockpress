import { LoopFn } from "src/custom-type";
import * as util from "../utils";

/**
 * Generate a random korean sentence
 *
 * @remarks
 * ```
 * function koreanSentence(size?: "short" | "medium" | "long"): LoopFn<string>
 * ```
 *
 * @example
 * ```
 * { detail: mock.koreanSentence() };
 * // '행정각부의 설치·조직과 직무범위는 법률로 정한다.'
 * ```
 *
 * @param Size - of generated sentence.
 * @returns LoopFunction of returning generated sentence of a given size.
 * @public
 */
const koreanSentence: KoreanSentenceType = (size) => () => {
  return util.randomKoreanSentence(size);
};

type KoreanSentenceType = (
  size?: "short" | "medium" | "long"
) => LoopFn<string>;

export default koreanSentence;
