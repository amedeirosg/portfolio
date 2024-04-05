import Code from "../SVG/Code";
import BurgerMenu from "../SVG/BurgerMenu/BurgerMenu";
import CloseMenu from "../SVG/CloseMenu/CloseMenu";
import { useState } from "react";
import "./Header.css";
export default () => {
  const [menu, setMenu] = useState(<BurgerMenu />);

  function handleBurgerMenuClick() {
    var ul = document.querySelector(".list-nav");

    if (ul?.classList.contains("ativo")) {
      ul.classList.remove("ativo");
      setMenu(<BurgerMenu />);
    } else {
      ul?.classList.add("ativo");
      setMenu(<CloseMenu />);
    }
  }

  return (
    <div className="header">
      <header>
        <nav>
          <div className="logo">
            <Code />
            <h1>M D E V</h1>
          </div>
          <ul className="list-nav">
            <div className="list-li-spacement">
              <li>Knowledges</li>
              <li>Projects</li>
              <li>Contact</li>
            </div>
          </ul>
          <div onClick={handleBurgerMenuClick} id="menu">
            {menu}
          </div>
        </nav>
      </header>
    </div>
  );
};
