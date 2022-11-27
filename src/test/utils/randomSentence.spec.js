import randomSentence from "../../utils/randomSentence";

describe("random sentence", () => {
  it("should return true when all of the length of sentences are different", () => {
    const short = randomSentence("short");
    const medium = randomSentence("medium");
    const long = randomSentence("long");
    expect(
      short.length < medium.length && medium.length < long.length
    ).toBeTruthy();
  });
});
