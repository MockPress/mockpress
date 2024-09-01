import { LoopFn } from "src/custom-type";
import * as util from "../utils";

// @TODO: location을 받아서 여러 나라를 지원하자
/**
 * Generates a random South Korean address.
 * Generated address follow the basic rules of the South Korean address system.
 * However, generated addresses are fake and do not exist in the real world.
 *
 * @remarks
 * ```
 * function koreanAddress(): LoopFn<string>
 * ```
 *
 * @example
 * ```
 * { address: koreanAddress() }
 * // 가람시 남동구 카라대로 391
 * ```
 *
 * @returns LoopFunction of returning a random virtual korean address.
 * @public
 */
const koreanAddress: KoreanAddressType = () => () => {
  return util.randomKoreanAddress();
};

type KoreanAddressType = () => LoopFn<string>;

export default koreanAddress;
