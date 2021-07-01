import React, { useState, useEffect } from "react";
import s from "./window-chat.module.scss";
import Messenger from "../messenger";
import socketClient from "socket.io-client";
import "./index";

const SERVER = "http://localhost:8000";
const socket = socketClient(SERVER);
let tracking = document.getElementById("tracking");

const WindowChat = () => {
  let [userId, setUserId] = useState(null);
  useEffect(() => {
    socket.on("connected", (socketId) => {
      setUserId(socketId);

      console.log("Socket is running...");
    });
    socket.on("disconnect", () => {
      console.log("Socket is disconnect...");
    });
  }, []);

  let [message, setMessage] = useState("");
  let [messages, setMessages] = useState([]);
  let [typing, setTyping] = useState("");
  let [time, setTime] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    setMessage("");
  };

  const onKeyPress = (e) => {
    if (e) {
      // console.log(e)
      console.log(tracking);
      socket.emit("typing", e.target.value);
      clearInterval(time);
      setTime(setTimeout(timeoutFunction, 2000));
    }
  };

  const messageFunc = (message, id) => {
    let time = new Date();
    const newMessage = {
      id: Date.now(),
      time: `${time.getHours()}:${time.getMinutes()}`,
      body: message,
      created_at: Date.now(),
      updated_at: null,
      sender: id,
    };
    setMessages((spread) => {
      return [...spread, newMessage];
    });
  };

  useEffect(() => {
    socket.on("message", (data) => {
      messageFunc(data.body, data.id);
      // console.log(data.id);
    });
  }, []);

  function timeoutFunction() {
    socket.emit("typing", false);
  }

  socket.on("typing", function (data) {
    // console.log("User is typing a message...");
    if (data) {
      setTyping("Печатает...");
      console.log(typing);
    } else {
      setTyping("");
    }
  });

  return (
    <div className={s.windowChat}>
      <div className={s.windowBlock}>
        <div id="m" className={s.messages}>
          {messages.map((item) => {
            return (
              <Messenger
                userId={userId}
                key={item.id}
                socket={socket}
                item={item}
                m={() =>
                  document.getElementById("m").lastChild.scrollIntoView(true)
                }
              />
            );
          })}
        </div>
      </div>
      <div className={s.inputChat}>
        <div id="tracking" className={s.tracking}>
          {typing}
        </div>
        <form id="form" onSubmit={onSubmit} className={s.inputChat}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="messageInput"
            placeholder="Введите сообщение..."
            className={s.inputField}
            onKeyUp={onKeyPress}
          />
          <button className={s.sendBlock} id="btn">
            <img
              className={s.send}
              src="/image/send.svg"
              height="18"
              alt=""
            ></img>
          </button>
        </form>
      </div>
    </div>
  );
};

export default WindowChat;
