import React from "react";
import mainJPG from "../../Images/main.jpg";
function Main() {
  return (
    <section className="main" data-scroll-section>
      <div className="row">
        <div className="col-md-5 main__left">
          <div className="main__left--container">
            <h3 >SUPPORT</h3>
            <p>
              SUPPORT is about action. Join us in supporting the next generation
              of BIPOC visionaries.
            </p>
          </div>
        </div>
        <div className="col-md-7 main__right">
          <img src={mainJPG} alt="mainJPG" />
        </div>
      </div>
    </section>
  );
}
export default Main;
