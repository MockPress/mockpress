import { nanoid } from "nanoid";
import randomNumber from "./randomNumber.js";

// @TODO: Word라고 하니 nanoId보다는 조금 더 의미를 가진 단어였으면 한다. 사랑, 친구 등등
/**
 * Returns a text of a length in the given range.
 * Utilizes the nanoid library for creating a string.
 * https://www.npmjs.com/package/nanoid
 *
 * @param { number } min Minimum length of word.
 * @param { number } max Maximum length of word.
 * @returns { string } Generated word of a random length in the given range.
 */
const randomWord = (min, max) => {
  const random = randomNumber(min, max);
  return nanoid(random);
};

export default randomWord;
