import InputController from "./controller/input-controller.js";

class App {
  async run() {
    const inputController = new InputController();
    await inputController.readMonthAndDay();
    await inputController.readWeekDayWorkers();
  }
}

export default App;
