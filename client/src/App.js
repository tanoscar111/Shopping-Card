import React, { useState, useRef, useEffect } from "react";

import "./Styles/index.scss";
import Loading from "./component/Loading";
import useLocalScroll from "./hooks/useLocalScroll";

import NavBar from "./component/Home/navBar";
import Main from "./component/Home/main";

function App() {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);

  useLocalScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(3);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1800);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }
  return (
    <>
      {preloader ? (
        <Loading />
      ) : (
        <>
          <div
            id="main_container"
            data-scroll-container
            data-scroll-direction="vertical"
            ref={ref}
            style={{  scrollBehavior: "auto" }}
          >
            <NavBar />
            <Main />
          </div>
        </>
      )}
    </>
  );
}

export default App;
