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
      this.validator.validateMonthAndDay(input); //
    } catch (error) {
      Console.print(error);
    }
  }
}

export default InputController;
