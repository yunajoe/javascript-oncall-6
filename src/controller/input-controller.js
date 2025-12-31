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
    while (true) {
      try {
        const input = await this.inputView.getMonthAndDayInputMessage();
        this.validator.validateMonthAndDay(input); // 월&요일 인풋 검증 => 에러가 나면은 이 줄에서 멈추고 catch 로 간다.
        return input;
      } catch (error) {
        Console.print(error);
      }
    }
  }

  async readWeekDayWorkers() {
    while (true) {
      try {
        const input = await this.inputView.getWeekDayWorkersInputMessage();
        this.validator.validateWeekDayWorkers(input); // 평일 비상 근무 인풋 검증
        return input;
      } catch (error) {
        Console.print(error);
      }
    }
  }

  async readHolidayWorkers() {
    while (true) {
      try {
        const input = await this.inputView.getHoliDayWorkersInputMessage();
        this.validator.validateHolidayWorkers(input); // 휴일 비상 근무 인풋 검증
        return input;
      } catch (error) {
        Console.print(error);
        await this.readWeekDayWorkers();
      }
    }
  }
}

export default InputController;
