import { mock, generate } from "../index";
import { autoIncrement } from "../mocks";

describe("generate mock object", () => {
  it("should return true when loopIndex is valid", () => {
    const personSchema = {
      index: (current, loopIndex) => loopIndex + 1,
    };
    const result = generate(personSchema, 2);
    expect(result[0]["index"] < result[1]["index"]).toBeTruthy();
  });

  it("should return true when id made by autoIncrement is valid", () => {
    const personSchema = {
      id: autoIncrement(),
    };
    const result = generate(personSchema, 2);
    expect(result[0]["id"] < result[1]["id"]).toBeTruthy();
  });
});
