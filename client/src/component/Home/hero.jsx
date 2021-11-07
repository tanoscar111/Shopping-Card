import React from "react";

import heroJpg1 from "../../Images/HomePage/home1x.png";
import heroJpg2 from "../../Images/HomePage/home2.png";

function Hero() {
  return (
    <>
      <section className="main__hero" data-scroll-section>
        <div className="row main__hero--container">
          <div className="main__hero--container__left col-md-6">
            <div className="content">
              <div className="heading-group">
                <h2>MINDFUL</h2>
                <div className="dicription">
                  <p>
                    Daily reminders to practice being present. Proceeds donated
                    to raising awareness on mental health.
                  </p>
                </div>
                <div className="butonAmimation">
                  <p>Learn More</p>
                </div>
              </div>
            </div>
            <img src={heroJpg1} alt="hero--left" data-scroll />
          </div>
          <div className="main__hero--container__right col-md-6">
            <img src={heroJpg2} alt="hero--right" data-scroll />
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
