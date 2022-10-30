import randomDate from "../../utils/randomDate";

describe("randomDate", () => {
  it("should return true when random date is within range", () => {
    const now = new Date();
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const date = randomDate(now, tomorrow);
    expect(
      now.getTime() <= date.getTime() && date.getTime() <= tomorrow.getTime()
    );
  });
});
