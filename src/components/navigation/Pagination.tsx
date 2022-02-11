import React from "react";

interface PaginationProps {
  booksPerPage: number;
  totalBooks: number;
  paginate: any;
  currentPage: number;
}

const Pagination = ({
  booksPerPage,
  totalBooks,
  paginate,
  currentPage,
}: PaginationProps): JSX.Element => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination flex-row-even">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <span
              className={`page-link ${
                currentPage === number ? "active-link" : ""
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
