import { LoopFn } from "src/custom-type";
import * as util from "../utils";

/**
 * Generates a random korean word
 * @public
 *
 * @returns LoopFunction returning random word
 */
const koreanWord: KoreanWordType = () => () => {
  return util.randomKoreanWord();
};

type KoreanWordType = () => LoopFn<string>;

export default koreanWord;
