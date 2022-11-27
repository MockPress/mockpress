// reference: https://developer-ankiwoong.tistory.com/256

import randomNumber from "./randomNumber.js";
import words from "../data/words";

// @TODO: 영어도 지원한다. locale을 받으면 될듯?
/**
 * Returns a random korean word
 *
 * @returns { string } Generated word of a random length in the given range.
 */
const randomWord = () => {
  const index = randomNumber(0, words.length - 1);
  return words[index];
};

export default randomWord;
