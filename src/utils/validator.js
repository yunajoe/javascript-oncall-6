import { MONTH_AND_DAY_ERROR_MESSAGE } from "../constants/errors.js";

class Validator {
  validateMonthAndDay(input) {
    if (input.length === 0) {
      throw new Error(MONTH_AND_DAY_ERROR_MESSAGE.EMPTY_INPUT);
    }
    const splitInput = input.split(",");
    const [month, day] = [splitInput[0], splitInput[1]];
    console.log("month ===>", month, "day ====>", day);
    if (Number(month.trim()) < 1 || Number(month.trim()) > 12) {
      throw new Error(MONTH_AND_DAY_ERROR_MESSAGE.MONTH_INPUT);
    }
    //  && (AND) 모든 조건이 true일 경우 true. 즉  첫 번째 falsy를 찾는 AND 연산자 ‘&&’. 모든 피연산자가 true일 경우는 마지막 값을 반환
    //  || (OR) 하나라도 true이면은 true를 반환한다. 즉, 첫 번째 truthy를 찾는 OR 연산자 ‘||’. 모든 피연산자가 false인 경우는 마지막 값을 반환
    const days = ["월", "화", "수", "목", "금", "토", "일"];
    if (!days.includes(day.trim())) {
      throw new Error(MONTH_AND_DAY_ERROR_MESSAGE.DAY_INPUT);
    }
  }

  validateWeekDayWorkers(input) {}

  validateHolidayWorkers(input) {}
}

export default Validator;
