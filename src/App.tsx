import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Layout from "./components/Layout";

const App: any = () => {
  return (
    <main className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Books</title>
        <link rel="canonical" href="" />
        <script
          src="https://kit.fontawesome.com/5d3f893ee0.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <div className="container">
        <Layout />
      </div>
    </main>
  );
};

export default App;
