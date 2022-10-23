import * as util from "../utils/index.js";

const image =
  (width = 300, height = 300) =>
  (_, loopIndex) => {
    return util.randomImage(width, height, loopIndex);
  };

export default image;
