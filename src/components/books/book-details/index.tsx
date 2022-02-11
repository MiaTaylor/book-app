import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import View from "./View";

interface BooksDetailsProps {
  currentBooks: any;
}

const BookDetails = ({ currentBooks }: BooksDetailsProps) => {
  const { id }: any = useParams();
  const [selectedBook, setSelectedBook] = useState<any>();

  useEffect(() => {
    const bookIndex: number = currentBooks.findIndex(
      (x: { id: any }) => x.id === id
    );
    if (bookIndex !== -1) {
      setSelectedBook(currentBooks[bookIndex]);
    }
  }, [id, currentBooks]);

  const log = useCallback((value: any) => {
    console.log(value);
  }, []);

  return (
    <>
      {selectedBook && (
        <View
          thumbnail={selectedBook.volumeInfo.imageLinks.thumbnail}
          title={selectedBook.volumeInfo.title}
          categories={selectedBook.volumeInfo.categories}
          description={selectedBook.volumeInfo.description}
          log={log}
        />
      )}
    </>
  );
};

export default BookDetails;
