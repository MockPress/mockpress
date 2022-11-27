import randomWord from "../../utils/randomWord";

describe("random word", () => {
  it("should return true when random word is generated", () => {
    const word = randomWord();
    expect(word.length > 0).toBeTruthy();
  });
});
