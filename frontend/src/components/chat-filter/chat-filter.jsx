import React from "react";
import s from "./chat-filter.module.scss"


const ChatFilter = () => {
  return (
    <section className={s.chatFilter}>
      <div className={s.burgerBackground}>
        <div className={s.burger}></div>
      </div>
      <div className={s.inputFilter}>
        <button className={s.buttonFilter}>
          <img className={s.imageSearch} src="/image/loupe.svg" height="18"></img>
        </button>
        <input
          className={s.inputFilterSearch}
          type="text"
          placeholder="Search"
        ></input>
      </div>
    </section>
  );
};

export default ChatFilter;
