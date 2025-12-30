import InputController from "./controller/input-controller.js";

class App {
  async run() {
    const inputController = new InputController();
    await inputController.readMonthAndDay();
    // const input = new InputView();
    // const result1 = await input.getMonthAndDayInputMessage();
    // const result2 = await input.getWeekDayWorkersInputMessage();
    // const result3 = await input.getHoliDayWorkersInputMessage();
    // console.log("", "result2 ====>", result2, "result3 ====>", result3);
  }
}

export default App;
