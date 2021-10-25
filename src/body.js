import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./styles.css";
// import Header from "./pages/Header/Header";
// import RouterConfig from "./RouterConfig";
// import { Route } from "react-router-dom";

function Body() {
  return (
    <>
      <div className="ElectronicStore">
        {/* <div>
          <Header />
        </div> */}
        <div className="Home">
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default Body;
