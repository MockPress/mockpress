import * as util from "../utils/index.js";

const integer =
  (min = 0, max = 1000) =>
  (_, loopIndex) => {
    return util.randomNumber(min, max);
  };

export default integer;
