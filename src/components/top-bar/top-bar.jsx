import React from "react";
import s from "./top-bar.module.scss";

const TopBar = () => {
  return (
    <section>
      <div className={s.userBlock}>
        <div className={s.userState}>
          <div className={s.userImage}>
            <img src="https://place-hold.it/42" alt="" />
          </div>
          <div className={s.userContent}>
            <p className={s.userName}>Никита Рыбкин</p>
            <p className={s.userTitle}>last seen recently</p>
          </div>
        </div>
        <div className={s.userOptions}>
          <button className={s.buttonSearch}>
            <img className={s.imageSearch} src="/image/loupe.svg" height="18"></img>
          </button>
          <button className={s.buttonSearch}>
            <img className={s.imagePoint} src="/image/ellipsis-v-solid.svg" height="18"></img>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
