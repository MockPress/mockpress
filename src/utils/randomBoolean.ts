import randomNumber from "src/utils/randomNumber";

/**
 * Returns a random boolean.
 *
 * @returns Random boolean value.
 */
const randomBoolean = () => {
  return randomNumber(0, 1) === 1;
};

export default randomBoolean;
