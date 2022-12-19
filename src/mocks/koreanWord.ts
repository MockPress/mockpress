import { LoopFn } from "src/custom-type";
import * as util from "../utils";

/**
 * Generates a random korean word
 *
 * @returns { function(any, number): string } Random word
 */
const koreanWord: KoreanWordType = () => () => {
  return util.randomKoreanWord();
};

type KoreanWordType = () => LoopFn<string>;

export default koreanWord;
