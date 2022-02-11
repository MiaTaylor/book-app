import React from "react";
import { Link } from "react-router-dom";

function Menu(): JSX.Element {
  return (
    <nav className="nav-menu">
      <ul>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/authors">Authors</Link>
        </li>
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
        <li>
          <Link to="/reading-list">Reading List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
