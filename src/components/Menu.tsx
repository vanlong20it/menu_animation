import React, { useEffect } from "react";

const Menu = () => {
  useEffect(() => {
    const navbar = document.getElementsByClassName("navbar")[0] as any;
    if (navbar) {
      Array.from(document.getElementsByClassName("nav-item")).forEach(
        (item, index) => {
          item.addEventListener("mouseover", () => {
            navbar.dataset.activeIndex = index;
          });
        }
      );
    }
  }, []);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">Our DNA</li>
        <li className="nav-item">Approach</li>
        <li className="nav-item">Team</li>
        <li className="nav-item">Company</li>
      </ul>
      <div id="bg-pattern"></div>
      <div id="bg-image"></div>
      <p className="copyright">vanlong20it</p>
    </nav>
  );
};

export default Menu;
