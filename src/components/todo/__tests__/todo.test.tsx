import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { ToDo } from "../todo";

describe("ToDo tests", () => {
  test("initial todo component rendered", () => {
    render(<ToDo />);
    const taskInput = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: "Ekle" });
    // const defaultTasks = screen.getAllByText(/^default/);
    // expect(defaultTasks.length).toEqual(3);
    expect(taskInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const tree = renderer.create(<ToDo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
