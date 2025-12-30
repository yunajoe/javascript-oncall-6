import Input from "./view/input-view.js";

class App {
  async run() {
    const input = new Input();
    await input.getInputMessage();
  }
}

export default App;
