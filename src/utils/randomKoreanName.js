import { FIRST_NAMES, LAST_NAMES } from "../data/names.js";
import oneOf from "./oneOf.js";

const allFirstNames = FIRST_NAMES.male.concat(FIRST_NAMES.female);

/**
 * Returns a random Korean name of the given gender.
 *
 * @param { 'male' | 'female' } [gender] Gender for the generated name
 * @returns { string }  A random Korean name of the given gender in the shape of '{lastName}{firstName}', according to the Korean convention. If none is given, the gender is also random.
 */
const randomKoreanName = (gender) => {
  const lastName = oneOf(LAST_NAMES);
  const firstName = oneOf(gender ? FIRST_NAMES[gender] : allFirstNames).name;

  return `${lastName}${firstName}`;
};

export default randomKoreanName;
