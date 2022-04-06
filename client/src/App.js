import React, { useState, useRef, useEffect, useCallback } from "react";

import "./Styles/index.scss";
import Loading from "./component/Loading";
import useLocalScroll from "./hooks/useLocalScroll";

import { Router, Switch, Route, Link } from "react-router-dom";
import SplitText from "./utils/split3.min.js";
import gsap from "gsap";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/swiper.scss";
import NavBar from "./component/Home/navBar";
function App() {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);
  const [isShowHeader, setIsShowHeader] = useState(false);

  const [activePage, setActivePage] = useState("/");

  const handelActiveNav = useCallback(() => {
    setIsShowHeader(!isShowHeader);
  }, [isShowHeader]);
  useLocalScroll(!preloader);

  useEffect(() => {
    const split = new SplitText(".fadeIn", {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent = new SplitText(".fadeIn", {
      type: "lines",
      linesClass: "lineParent",
    });
    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power2",
    });
    gsap.to(splitParent.lines, {
      ease: "power2",
    });
  });
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

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1800);
    return () => clear();
  }, []);

  useEffect(() => {
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
          <HomePage />
        </>
      )}
    </>
  );
}

export default App;
