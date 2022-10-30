import dateToYYYYMMDD from "../../utils/dateToYYYYMMDD";

describe("dateToYYYYMMDD", () => {
  it("should return yyyy-mm-dd formated string", () => {
    const now = new Date();
    const yyyymmdd = dateToYYYYMMDD(now);
    const yyyymmddArr = yyyymmdd.split("-");
    const [yyyy, mm, dd] = [...yyyymmddArr];
    expect(yyyymmddArr.length === 3).toBeTruthy();
    expect(yyyy.length === 4).toBeTruthy();
    expect(mm.length === 2).toBeTruthy();
    expect(dd.length === 2).toBeTruthy();
    expect(Number(yyyy) > 0).toBeTruthy();
    expect(Number(mm) > 0).toBeTruthy();
    expect(Number(dd) > 0).toBeTruthy();
  });
});
