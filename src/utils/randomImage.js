import { RANDOM_IMAGE_API_URL } from "../constants.js";

const randomImage = (width, height, index) => {
  return `${RANDOM_IMAGE_API_URL}/${width}/${height}?random=${index}`;
};

export default randomImage;
