import randomAge from "../../utils/randomAge";

describe("randomAge", () => {
  it("should return a number between given range", () => {
    const min = 5;
    const max = 25;
    const age = randomAge(min, max);

    expect(min <= age && age <= max);
  });
});
