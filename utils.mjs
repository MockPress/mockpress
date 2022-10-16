import { nanoid } from "nanoid";
import { ADDRESS, ROAD_UNIT, ROAD_NAME_ALPHABET } from "./data/address.mjs";
import { FIRST_NAMES, LAST_NAMES } from "./data/names.mjs";

const randomImageApiUrl = "https://picsum.photos";

const randomNumberInRange = (min, max) => {
  return Math.max(min, Math.floor(Math.random() * (max + 1)));
};

const randomString = (min, max) => {
  const random = randomNumberInRange(min, max);
  return nanoid(random);
};

const nextIndex = (currentIndex) => {
  return currentIndex + 1;
};

const oneOf = (arr) => {
  const randomIndex = randomNumberInRange(0, arr.length - 1);
  return arr[randomIndex];
};

const num = (min, max) => {
  return randomNumberInRange(min, max);
};

const image = (width, height) => {
  return `${randomImageApiUrl}/${width}/${height}`;
};

const money = (min, max, interval) => {
  const m = randomNumberInRange(min, max);
  return Math.floor(m / interval) * interval;
};

const isFunction = (obj) => {
  return Object.prototype.toString.call(obj) === "[object Function]";
};

const isPlainObject = (obj) => {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

const allFirstNames = FIRST_NAMES.male.concat(FIRST_NAMES.female);

const randomKoreanName = (gender) => {
  const lastName = oneOf(LAST_NAMES);
  const firstName = oneOf(gender ? FIRST_NAMES[gender] : allFirstNames).name;

  return `${lastName}${firstName}`;
};

const ADDRESS_KEYS = Object.keys(ADDRESS);
const randomKoreanAddress = () => {
  const province = oneOf(ADDRESS_KEYS);
  const sector = oneOf(ADDRESS[province]);
  const letter = () => oneOf(ROAD_NAME_ALPHABET);
  const roadName = `${letter()}${letter()}${oneOf(ROAD_UNIT)}`;
  const buildingNumber = randomNumberInRange(1, 999);

  return `${province} ${sector} ${roadName} ${buildingNumber}`;
};

export default {
  randomNumberInRange,
  randomString,
  nextIndex,
  oneOf,
  num,
  image,
  money,
  isFunction,
  isPlainObject,
  randomKoreanName,
  randomKoreanAddress,
};
