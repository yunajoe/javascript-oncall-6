import {
  HOLIDAY_ERROR_MESSAGE,
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

    if (Number.isNaN(Number(month.trim()))) {
      throw new Error(MONTH_AND_DAY_ERROR_MESSAGE.MONTH_INPUT);
    }

    // TODO: 01, 02, 03 도 Number를 하면은 1,2,3으로 되기 떄문에 통과가 된다. 흠

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
    const removeDuplicatedNames = new Set(splitInput);
    if (splitInput.length !== removeDuplicatedNames.size) {
      throw new Error(WEEK_DAY_ERROR_MESSAGE.DUPLICATED_INPUT);
    }
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

  validateHolidayWorkers(input) {
    if (input.length === 0) {
      throw new Error(HOLIDAY_ERROR_MESSAGE.EMPTY_INPUT);
    }
    const splitInput = input.split(",");
    const removeDuplicatedNames = new Set(splitInput);
    if (splitInput.length !== removeDuplicatedNames.size) {
      throw new Error(HOLIDAY_ERROR_MESSAGE.DUPLICATED_INPUT);
    }
    if (splitInput.length < 5 || splitInput.length > 35) {
      throw new Error(HOLIDAY_ERROR_MESSAGE.TOTAL_WORKERS_LENGTH_INPUT);
    }
    splitInput.forEach((name) => {
      const trimmedName = name.trim();
      if (trimmedName.length < 1 || trimmedName.length > 5) {
        throw new Error(HOLIDAY_ERROR_MESSAGE.NAME_LENGTH_INPUT);
      }
    });
  }
}

export default Validator;
