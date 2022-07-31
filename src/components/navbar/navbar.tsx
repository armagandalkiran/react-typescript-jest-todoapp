import { navbarItems } from "../../models/constants";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <section className="navbar__section">
      <nav className="navbar__container">
        <h1 className="navbar__title">{navbarItems.title}</h1>
        <p className="navbar__description">{navbarItems.description}</p>
      </nav>
    </section>
  );
};
