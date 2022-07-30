import { navbarItems } from "../../models/constants";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbar__container">
      <h1 className="navbar__title">{navbarItems.title}</h1>
      <p className="navbar__description">{navbarItems.description}</p>
    </nav>
  );
};
