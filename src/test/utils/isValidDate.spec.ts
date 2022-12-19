import isValidDate from "../../utils/isValidDate";

describe("isValidDate", () => {
  it("should return true when value is valid date", () => {
    const now = new Date();
    expect(isValidDate(now)).toBeTruthy();
  });

  it("should return false when value is not valid date", () => {
    const obj = {};
    expect(isValidDate(obj)).toBeFalsy();
  });
});
