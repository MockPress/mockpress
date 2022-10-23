import * as utils from "../utils/index.js";

const date = (startDate, endDate) => (_, loopIndex) => {
  return utils.randomDate(startDate, endDate);
};

export default date;
