import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside>
      <nav>
        <div className={`my-navbar-collapse ${isOpen ? "show" : ""}`}>
          {isOpen && <div>About Section?</div>}
        </div>
        <ul className="flex-row-even">
          <li>
            <Link className="align-center tooltip" to="/">
              <span className="tooltip-text">Home</span>
              <i className="fal fa-home"></i>
            </Link>
          </li>
          <li>
            <Link className="align-center tooltip" to="/books">
              <span className="tooltip-text">Books</span>
              <i className="fa-light fa-book"></i>
            </Link>
          </li>
          <li>
            <Link className="align-center tooltip" to="/authors">
              <span className="tooltip-text">Authors</span>
              <i className="fal fa-book-user"></i>
            </Link>
          </li>
          <li>
            <Link className="align-center tooltip" to="/favourites">
              <span className="tooltip-text">Favourites</span>
              <i className="fa-light fa-heart"></i>
            </Link>
          </li>
          <li>
            <Link className="align-center tooltip" to="/reading-list">
              <span className="tooltip-text">Reading List</span>
              <i className="fal fa-books"></i>
            </Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? (
              <i className="fa-light fa-chevron-up"></i>
            ) : (
              <i className="fa-light fa-chevron-down"></i>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Dashboard;
