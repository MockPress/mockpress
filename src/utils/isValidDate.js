const isValidDate = (date) => {
  return (
    date &&
    Object.prototype.toString.call(date) === "[object Date]" &&
    !isNaN(date) // isNaN can check date is invalid date
  );
};

export default isValidDate;
