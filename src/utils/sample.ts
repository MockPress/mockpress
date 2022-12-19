// inspired by underscore.js (https://underscorejs.org/docs/modules/sample.html)

import isNullOrUndefined from "./isNullOrUndefined";
import randomNumber from "./randomNumber";
import shuffle from "./shuffle";

/**
 * Return n unique ramdom elements from the list.
 *
 * @param arr Options array.
 * @param { number } n Item count.
 * @returns { T[] | T } Sample.
 */
const sample = <T>(arr: readonly T[], n: number): T[] => {
  // n이 지정되어 있지 않다면 배열원소중 1개를 리턴합니다
  if (isNullOrUndefined(n)) {
    const randomIndex = randomNumber(0, arr.length - 1);
    return [arr[randomIndex]];
  }

  // n이 arr보다 더 길다면 에러를 throw합니다
  if (arr.length < n) {
    throw new Error("exceeded allowable range");
  }

  // 배열에서 n개를 랜덤하게 뽑아 리턴합니다
  // 하지만 엄밀히는 배열을 섞고 slice(n)하는것입니다
  const shuffledArray = shuffle(arr, n); // 불변성을 유지하지 않습니다. 배열이 큰경우 비용이 너무 많이 들어갑니다
  return shuffledArray.slice(0, n); // n = 0도 허용합니다
};

export default sample;
