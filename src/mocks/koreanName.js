import * as util from "../utils/index";

/**
 * Generates a random Korean name.
 * The options consist of popular male and female baby names between 2008-2021.
 *
 * @param { 'male' | 'female' } [gender] The gender for the generated name.
 * @returns A Korean name of the given gender. If none given, the gender is also random.
 */
const koreanName = (gender) => (_, loopIndex) => {
  return util.randomKoreanName(gender);
};

export default koreanName;
