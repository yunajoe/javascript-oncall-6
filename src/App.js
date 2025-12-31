import InputController from "./controller/input-controller.js";
import OutputController from "./controller/output-controller.js";

class App {
  async run() {
    const inputController = new InputController();
    const startDay = await inputController.readMonthAndDay();
    const weekDayWorkers = await inputController.readWeekDayWorkers();
    const holidayWorkers = await inputController.readHolidayWorkers();
    const outputController = new OutputController(
      startDay,
      weekDayWorkers,
      holidayWorkers
    );
    await outputController.printResult();
  }
}

export default App;
