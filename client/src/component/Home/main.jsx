import React from "react";
import mainJPG from "../../Images/main.jpg";
import heroJpg1 from "../../Images/HomePage/home1x.png";
import heroJpg2 from "../../Images/HomePage/home2.png";
import heroJpg3 from "../../Images/HomePage/4599547.jpg";
import heroJpg4 from "../../Images/HomePage/hero4.jpg";
import Hero from "./hero";
import Flickitys from "./flickitys";
function Main() {
  return (
    <>
      <section
        className="main"
        data-scroll-section
        data-scroll-section-id="section1"
      >
        <div className="row">
          <div className="col-md-5 main__left">
            <div className="main__left--container">
              <div className="content">
                <div className="heading-group">
                  <h3 className="fadeIn">SUPPORT</h3>
                  <div className="dicription-main fadeIn">
                    <p>
                      SUPPORT is about action. Join us in supporting the next
                      generation of BIPOC visionaries.
                    </p>
                  </div>
                  <div className="butonAmimation fadeIn">
                    <p>Learn More</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 main__right ">
            <img src={mainJPG} alt="mainJPG" data-scroll />
          </div>
        </div>
      </section>
      <section
        className="main__hero"
        data-scroll-section
        data-scroll-section-id="section2"
      >
        <div className="row main__hero--container">
          <div className="main__hero--container__left col-md-6">
            <div className="content">
              <div className="heading-group ">
                <h2 className="fadeIn isread" data-scroll>
                  MINDFUL
                </h2>
                <div className="dicription fadeIn">
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
      <section
        className="main__change"
        data-scroll-section
        data-scroll-section-id="section1"
      >
        <div className="row main__change--container">
          <div className="main__change--container__left col-md-6">
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

            <img src={heroJpg3} alt="hero--left" data-scroll />
          </div>
          <div className="main__change--container__right col-md-6">
            <img src={heroJpg4} alt="hero--right" data-scroll />
          </div>
        </div>
      </section>
      <Hero />
      <Flickitys />
    </>
  );
}
export default Main;
