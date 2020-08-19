import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FaCameraRetro } from "react-icons/fa";

import Header from "./components/Header";
import FeedPage from "./components/FeedPage";
import DetailPage from "./components/DetailPage";
import UploadPage from "./components/UploadPage";

function App() {
  return (
    <Router>
      <Link to="/">
        <Header />
      </Link>

      <Switch>
        <Route path="/post/:id">
          <DetailPage />
        </Route>
        <Route path="/upload">
          <UploadPage />
        </Route>
        <Route path="/">
          <Link to="/upload">
            <FaCameraRetro />
          </Link>
          <FeedPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
