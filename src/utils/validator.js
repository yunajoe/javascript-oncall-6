import { MONTH_AND_DAY_ERROR_MESSAGE } from "../constants/errors.js";

class Validator {
  validateMonthAndDay(input) {
    console.log("input입니당 ===>", input);
    if (input.length === 0) {
      throw new Error(MONTH_AND_DAY_ERROR_MESSAGE.EMPTY_INPUT);
    }
  }

  validateWeekDayWorkers(input) {}

  validateHolidayWorkers(input) {}
}

export default Validator;
