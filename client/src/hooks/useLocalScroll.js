import { useEffect } from "react";
import LocalScroll from "locomotive-scroll";

export default function useLocalScroll(start) {
  useEffect(() => {
    if (!start) return;
    const localEL = document.querySelector("#main_container");
    const local = new LocalScroll({
      el: localEL,
      mooth: true,
      multiplier: 1,
      class: "is-reveal",
      smartphone: {
        smooth: true,
      },
      getDirection: true,
      getSpeed: true,
    });
  }, [start]);
}
