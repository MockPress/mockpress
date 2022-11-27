import randomKoreanSentence from "../../utils/randomKoreanSentence";

describe("random sentence", () => {
  it("should return true when all of the length of sentences are different", () => {
    const short = randomKoreanSentence("short");
    const medium = randomKoreanSentence("medium");
    const long = randomKoreanSentence("long");
    expect(
      short.length < medium.length && medium.length < long.length
    ).toBeTruthy();
  });
});
