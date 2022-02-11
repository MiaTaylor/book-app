import React, { useEffect } from "react";
import Author from "./Author";

interface AuthorsProps {
  currentBooks: any;
  handleViewBooksForAuthor: (name: string) => void;
  currentAuthor: string;
  handleResetAuthor: () => void;
}

const Authors = ({
  currentBooks,
  handleViewBooksForAuthor,
  handleResetAuthor,
  currentAuthor,
}: AuthorsProps) => {
  useEffect(() => {
    if (currentAuthor) {
      handleResetAuthor();
    }
  }, [currentAuthor, handleResetAuthor]);
  return (
    <section>
      <h2 className="text-align-center">Authors</h2>
      <div className="grid-container">
        {currentBooks.map((author: any, index: any) => {
          if (author.volumeInfo.authors) {
            return (
              <Author
                authors={author.volumeInfo.authors}
                key={index}
                handleViewBooksForAuthor={handleViewBooksForAuthor}
                currentBooks={currentBooks}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default Authors;
