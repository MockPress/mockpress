import { RANDOM_IMAGE_API_URL } from "../../constants";
import randomImage from "../../utils/randomImage";

describe("randomImage", () => {
  it("should return true when randomImage is valid url", () => {
    const imageUrl = randomImage(100, 100, 5);
    expect(
      imageUrl === `${RANDOM_IMAGE_API_URL}/${100}/${100}?random=${5}`
    ).toBeTruthy();
  });
});
