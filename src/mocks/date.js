import * as util from "../utils/index.js";

const date = (startDate, endDate) => (_, loopIndex) => {
  return util.randomDate(startDate, endDate);
};

export default date;
