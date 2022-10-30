import randomKoreanAddress from "../../utils/randomKoreanAddress";
import { ADDRESS, ROAD_NAME_ALPHABET, ROAD_UNIT } from "../../data/address";

describe("randomKoreanAddress", () => {
  it("should return true when korean address is valid", () => {
    const address = randomKoreanAddress();

    const ADDRESS_KEYS = Object.keys(ADDRESS);
    const [province, sector, roadName, buildingNumber] = address.split(" ");

    expect(
      ADDRESS_KEYS.includes(province) &&
        ADDRESS[province].includes(sector) &&
        ROAD_NAME_ALPHABET.includes(roadName[0]) &&
        ROAD_NAME_ALPHABET.includes(roadName[1]) &&
        ROAD_UNIT.includes(roadName.slice(2, roadName.length)) && // '대', '대로'
        1 <= buildingNumber &&
        buildingNumber <= 999
    ).toBeTruthy();
  });
});
