import React from "react";
import s from "./navigation.module.scss";

const Navigation = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.backgroundImage}>
            <a href="#">
              <img className={s.image} src="/image/login.svg" height="18"></img>
            </a>
          </li>
          <li className={s.backgroundImage}>
            <a href="#">
              <img className={s.image} src="/image/call.svg" height="18"></img>
            </a>
          </li>
          <li className={s.backgroundImage}>
            <a href="#">
            <img className={s.image} src="/image/speech-bubble.svg" height="18"></img>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
