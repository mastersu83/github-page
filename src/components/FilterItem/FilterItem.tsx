import React, { ChangeEvent, FC, useState } from "react";
import classes from "./FilterItem.module.scss";

type PropsTypes = {
  filter: string;
};

const FilterItem: FC<PropsTypes> = ({ filter }) => {
  const [check, setCheck] = useState<boolean>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);
    console.log(filter);
  };

  // const onCheck = () => {
  //   setCheck(!check);
  // };
  return (
    <li className={classes.filters__item}>
      <label className={classes.checkBox}>
        <input
          // onClick={onCheck}
          onChange={onChange}
          checked={check}
          type="checkbox"
        />
        <span className={classes.custom_checkbox} />
        <p className={classes.checkbox_text}>{filter}</p>
      </label>
    </li>
  );
};

export default FilterItem;
