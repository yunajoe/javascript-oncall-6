import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../constants/messages.js";

class InputView {
  async getMonthAndDayInputMessage() {
    return await Console.readLineAsync(INPUT_MESSAGES.MONTH_AND_DAY);
  }

  async getWeekDayWorkersInputMessage() {
    return await Console.readLineAsync(INPUT_MESSAGES.WEEKDAY_WORKERS);
  }

  async getHoliDayWorkersInputMessage() {
    return await Console.readLineAsync(INPUT_MESSAGES.HOLIDAY_WORKERS);
  }
}

export default InputView;
