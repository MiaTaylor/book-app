import React from "react";

interface NewBookProps {
  title: string;
  image: any;
  handleViewBook: (id: string) => void;
  id: any;
}

const NewBook = ({ title, image, handleViewBook, id }: NewBookProps) => {
  return (
    <button onClick={() => handleViewBook(id)}>
      <div>
        <img src={image} alt="Book Thumbnail" className="recent-image" />
        <p className="recent-title">{title}</p>
      </div>
    </button>
  );
};

export default NewBook;
