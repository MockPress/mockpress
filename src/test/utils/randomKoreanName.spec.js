import randomKoreanName from "../../utils/randomKoreanName";
import { FIRST_NAMES, LAST_NAMES } from "../../data/names";

describe("randomKoreanName", () => {
  it("should return true when korean name is valid", () => {
    const name = randomKoreanName("male");
    const firstName = name.slice(1, name.length);
    const lastName = name[0];
    const firstNames = FIRST_NAMES["male"].map(({ name }) => name);
    expect(
      LAST_NAMES.includes(lastName) && firstNames.includes(firstName)
    ).toBeTruthy();
  });
});
