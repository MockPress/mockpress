import isValidDate from "./isValidDate.js";

const randomDate = (startDate, endDate) => {
  if (!isValidDate(startDate) || !isValidDate(endDate))
    throw new Error("startDate or endDate is not Date Instance");

  if (startDate.getTime() > endDate.getTime())
    throw new Error("endDate should be bigger than startDate");

  return new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
};

export default randomDate;
