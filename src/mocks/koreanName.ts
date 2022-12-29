import { LoopFn } from "src/custom-type";
import * as util from "../utils";

/**
 * Generates a random Korean name.
 * The options consist of popular male and female baby names between 2008-2021.
 *
 * @remarks
 * ```
 * function koreanName(gender?: 'male' | 'female'): LoopFn<string>
 * ```
 *
 * @example
 * ```
 * { name: koreanName() }
 * // 박성민
 *
 * { name: koreanName('female') }
 * // 윤채아
 * ```
 *
 * @param gender - The gender for the generated name. If none given, the gender is also random.
 * @returns LoopFunction of returning a Korean name of the given gender.
 * @public
 */
const koreanName: KoreanNameType = (gender) => () => {
  return util.randomKoreanName(gender);
};

type KoreanNameType = (gender?: "male" | "female") => LoopFn<string>;

export default koreanName;
