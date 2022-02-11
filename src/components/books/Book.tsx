import React from "react";

interface BookProps {
  title: string;
  image: string;
  category: string;
  handleViewBook: (id: string) => void;
  id: string;
}

const Book = ({ title, image, category, handleViewBook, id }: BookProps) => {
  return (
    <button onClick={() => handleViewBook(id)}>
      <div className="flex-item m-1">
        <img src={image} alt="Book Thumbnail" className="image" />
        <div className="p-1">
          <h3 className="title">{title}</h3>
          <div className="category">{category}</div>
        </div>
      </div>
    </button>
  );
};

export default Book;
