import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../navigation/Pagination";
import Book from "./Book";

interface BookProps {
  currentBooks: any;
  booksPerPage: number;
  totalBooks: any;
  paginate: any;
  handleViewBook: (id: string) => void;
  id: any;
  currentPage: number;
  currentAuthor: string;
  handleResetAuthor: () => void;
  handleSetAuthor: (name: string) => void;
}

const Books = ({
  currentBooks,
  booksPerPage,
  totalBooks,
  paginate,
  handleViewBook,
  id,
  currentPage,
  currentAuthor,
  handleResetAuthor,
  handleSetAuthor,
}: BookProps): JSX.Element => {
  const { author }: any = useParams();
  useEffect(() => {
    if (!author && currentAuthor) {
      handleResetAuthor();
    } else if (author && currentAuthor && author !== currentAuthor) {
      handleSetAuthor(author);
    }
  }, [author, currentAuthor, handleResetAuthor, handleSetAuthor]);

  return (
    <section>
      <h2 className="text-align-center">
        {currentAuthor ? currentAuthor : "My"} Books
      </h2>
      <div className="grid-container">
        {currentBooks.map((book: any, index: any) => {
          if (book.volumeInfo.imageLinks) {
            return (
              <Book
                title={book.volumeInfo.title}
                image={book.volumeInfo.imageLinks.thumbnail}
                category={book.volumeInfo.categories}
                key={index}
                handleViewBook={handleViewBook}
                id={book.id}
              />
            );
          }
        })}
      </div>
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={totalBooks}
        paginate={paginate}
        currentPage={currentPage}
      />
    </section>
  );
};

export default Books;
