import React from "react";
import Main from "../component/Home/main";

function HomePage({ ref }) {
  return (
    <>
      <div
        id="main_container"
        data-scroll-container
        data-scroll-direction="vertical"
        ref={ref}
        style={{ scrollBehavior: "auto" }}
      >
        <Main />
      </div>
    </>
  );
}

export default HomePage;
