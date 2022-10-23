import * as utils from "../utils/index.js";

const integer =
  (min = 0, max = 1000) =>
  (_, loopIndex) => {
    return utils.randomNumber(min, max);
  };

export default integer;
