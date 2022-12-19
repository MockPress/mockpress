import { LoopFn } from "src/custom-type";
import * as util from "../utils";

/**
 * Generates a random amount of money in the given range.
 *
 * @param { number } [min] Minimum amount of money. Defaults to 100.
 * @param { number } [max] Maximum amount of money. Defaults to 10000.
 * @param { number } [interval] Refers to the minimum unit of money. Defaults to 1000.
 * @returns { function(any, number): number } Random amount of money.
 */
const money: MoneyType =
  (min = 100, max = 10000, interval = 1000) =>
  () => {
    return util.randomMoney(min, max, interval);
  };

type MoneyType = (min: number, max: number, interval: number) => LoopFn<number>; // @TODO: comma가 찍힌 string으로 바꾸자

export default money;
