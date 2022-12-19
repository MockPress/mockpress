import randomNumber from "./randomNumber.js";

// @TODO: 배열인지 검사한다.
// @MEMO: 라이브러리를 만들때는 아무리 ts라고 해도,
// 사용자가 typescript를 안쓸 수도 있기 때문에, 타입 검사를 직접 해줘야 한다
/**
 * Picks one of the element from Array randomly.
 *
 * @param { T[] } arr Options array.
 * @returns { T } Picked Element.
 */
const oneOf = (arr) => {
  const randomIndex = randomNumber(0, arr.length - 1);
  return arr[randomIndex];
};

export default oneOf;
