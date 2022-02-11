import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Account from "../admin/Account";
import Authors from "../authors/Authors";
import BookDetails from "../books/book-details";
import Books from "../books/Books";
import Home from "../Home";

interface RouteProps {
  recentBooks: any;
  currentBooks: any;
  booksPerPage: number;
  totalBooks: any;
  paginate: any;
  handleViewBook: (id: string) => void;
  handleViewBooksForAuthor: (name: string) => void;
  id: any;
  currentPage: number;
  currentAuthor: any;
  handleResetAuthor: () => void;
  handleSetAuthor: (name: string) => void;
}

function Routes({
  recentBooks,
  currentBooks,
  booksPerPage,
  totalBooks,
  paginate,
  handleViewBook,
  handleViewBooksForAuthor,
  id,
  currentPage,
  currentAuthor,
  handleResetAuthor,
  handleSetAuthor,
}: RouteProps) {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <Switch>
      <Route path="/book-details/:id">
        <BookDetails currentBooks={currentBooks} />
      </Route>
      <Route exact path="/">
        <Home recentBooks={recentBooks} handleViewBook={handleViewBook} />
      </Route>
      <Route path="/account">
        <Account />
      </Route>
      <Route path="/books/:author?">
        <Books
          currentBooks={currentBooks}
          booksPerPage={booksPerPage}
          totalBooks={totalBooks}
          paginate={paginate}
          handleViewBook={handleViewBook}
          id={id}
          currentPage={currentPage}
          currentAuthor={currentAuthor}
          handleResetAuthor={handleResetAuthor}
          handleSetAuthor={handleSetAuthor}
        />
      </Route>
      <Route exact path="/authors">
        <Authors
          currentBooks={currentBooks}
          handleViewBooksForAuthor={handleViewBooksForAuthor}
          handleResetAuthor={handleResetAuthor}
          currentAuthor={currentAuthor}
        />
      </Route>
    </Switch>
  );
}

export default Routes;
