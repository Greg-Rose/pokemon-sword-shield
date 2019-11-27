import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pokemon from "../Pokemon";
import Search from "../Search";
import styles from "./styles.module.css";

const text = {
  headerImg:
    "https://gamespot1.cbsistatic.com/uploads/original/1578/15787979/3558337-sword%20shield%20legendaries.png",
  headerImgAlt: "Pokemon Sword and Shield"
};

const App = () => (
  <div className={styles.root}>
    <Router>
      <Link to="/">
        <img
          className={styles.headerImg}
          src={text.headerImg}
          alt={text.headerImgAlt}
        />
      </Link>
      <Search />
      <Switch>
        <Route path="/pokemon/:name" component={Pokemon} />
      </Switch>
    </Router>
  </div>
);

export default App;
