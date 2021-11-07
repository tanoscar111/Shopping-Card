import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
export default function useLocalScroll(start) {
  useEffect(() => {
    if (!start) return;
    const localEL = document.querySelector("[data-scroll-container]");
    const local = new LocomotiveScroll({
      el: localEL,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });
    local.scrollTo(localEL);
  }, [start]);
  
}
