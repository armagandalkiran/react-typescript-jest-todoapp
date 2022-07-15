import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { ToDo } from "../../todo";

describe("TodoList tests", () => {
  test("Todolist component listing", () => {
    render(<ToDo />);
    const checkbox = screen.getAllByRole("checkbox");
    //TO DO: find how to test display:none with scss
    // add on hover tests here

    // const deleteButton = screen.getAllByRole("button", {
    //   name: "-",
    //   hidden: true,
    // });
    const defaultTasks = screen.getAllByText(/^default/);
    expect(defaultTasks.length).toEqual(3);
    expect(checkbox.length).toEqual(3);
    // expect(deleteButton.length).toEqual(3);
  });

  test("matches snapshot", () => {
    const tree = renderer.create(<ToDo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
