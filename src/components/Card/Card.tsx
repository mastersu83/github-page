import React, { FC } from "react";
import classes from "./Card.module.scss";
import { ReposType } from "../../types/DataTypes";

const Card: FC<ReposType> = ({ owner, language, forks, forks_count, fork }) => {
  return (
    <div className={classes.card__user}>
      <div className={classes.card__userInfo}>
        <div className={classes.card__userData}>
          <h1 className={classes.card__userName}>{owner.login}</h1>
        </div>
        <div className={classes.card__userImage}>
          <img
            className={classes.card__imageAvatar}
            src={owner.avatar_url}
            alt=""
          />
        </div>
      </div>
      <ul className={classes.card__userStats}>
        <li className={classes.card__userStatsItem}>
          Язык
          <br />
          <span>{language}</span>
        </li>
        <li className={classes.card__userStatsItem}>
          Forks
          <br />
          <span>{forks}</span>
        </li>
        <li className={classes.card__userStatsItem}>
          Forks count
          <br />
          <span>{forks_count}</span>
        </li>
        <li className={classes.card__userStatsItem}>
          Fork
          <br />
          <span>{fork ? "Да" : "Нет"}</span>
        </li>
      </ul>
      {/*<ul className={classes.card__userStats}>*/}
      {/*  <li className={classes.card__userStatsItem}>*/}
      {/*    Репозитории*/}
      {/*    <br />*/}
      {/*    <span>{user?.public_repos}</span>*/}
      {/*  </li>*/}
      {/*  <li className={classes.card__userStatsItem}>*/}
      {/*    Подписчиков*/}
      {/*    <br />*/}
      {/*    <span>{user?.followers}</span>*/}
      {/*  </li>*/}
      {/*  <li className={classes.card__userStatsItem}>*/}
      {/*    Фоловеров*/}
      {/*    <br />*/}
      {/*    <span>{user?.following}</span>*/}
      {/*  </li>*/}
      {/*</ul>*/}
      {/*<ul className={classes.card__userLocation}>*/}
      {/*  <li className={classes.card__userLocationItem}>{user?.location}</li>*/}
      {/*  <li className={classes.card__userLocationItem}>*/}
      {/*    <a href={user?.html_url}>{user?.html_url}</a>*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </div>
  );
};

export default Card;
