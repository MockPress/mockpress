import * as util from "../utils/index.js";

// @TODO: location을 받아서 여러 나라를 지원하자
const koreanAddress = () => (_, loopIndex) => {
  return util.randomKoreanAddress();
};

export default koreanAddress;
