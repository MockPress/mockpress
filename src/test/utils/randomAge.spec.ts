import randomAge from "../../utils/randomAge";

describe("randomAge", () => {
  it("should return a number between given range", () => {
    const min = 5;
    const max = 25;
    const value = randomAge(min, max);

    expect(value >= min && max >= value);
  });
});
