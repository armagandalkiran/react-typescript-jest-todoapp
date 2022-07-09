import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import { ToDo } from "../todo";

describe("ToDo tests", () => {
  let button: HTMLElement, input: HTMLElement;

  beforeEach(() => {
    render(<ToDo />);
    button = screen.getByText("+");
    input = screen.getByTestId("input");
  });

  afterEach(() => {
    cleanup();
  });

  test("Test default tasks render", () => {
    const items = screen.getAllByText(/default/i);
    expect(items.length).toEqual(3);
  });

  test("Input and button must be rendered", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("Check if the entered value to input is listed", () => {
    const item: string = "test";
    userEvent.type(input, item);
    userEvent.click(button);
    expect(screen.getByText(item));
  });

  test("Check if the entered value is null and not listed", () => {
    const item: string = " ";
    userEvent.type(input, item);
    userEvent.click(button);
    expect(screen.getAllByText(/Warning/i));
  });

  test("matches snapshot", () => {
    const tree = renderer.create(<ToDo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
