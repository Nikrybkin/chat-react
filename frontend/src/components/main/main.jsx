import React from "react";
import TopBar from "../top-bar";
import WindowChat from "../window-chat";
import s from "./main.module.scss"

const Main = () => {
  return (
    <main className={s.backgroundMain}>
      <TopBar />
      <WindowChat />
    </main>
  );
};

export default Main;
