import InputView from "./view/input-view.js";

class App {
  async run() {
    const input = new InputView();
    const result1 = await input.getMonthAndDayInputMessage();
    const result2 = await input.getWeekDayWorkersInputMessage();
    const result3 = await input.getHoliDayWorkersInputMessage();
    console.log("", "result2 ====>", result2, "result3 ====>", result3);
  }
}

export default App;
