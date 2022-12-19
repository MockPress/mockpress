import oneOf from "../../utils/oneOf";

describe("oneOf", () => {
  it("should return true when value is one of array", () => {
    const arr = [1, 2, 3, 4];
    expect(arr.includes(oneOf(arr))).toBeTruthy();
  });

  it("should return false when value is not one of array", () => {
    const arr = [1, 2, 3, 4];
    expect([5, 6, 7, 8].includes(oneOf(arr))).toBeFalsy();
  });
});
