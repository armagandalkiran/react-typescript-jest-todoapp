import { render, screen } from "@testing-library/react";
import { navbarItems } from "../../../models/constants";
import renderer from "react-test-renderer";
import { Navbar } from "../navbar";

describe("Navbar tests", () => {
  test("should render navbar component", () => {
    render(<Navbar />);
    const navbarTitleElement = screen.getByText(navbarItems.title, {
      exact: false,
    });
    const navbarDescriptionElement = screen.getByText(navbarItems.description, {
      exact: false,
    });
    expect(navbarTitleElement).toHaveTextContent(/Armagan's ToDo Project/i);
    expect(navbarDescriptionElement).toHaveTextContent(
      /Purpose on this project to learn how react-testing-library and jest work/i
    );
  });

  test("matches snapshot", () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
