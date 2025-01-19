import { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import "./NavigationBar.css";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  const currentStatus = menuOpen ? "open" : "default";
  return (
    <div className="navbar">
      <div className="hamMenu" onClick={toggleMenuOpen}>
        <HamburgerMenu />
      </div>
      <ul className={currentStatus}>
        <div className="container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
export default NavigationBar;
