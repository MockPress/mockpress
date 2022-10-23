import * as utils from "../utils/index.js";

const koreanName = (gender) => (_, loopIndex) => {
  return utils.randomKoreanName(gender);
};

export default koreanName;
