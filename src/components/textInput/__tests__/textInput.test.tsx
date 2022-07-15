import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import { ToDo } from "../../todo";

describe("TextInput tests", () => {
  test("entered input displayed in todolistitems component", () => {
    render(<ToDo />);
    const taskInput = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: "Ekle" });
    const nullItem = screen.queryByText(/testtt/i);
    expect(nullItem).not.toBeInTheDocument();
    userEvent.type(taskInput, "testtt");
    userEvent.click(addButton);
    const enteredItem = screen.getByText(/testtt/i);
    expect(enteredItem).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const tree = renderer.create(<ToDo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
