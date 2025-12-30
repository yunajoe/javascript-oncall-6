import { MONTH_AND_DAY_ERROR_MESSAGE } from "../constants/errors";

class Validator {
  validateMonthAndDay(input) {
    if (input.length === 0) {
      throw new Error(MONTH_AND_DAY_ERROR_MESSAGE.EMPTY_INPUT);
    }
  }

  validateWeekDayWorkers(input) {}

  validateHolidayWorkers(input) {}
}
