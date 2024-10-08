// reference: https://developer-ankiwoong.tistory.com/256

import sentences from "../data/sentences";
import sample from "./sample";

const sizeTable = {
  short: 1,
  medium: 3,
  long: 5,
};

// @TODO: 영어도 지원한다. locale을 받으면 될듯?
/**
 * Returns a random korean sentence
 * @public
 *
 * @param Size - Size of generated sentence. Default is "short"
 * @returns Generated sentence of a given size.
 */
const randomKoreanSentence = (size: "short" | "medium" | "long" = "short") => {
  const sentenceCount = sizeTable[size];
  if (!sentenceCount) {
    throw new Error("size should be one of short, medium, long");
  }
  return sample(sentences, sentenceCount).join(". ") + "."; // 비용을 아끼기 위해서 불변성을 유지하지 않는다.
};

export default randomKoreanSentence;
