import * as util from "../utils/index.js";

const text =
  (min = 4, max = 8) =>
  (_, loopIndex) => {
    return util.randomWord(min, max);
  };

export default text;
