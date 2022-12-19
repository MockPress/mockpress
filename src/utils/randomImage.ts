import { RANDOM_IMAGE_API_URL } from "../constants.js";

/**
 * Returns an url for a random image of the given size.
 *
 * @param { number } width Width of the random image.
 * @param { number } height Height of the random image.
 * @param { number } index Index for randomizing images of the same size.
 * @returns { string } Url of the image.
 */
const randomImage = (width, height, index) => {
  return `${RANDOM_IMAGE_API_URL}/${width}/${height}?random=${index}`;
};

export default randomImage;
