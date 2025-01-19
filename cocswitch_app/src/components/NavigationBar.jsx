import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/symptoms">Symptoms</a>
        </li>
      </ul>
      <div className="hamMenu" onClick={toggleMenuOpen}></div>
      <HamburgerMenu />
    </nav>
  );
}
export default NavigationBar;
