import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./navigation/menus/Menu";

function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-height">
      <header>
        <nav className="p-1">
          <ul className="flex-row-between">
            <li onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? (
                <i className="fal fa-bars"></i>
              ) : (
                <i className="fal fa-times"></i>
              )}
            </li>
            <li>
              <Link to="/account">
                <i className="fal fa-user-circle"></i>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`slide-down ${isOpen ? "show" : ""}`}>
          <div className={`slide-out ${isOpen ? "show-menu" : ""}`}>
            {isOpen && <Menu />}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
