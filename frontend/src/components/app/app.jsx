import React, { useEffect } from "./app";
import Navigation from "../navigation";
import Aside from "../aside";
import Main from "../main";
import s from "./app.module.scss";

const App = () => {
  return (
    <div>
      <div className={s.app}>
        <Aside></Aside>
        <Navigation />
        <Main></Main>
      </div>
    </div>
  );
};

export default App;
