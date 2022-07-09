import React from "react";
import classes from "./App.module.scss";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";

function App() {
  return (
    <div className={classes.app}>
      <Filters />
      <Cards />
    </div>
  );
}

export default App;
