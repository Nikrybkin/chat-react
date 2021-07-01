import React from "react";
import ChatFilter from "../chat-filter";
import ChatList from "../chat-list";

const Aside = () => {
  return (
    <aside>
      <ChatFilter />
      <ChatList />
    </aside>
  );
};

export default Aside;
