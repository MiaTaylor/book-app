import React from "react";
import { Link } from "react-router-dom";
import NewBook from "./books/NewBook";

interface HomeProps {
  recentBooks: any;
  handleViewBook: (id: string) => void;
}

const Home = ({ recentBooks, handleViewBook }: HomeProps) => {
  return (
    <div className="main">
      <h1 className="text-align-center">Finding Books</h1>
      <div className="container-white-background">
        <div className="flex-row-between p-left-1 p-right-1">
          <h5>Recently Added</h5>
          <Link className="align-self-center" to="/books">
            See all
          </Link>
        </div>
        <ul className="flex-row-around">
          {recentBooks.map((recentBook: any, index: any) => {
            if (recentBook.volumeInfo.imageLinks) {
              return (
                <NewBook
                  title={recentBook.volumeInfo.title}
                  image={recentBook.volumeInfo.imageLinks.thumbnail}
                  key={index}
                  handleViewBook={handleViewBook}
                  id={recentBook.id}
                />
              );
            }
          })}
        </ul>
      </div>
      {/* <ul className="container-white-background m-top-1 p-1">
        <li>Authors</li>
        <li>Name</li>
        <li>Name</li>
      </ul>
      <ul className="container-white-background m-top-1 p-1">
        <li>Genre</li>
        <li>Category</li>
        <li>Category</li>
      </ul> */}
    </div>
  );
};

export default Home;
