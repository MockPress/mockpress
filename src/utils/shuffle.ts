// from: https://stackoverflow.com/a/19269747/9279003

import randomNumber from "./randomNumber";

/**
 * Return n unique ramdom elements from the list.
 *
 * @param { T[] } arr Options array.
 * @returns { T[] } Shuffled array.
 */
function shuffle(array) {
  let counter = array.length;

  while (counter--) {
    // 0 ~ (counter-1) 사이의 랜덤한 값을 가져옵니다
    // counter - 1 ?? => index로 접근할것이기 때문에 1을 빼줍니다
    const randomIndex = randomNumber(0, counter);

    // counter = 랜덤하게 셔플되지 않은 범위의 마지막 요소
    // counter - 1이 아닌 이유는 while문에서 이미 counter-- 했기 때문입니다.
    // 랜덤하게 셔플되지 않은 범위의 마지막 요소를 temp에 넣습니다
    const temp = array[counter];

    // 0 ~ counter 사이에서 랜덤한 위치의 값과 counter위치의 값을 swap합니다
    // 이런식으로 하면 매우 효율적입니다. O(N)만에 일처리가 끝나기 때문입니다
    array[counter] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
}

export default shuffle;
