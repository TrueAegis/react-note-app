import formatDate from "./formateDate";

test("Format Date Test: > One Week", () => {
    const testDate = new Date("2020-01-01T12:05:00");
    const result = formatDate(testDate);
    expect(result).toBe("12:05 pm on 1/1/2020");
});

test("Format Date Test: < One Week", () => {
    const testDate = new Date(Date.now() - (60 * 60 * 24 * 6 * 1000));
    const result = formatDate(testDate);
    expect(result).toBe("6 days ago");
});