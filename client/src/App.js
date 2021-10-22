import React, { useState, useRef, useEffect } from "react";

import "./Styles/index.scss";
import Loading from "./component/Loading";
import useLocalScroll from "./hooks/useLocalScroll";

import NavBar from "./component/Home/navBar";
import Main from "./component/Home/main";

function App() {
  const [preloading, setPreLoading] = useState(true);
  const [timer, setTimer] = useState(3);
  const id = useRef(null);
  const clearTime = () => {
    window.clearInterval(id.current);
    setPreLoading(false);
  };
  useLocalScroll(!preloading);
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1900);
  }, []);
  useEffect(() => {
    if (timer === 0) {
      clearTime();
    }
  }, [timer]);
  return (
    <>
      {preloading ? (
        <Loading />
      ) : (
        <div id="main_container" data-scroll-container>
          <NavBar />
          <Main />
        </div>
      )}
    </>
  );
}

export default App;
