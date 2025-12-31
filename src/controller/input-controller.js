import { Console } from "@woowacourse/mission-utils";
import Validator from "../utils/validator.js";
import InputView from "../view/input-view.js";

// 입력의 검증로직을 담당 => input과 validator가 필요하다
class InputController {
  constructor() {
    this.inputView = new InputView();
    this.validator = new Validator();
  }

  async readMonthAndDay() {
    try {
      const input = await this.inputView.getMonthAndDayInputMessage();
      this.validator.validateMonthAndDay(input); // 월&요일 인풋 검증
    } catch (error) {
      Console.print(error);
    }
  }

  async readWeekDayWorkers() {
    try {
      const input = await this.inputView.getWeekDayWorkersInputMessage();
      this.validator.validateWeekDayWorkers(input); // 평일 비상 근무 인풋 검증
    } catch (error) {
      Console.print(error);
    }
  }
}

export default InputController;
