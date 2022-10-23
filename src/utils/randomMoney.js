import randomNumber from "./randomNumber.js";

const randomMoney = (min, max, interval) => {
  const m = randomNumber(min, max);
  return Math.floor(m / interval) * interval;
};

export default randomMoney;
