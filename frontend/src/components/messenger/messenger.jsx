import React from "react";
import s from "./messenger.module.scss";

const Messenger = (props) => {
  console.log(props);
  return (
    <div className={s.messengerWidth}>
      <section
        className={
          props.socket.id === props.item.sender
            ? s.sectionMessenger
            : s.sectionMessengerLeft
        }
      >
        <div className={s.main} onLoad={props.m}>
          <img
            className={s.userAvatar}
            src="https://place-hold.it/54"
            alt=""
          ></img>
          <div className={s.userContent}>
            <p className={s.userNick}>{props.item.id}</p>
            <p className={s.userText}>{props.item.body}</p>
          </div>
        </div>
        <div className={s.time}>
          <time>{props.item.time}</time>
        </div>
        {console.log(props.socket.id === props.item.sender)}
        {console.log(props.item.sender)}
        {console.log(props.socket.id)}
      </section>
    </div>
  );
};

export default Messenger;
