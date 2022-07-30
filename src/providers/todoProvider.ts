import axios from "axios";

export class TodoProvider {
  constructor() {}

  async getTodos() {
    try {
      const result = await axios.get(
        "https://vast-dusk-47383.herokuapp.com/todos"
      );
      return result.data;
    } catch (err) {
      return err;
    }
  }
}
