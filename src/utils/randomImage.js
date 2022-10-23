import { randomImageApiUrl } from "../constants.js";

const randomImage = (width, height, index) => {
  return `${randomImageApiUrl}/${width}/${height}?random=${index}`;
};

export default randomImage;
