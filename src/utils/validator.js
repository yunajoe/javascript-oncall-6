import {
  MONTH_AND_DAY_ERROR_MESSAGE,
  WEEK_DAY_ERROR_MESSAGE,
} from "../constants/errors.js";

class Validator {
  validateMonthAndDay(input) {
    if (input.length === 0) {
      throw new Error(MONTH_AND_DAY_ERROR_MESSAGE.EMPTY_INPUT);
    }
    const splitInput = input.split(",");
    const [month, day] = [splitInput[0], splitInput[1]];
    if (Number(month.trim()) < 1 || Number(month.trim()) > 12) {
      throw new Error(MONTH_AND_DAY_ERROR_MESSAGE.MONTH_INPUT);
    }

    const days = ["월", "화", "수", "목", "금", "토", "일"];
    if (!days.includes(day.trim())) {
      throw new Error(MONTH_AND_DAY_ERROR_MESSAGE.DAY_INPUT);
    }
  }

  validateWeekDayWorkers(input) {
    if (input.length === 0) {
      throw new Error(WEEK_DAY_ERROR_MESSAGE.EMPTY_INPUT);
    }
    const splitInput = input.split(",");
    if (splitInput.length < 5 || splitInput.length > 35) {
      throw new Error(WEEK_DAY_ERROR_MESSAGE.TOTAL_WORKERS_LENGTH_INPUT);
    }
    splitInput.forEach((name) => {
      const trimmedName = name.trim();
      if (trimmedName.length < 1 || trimmedName.length > 5) {
        throw new Error(WEEK_DAY_ERROR_MESSAGE.NAME_LENGTH_INPUT);
      }
    });
  }

  validateHolidayWorkers(input) {}
}

export default Validator;
