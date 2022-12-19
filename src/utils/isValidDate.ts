/**
 * Checks if the given input is a date object.
 *
 * @param { unknown } date Target to check for.
 * @returns { date is Date }
 */
const isValidDate = (date) => {
  return (
    date &&
    Object.prototype.toString.call(date) === "[object Date]" &&
    !isNaN(date) // isNaN can check date is invalid date
  );
};

export default isValidDate;
