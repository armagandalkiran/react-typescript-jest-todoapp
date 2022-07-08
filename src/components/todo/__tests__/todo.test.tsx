import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { ToDo } from "../todo";

describe("ToDo tests", () => {
  let button, input;

  beforeEach(() => {
    render(<ToDo />);
    button = screen.getByText("+");
    input = screen.getByTestId("input");
  });

  afterEach(() => {
    cleanup();
  });

  test("Test default tasks render", ()=>{
    const items = screen.getAllByText(/default/i);
    expect(items.length).toEqual(3)
  })

    test("matches snapshot", () => {
      const tree = renderer.create(<ToDo />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});
