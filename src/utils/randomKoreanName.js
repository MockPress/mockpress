import { FIRST_NAMES, LAST_NAMES } from "../data/names.js";
import oneOf from "./oneOf.js";

const allFirstNames = FIRST_NAMES.male.concat(FIRST_NAMES.female);

const randomKoreanName = (gender) => {
  const lastName = oneOf(LAST_NAMES);
  const firstName = oneOf(gender ? FIRST_NAMES[gender] : allFirstNames).name;

  return `${lastName}${firstName}`;
};

export default randomKoreanName;
