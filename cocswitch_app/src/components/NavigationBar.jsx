import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import "./NavigationBar.css";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  const currentStatus = menuOpen ? "open" : "default";
  return (
    <Router>
      <div className="navbar">
        <div className="hamMenu" onClick={toggleMenuOpen}>
          <HamburgerMenu />
        </div>
        <ul className={currentStatus}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}
export default NavigationBar;
