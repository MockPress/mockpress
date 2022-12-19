import isValidDate from "./isValidDate.js";

/**
 * Returns a random date in the range of given parameters.
 *
 * @param { Date } startDate Returned date would be after the given date.
 * @param { Date } endDate Returned date would be before the given date.
 * @returns { Date } Random date.
 */
const randomDate = (startDate, endDate) => {
  if (!isValidDate(startDate) || !isValidDate(endDate))
    throw new Error("startDate or endDate is not Date Instance");

  if (startDate.getTime() > endDate.getTime())
    throw new Error("endDate should be later than startDate");

  return new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
};

export default randomDate;
