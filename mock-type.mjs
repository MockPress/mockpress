import utils from "./utils.mjs";

export const autoIncrement =
  (startPoint = 0) =>
  (current, loopIndex) => {
    return utils.nextIndex(startPoint + loopIndex);
  };

export const randomString =
  (min = 4, max = 8) =>
  (current, loopIndex) => {
    return utils.randomString(min, max);
  };

export const num =
  (min = 0, max = 1000) =>
  (current, loopIndex) => {
    return utils.num(min, max);
  };

export const image =
  (width = 300, height = 300) =>
  (current, loopIndex) => {
    return utils.image(width, height, loopIndex);
  };

export const money =
  (min = 100, max = 10000, interval = 1000) =>
  (current, loopIndex) => {
    return utils.money(min, max, interval);
  };

export const koreanName = (gender) => (current, loopIndex) => {
  return utils.randomKoreanName(gender);
};

export const koreanAddress = () => (current, loopIndex) => {
  return utils.randomKoreanAddress();
};

export const randomDateInRage =
  (startDate, endDate) => (current, loopIndex) => {
    return utils.randomDateInRange(startDate, endDate);
  };
