import React, { FC } from "react";
import classes from "./FilterItem.module.scss";

type PropsTypes = {
  filter: string;
  index: number;
  checkName: number;
  onClickChecked: (index: number) => void;
};

const FilterItem: FC<PropsTypes> = ({
  filter,
  index,
  onClickChecked,
  checkName,
}) => {
  return (
    <li className={classes.filters__item}>
      <label className={classes.checkBox}>
        <input
          onClick={() => onClickChecked(index)}
          checked={checkName === index}
          type="checkbox"
          name={filter}
        />
        <span className={classes.custom_checkbox} />
        <p className={classes.checkbox_text}>{filter}</p>
      </label>
    </li>
  );
};

export default FilterItem;
