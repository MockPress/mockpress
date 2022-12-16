import * as util from "../utils";

// @TODO: location을 받아서 여러 나라를 지원하자
/**
 * Generates a random South Korean address.
 * Generated address follow the basic rules of the South Korean address system.
 * However, generated addresses are fake and do not exist in the real world.
 *
 * @returns { string } A random virtual korean address.
 */
const koreanAddress = () => (_, loopIndex) => {
  return util.randomKoreanAddress();
};

export default koreanAddress;
