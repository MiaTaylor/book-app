import React from "react";

const Search = ({ getSearch, updateSearch }: any) => {
  return (
    <form onSubmit={getSearch} className="search-form">
      <input
        className="search"
        type="text"
        onChange={updateSearch}
        placeholder="Search books by title, author, genre..."
        disabled={!updateSearch}
      />
      <button type="submit" className="search-btn">
        <i className="fal fa-search"></i>
      </button>
    </form>
  );
};

export default Search;
