import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../constants/messages.js";

class Input {
  async getInputMessage() {
    const result1 = await Console.readLineAsync(INPUT_MESSAGES.MONTH_AND_DAY);
    const result2 = await Console.readLineAsync(INPUT_MESSAGES.WEEKDAY_WORKERS);
    const result3 = await Console.readLineAsync(INPUT_MESSAGES.HOLIDAY_WORKERS);
  }
}

export default Input;
