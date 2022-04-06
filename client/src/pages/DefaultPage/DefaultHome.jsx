import { Route } from "react-router-dom";
import NavBar from "../../component/Home/navBar";

import React, { useState, useRef, useEffect } from "react";

import "../../Styles/index.scss";
import Loading from "../../component/Loading/index";
import useLocalScroll from "../../hooks/useLocalScroll";


import SplitText from "../../utils/split3.min.js";
import gsap from "gsap";
import "swiper/swiper-bundle.css";
import "swiper/swiper.scss";

function DefaultHome({ component: Component, ...props }) {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);

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
    <Route
      {...props}
      render={(routerProps) => (
        <>
         {preloader ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          
        </>
      )}
        </>
      )}
    />
  );
}

export default DefaultHome;
