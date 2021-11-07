import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import gsap from "gsap";
import SplitText from "../../utils/split3.min.js";
import useOnScreen from "../../hooks/useOnScreen";

export default function Hero() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
        // onComplete: () => split.revert(),
      });
    }
  }, [reveal]);

  return (
    <section className={"about-section"} data-scroll-section>
      <div className={cn("about-section--container", { "is-reveal": reveal })}>
        <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
          A community of visionaries in motion With a collaborative connection
          between community and creators we strive to design the best bags for
          people reimagining the workplace. Equip and inspire
        </p>
      </div>
    </section>
  );
}
