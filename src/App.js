import React from "react";
// import HomePage from "./pages/homepage/homepage.component";
import "./styles.css";
import Header from "./pages/Header/Header";
import RouterConfig from "./RouterConfig";
// import { Route } from "react-router-dom";
// import Body from "./body";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <RouterConfig />
    </>
  );
}

export default App;
