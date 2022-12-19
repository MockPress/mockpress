import isPlainObject from "../../utils/isPlainObject";

describe("isPlainObject", () => {
  it("should return true when value is plain object", () => {
    const obj = { a: 1, b: "string" };
    expect(isPlainObject(obj)).toBeTruthy();
  });

  it("should return false when value is not plain object", () => {
    const arrowFunction = () => {};
    const namedFunction = function () {};
    expect(isPlainObject(arrowFunction)).toBeFalsy();
    expect(isPlainObject(namedFunction)).toBeFalsy();
  });
});
