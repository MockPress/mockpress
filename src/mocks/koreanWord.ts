import { LoopFn } from "src/custom-type";
import * as util from "../utils";

/**
 * Generates a random korean word
 *
 * @remarks
 * ```
 * function koreanWord(): LoopFn<string>
 * ```
 *
 * @example
 * ```
 * { tag: mock.koreanWord() }
 * // 인력
 * ```
 *
 * @returns LoopFunction returning random word
 * @public
 */
const koreanWord: KoreanWordType = () => () => {
  return util.randomKoreanWord();
};

type KoreanWordType = () => LoopFn<string>;

export default koreanWord;
