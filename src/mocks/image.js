import * as utils from "../utils/index.js";

const image =
  (width = 300, height = 300) =>
  (_, loopIndex) => {
    return utils.randomImage(width, height, loopIndex);
  };

export default image;
