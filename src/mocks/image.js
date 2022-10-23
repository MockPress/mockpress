import * as util from "../utils/index.js";

/**
 * Generates a random Image of the given size.
 * Utilizes the images created by https://picsum.photos/ .
 *
 * @param { number } [width] Width of the generated image in px. Defaults to 300.
 * @param { number } [height] Height of the generated image in px. Defaults to 300.
 * @returns { string } Url of the random image.
 */
const image =
  (width = 300, height = 300) =>
  (_, loopIndex) => {
    return util.randomImage(width, height, loopIndex);
  };

export default image;
