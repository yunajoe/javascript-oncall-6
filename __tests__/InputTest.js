import Validator from "../src/utils/validator";

describe("Input Test", () => {
  test.each([["3,월"], ["4,화"], ["5,수"], ["6,목"]])("입력 %s", (input) => {
    const validator = new Validator();
    expect(() => validator.validateMonthAndDay(input)).not.toThrow();
  });
});
