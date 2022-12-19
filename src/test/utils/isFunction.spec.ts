import isFunction from "../../utils/isFunction";

describe("isFunction", () => {
  it("should return true when value is function", () => {
    const arrowFunction = () => {};
    const namedFunction = function () {};
    expect(isFunction(arrowFunction)).toBeTruthy();
    expect(isFunction(namedFunction)).toBeTruthy();
  });

  it("should return false when value is not function", () => {
    const obj = {};
    const num = 1;
    const str = "string";
    expect(isFunction(obj)).toBeFalsy();
    expect(isFunction(num)).toBeFalsy();
    expect(isFunction(str)).toBeFalsy();
  });
});
