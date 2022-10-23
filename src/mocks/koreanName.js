import * as util from "../utils/index.js";

const koreanName = (gender) => (_, loopIndex) => {
  return util.randomKoreanName(gender);
};

export default koreanName;
