import { nanoid } from "nanoid";
import { 이름, 성 } from "./names.mjs";

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

let chosenNameArray = [];
const randomKoreanName = (gender) => {
  const 성Index = randomNumberInRange(0, 성.length);

  if (chosenNameArray.length === 0) {
    chosenNameArray =
      gender === "male" || gender === "female"
        ? 이름[gender]
        : 이름.male.concat(이름.female);
  }
  const 이름Index = randomNumberInRange(0, chosenNameArray.length);

  return `${성[성Index]}${chosenNameArray[이름Index].name}`;
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
};
