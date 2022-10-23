import * as utils from "../utils/index.js";

// @TODO: location을 받아서 여러 나라를 지원하자
const koreanAddress = () => (_, loopIndex) => {
  return utils.randomKoreanAddress();
};

export default koreanAddress;
