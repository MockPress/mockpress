import { LoopFn } from "src/custom-type";
import * as util from "../utils";

//@TODO: 더 쉬운 날짜 범위 지정 방식이 필요할듯 싶다

/**
 * Generates a random date in the range of the given parameters.
 *
 * @remarks
 * ```
 * function date(startDate: Date, endDate: endDate): LoopFn<Date>
 * ```
 *
 * @example
 * ```
 * const today = new Date();
 * const nextYear = new Date(today.getFullYear() + 1);
 * { createdAt: mock.date(today, nextYear) }
 * // 2023-01-18T06:29:44.451Z
 * ```
 *
 * @param startDate - Generated date would be after the given date.
 * @param endDate - Generated date would be before the given date.
 * @returns LoopFunction of returning generated Date object.
 * @public
 */
const date: DateType = (startDate, endDate) => () => {
  return util.randomDate(startDate, endDate);
};
type DateType = (startDate: Date, endDate: Date) => LoopFn<Date>;

export default date;
