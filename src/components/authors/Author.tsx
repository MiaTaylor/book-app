import React from "react";

interface AuthorProps {
  authors: string[];
  currentBooks: any;
  handleViewBooksForAuthor: (name: string) => void;
}

const Author = ({
  authors,
  currentBooks,
  handleViewBooksForAuthor,
}: AuthorProps) => {
  return (
    <div className="m-1 bg-white">
      <div className="p-1">
        {authors.map((name) => {
          return (
            <h3
              className="title"
              onClick={() => handleViewBooksForAuthor(name)}
            >
              {name}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default Author;
