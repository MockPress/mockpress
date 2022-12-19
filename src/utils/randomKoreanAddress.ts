import { ADDRESS, ROAD_UNIT, ROAD_NAME_ALPHABET } from "../data/address.js";
import oneOf from "./oneOf.js";
import randomNumber from "./randomNumber.js";

const ADDRESS_KEYS = Object.keys(ADDRESS);

/**
 * Returns a random South Korean address.
 * Generated address follow the basic rules of the South Korean address system.
 *
 * @returns { string } A string in the shape of '{province} {sector} {roadName} {buildingNumber}'.
 */
const randomKoreanAddress = () => {
  const province = oneOf(ADDRESS_KEYS);
  const sector = oneOf(ADDRESS[province]);
  const letter = () => oneOf(ROAD_NAME_ALPHABET);
  const roadName = `${letter()}${letter()}${oneOf(ROAD_UNIT)}`;
  const buildingNumber = randomNumber(1, 999);

  return `${province} ${sector} ${roadName} ${buildingNumber}`;
};

export default randomKoreanAddress;
