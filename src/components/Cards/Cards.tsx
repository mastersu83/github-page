import React, { ChangeEvent } from "react";
import classes from "./Cards.module.scss";

import axios from "axios";
import { ReposType, ResponseTypes } from "../../types/DataTypes";
import Card from "../Card/Card";

const Cards = () => {
  const [user, setUser] = React.useState<ResponseTypes>();
  const [input, setInput] = React.useState("");
  const [userLogin, setUserLogin] = React.useState("");
  const [state, setState] = React.useState({
    isLoaded: false,
    isUser: false,
    disable: false,
    userNotFind: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const getUserOnClick = () => {
    setUserLogin(input);
  };

  const getUser = async () => {
    try {
      setState({
        ...state,
        isLoaded: true,
        disable: true,
        isUser: false,
        userNotFind: false,
      });
      await axios
        .get(
          `https://api.github.com/search/repositories?q=${userLogin}&per_page=10`
        )
        .then((res) => setUser(res.data));
      setState({
        ...state,
        isLoaded: false,
        disable: false,
        isUser: true,
        userNotFind: false,
      });
    } catch (e: any) {
      setState({ ...state, userNotFind: true, isUser: false, disable: false });
      console.log(e.message);
    }
  };

  React.useEffect(() => {
    let login = window.location.href.split("=");
    if (login[1]) {
      setUserLogin(login[1]);
      setInput(login[1]);
    }
  }, []);

  React.useEffect(() => {
    if (userLogin) {
      let pathName = `${window.location.pathname}?login=${userLogin}`;
      window.history.pushState(null, document.title, pathName);
      getUser();
    }
  }, [userLogin]);

  return (
    <div className={classes.card}>
      {state.isLoaded && <div>Загрузка...</div>}
      <div className={classes.card__searchBlock}>
        <input
          onChange={handleInputChange}
          type="text"
          className={classes.card__input}
          placeholder="Укажите GitHub-аккаунт"
          value={input}
        />
        <button
          onClick={getUserOnClick}
          disabled={state.disable}
          className={classes.card__searchBtn}
        >
          Найти
        </button>
      </div>
      {state.userNotFind && <div>Пользователь не найден</div>}
      {state.isUser &&
        user &&
        user.items.map((repo: ReposType) => <Card key={repo.id} {...repo} />)}
    </div>
  );
};

export default Cards;
