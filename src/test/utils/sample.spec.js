import sample from "../../utils/sample";

describe("sample", () => {
  it("should return true when length of sample is same with n", () => {
    // It's hard to say that we did a proper random test.

    expect(typeof sample([1, 2, 3, 4])[0] === "number").toBeTruthy();

    const test1 = sample([1, 2, 3, 4], 1);
    expect(Array.isArray(test1) && test1.length === 1).toBeTruthy();

    const test2 = sample([1, 2, 3, 4], 2);
    expect(Array.isArray(test2) && test2.length === 2).toBeTruthy();

    const test3 = sample([1, 2, 3, 4], 3);
    expect(Array.isArray(test3) && test3.length === 3).toBeTruthy();

    const test4 = sample([1, 2, 3, 4], 4);
    expect(Array.isArray(test4) && test4.length === 4).toBeTruthy();
  });
});
