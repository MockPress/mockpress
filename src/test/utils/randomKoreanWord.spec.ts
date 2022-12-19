import randomKoreanWord from "../../utils/randomKoreanWord";

describe("random word", () => {
  it("should return true when random word is generated", () => {
    const word = randomKoreanWord();
    expect(word.length > 0).toBeTruthy();
  });
});
