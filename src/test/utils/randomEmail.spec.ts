import randomEmail from "../../utils/randomEmail";

describe("email", () => {
  it("should generate random email address", () => {
    const email = randomEmail();
    const emailRegex = new RegExp(
      /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
      "gm"
    );

    expect(emailRegex.test(email));
  });
});
