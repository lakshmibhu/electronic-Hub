import React from "react";
import { Link } from "react-router-dom";
// import FanGrid from "../directory/AllGrids/FanGrid";

function MenuItem(props) {
  // console.log(props);
  return (
    <div className="menuitem-component">
      <Link to={props.categoryname.linkUrl}>
        <div className="NameCost">
          {" "}
          <h3
            style={{ fontSize: "30px", fontWeight: "bold", color: "purple" }}
            t
          >
            {props.categoryname.name} {props.categoryname.cost}
          </h3>
        </div>
        <img src={props.categoryname.imageUrl} alt="src" className="menu-img" />
      </Link>
    </div>
  );
}

export default MenuItem;
