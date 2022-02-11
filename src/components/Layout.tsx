import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ErrorLoading from "./ErrorLoading";
import Header from "./Header";
import Loading from "./Loading";
import Dashboard from "./navigation/menus/Dashboard";
import Routes from "./routing/Routes";
import Search from "./Search";

const Layout = (): JSX.Element => {
  const APP_KEY = "AIzaSyC010rWepLYIurU5TbcJx1fTiyUw5fYSL8";

  const [books, setBooks] = useState([]);
  const [recentBooks, setRecentBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("art");
  const [currentAuthor, setCurrentAuthor] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);
  const [id, setId] = useState();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const response: any = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&key=${APP_KEY}`
        );
        console.log(response.data.items);
        setId(response.data.items.id);
        setBooks(response.data.items);
        setRecentBooks(response.data.items.slice(0, 2));
        setLoading(false);
      } catch (err: any) {
        setError(err);
      }
    }
    getData();
  }, [query, id]);

  if (loading) {
    return <Loading />;
  }

  if (error || !Array.isArray(books)) {
    return <ErrorLoading />;
  }

  // Search
  const updateSearch = (e: any) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e: any) => {
    e.preventDefault();
    setQuery(search);
    history.push("/books");
  };

  // onClick to book details

  const handleViewBook = (id: string) => {
    history.push(`/book-details/${id}`);
  };

  const handleViewBooksForAuthor = (name: string) => {
    setQuery("inauthor:" + name);
    setCurrentAuthor(name);
    history.push(`/books/${name}`);
  };

  // Reset the author when clicking on Authors

  const handleResetAuthor = () => {
    setQuery("inauthor:");
    setCurrentAuthor("");
  };

  // Sets the Author

  const handleSetAuthor = (name: string) => {
    setQuery("inauthor:" + name);
    setCurrentAuthor(name);
  };

  // Pagination

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  return (
    <div className="layout">
      <Header />
      {location.pathname === "/account" ? null : (
        <Search getSearch={getSearch} updateSearch={updateSearch} />
      )}
      <Routes
        recentBooks={recentBooks}
        currentBooks={currentBooks}
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        paginate={paginate}
        handleViewBook={handleViewBook}
        id={id}
        currentPage={currentPage}
        handleViewBooksForAuthor={handleViewBooksForAuthor}
        currentAuthor={currentAuthor}
        handleResetAuthor={handleResetAuthor}
        handleSetAuthor={handleSetAuthor}
      />
      <Dashboard />
    </div>
  );
};

export default Layout;
