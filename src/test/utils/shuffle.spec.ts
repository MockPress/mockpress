import shuffle from "../../utils/shuffle";

describe("shuffle", () => {
  it("should return true when length of returned array is same with length of input array", () => {
    // It's hard to say that we did a proper random test.
    expect([1, 2, 3, 4].length === shuffle([1, 2, 3, 4]).length).toBeTruthy();
    expect([1, 2, 3].length === shuffle([1, 2, 3]).length).toBeTruthy();
    expect([1, 2].length === shuffle([1, 2]).length).toBeTruthy();
    expect([1].length === shuffle([1]).length).toBeTruthy();
    expect([].length === shuffle([]).length).toBeTruthy();
  });
});
