import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Navbar } from "../navbar";

describe("Navbar tests", () => {
  test("should render navbar component", () => {
    render(<Navbar />);
    const navbarTitleElement = screen.getByText("My ToDo List", {
      exact: false,
    });
    const navbarDescriptionElement = screen.getByText(
      "welcome to todolist with typescript and jest",
      { exact: false }
    );
    expect(navbarTitleElement).toHaveTextContent(/My ToDo List/i);
    expect(navbarDescriptionElement).toHaveTextContent(
      /welcome to todolist with typescript and jest/i
    );
  });

  test("matches snapshot", () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
