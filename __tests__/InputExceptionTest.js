import { MONTH_AND_DAY_ERROR_MESSAGE } from "../src/constants/errors";
import Validator from "../src/utils/validator";

describe("Validator - validateMonthAndDay 예외 처리", () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });
  test("입력이 빈 문자열이면 예외가 발생한다", () => {
    expect(() => {
      validator.validateMonthAndDay("");
    }).toThrow(MONTH_AND_DAY_ERROR_MESSAGE.EMPTY_INPUT);
  });
  test("월이 1~12 범위를 벗어나면 예외가 발생한다", () => {
    expect(() => {
      validator.validateMonthAndDay("13,월");
    }).toThrow(MONTH_AND_DAY_ERROR_MESSAGE.MONTH_INPUT);
  });
  test("요일이 잘못되면 예외가 발생한다", () => {
    expect(() => {
      validator.validateMonthAndDay("3,월요일");
    }).toThrow(MONTH_AND_DAY_ERROR_MESSAGE.DAY_INPUT);
  });
});
