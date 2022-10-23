import * as utils from "../utils/index.js";

const text =
  (min = 4, max = 8) =>
  (_, loopIndex) => {
    return utils.randomWord(min, max);
  };

export default text;
