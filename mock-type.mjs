import utils from "./utils.mjs";

export const autoIncrement =
  (startPoint = 0) =>
  (current, loop) => {
    const { index } = loop;
    return utils.nextIndex(startPoint + index);
  };

export const randomString =
  (min = 4, max = 8) =>
  (current, loop) => {
    return utils.randomString(min, max);
  };

export const num =
  (min = 0, max = 1000) =>
  (current, loop) => {
    return utils.num(min, max);
  };

export const image =
  (width = 300, height = 300) =>
  (current, loop) => {
    return utils.image(width, height);
  };

export const money =
  (min = 100, max = 10000, interval = 1000) =>
  (current, loop) => {
    return utils.money(min, max, interval);
  };
