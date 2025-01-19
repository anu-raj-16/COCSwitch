import { useState } from "react";
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
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/form">Form</a>
        </li>
      </ul>
    </div>
  );
}
export default NavigationBar;
