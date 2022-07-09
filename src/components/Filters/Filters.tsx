import React from "react";
import classes from "./Filters.module.scss";
import FilterItem from "../FilterItem/FilterItem";

const filters = [
  {
    id: 1,
    title: "Language",
    items: ["javascript", "go", "python"],
  },
  {
    id: 2,
    title: "Forks count",
    items: ["forks"],
  },
  {
    id: 3,
    title: "Fork star",
    items: ["stars"],
  },
  {
    id: 4,
    title: "Fork",
    items: ["Да", "Нет"],
  },
  {
    id: 5,
    title: "Create data",
    items: ["updated"],
  },
  {
    id: 6,
    title: "Sort",
    items: ["desc", "asc"],
  },
];

const Filters = () => {
  return (
    <div className={classes.filters}>
      {filters.map((f, index) => (
        <div className={classes.filter}>
          <div key={index} className={classes.filters__title}>
            {f.title}:
          </div>
          <ul className={classes.filters__items}>
            {f.items.map((fil, index) => (
              <FilterItem key={index} filter={fil} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Filters;
