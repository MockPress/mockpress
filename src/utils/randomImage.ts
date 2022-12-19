import { RANDOM_IMAGE_API_URL } from "../constants";

/**
 * Returns an url for a random image of the given size.
 *
 * @param width Width of the random image.
 * @param height Height of the random image.
 * @param index Index for randomizing images of the same size.
 * @returns Url of the image.
 */
const randomImage = (width: number, height: number, index: number) => {
  return `${RANDOM_IMAGE_API_URL}/${width}/${height}?random=${index}`;
};

export default randomImage;
