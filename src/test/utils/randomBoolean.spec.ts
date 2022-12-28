import randomBoolean from "../../utils/randomBoolean";

describe("boolean", () => {
  it("should return a boolean value", () => {
    const value = randomBoolean();
    expect(typeof value === "boolean");
  });
});
