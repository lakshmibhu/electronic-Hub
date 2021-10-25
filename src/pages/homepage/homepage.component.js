import React from "react";
import Directory from "../../chaild-components/directory/directory.component";
// import Menu1 from "../../Ass1/components/Menu1";
// import ProductInfo from "../../Ass1/components/Product-info";
// import "../../Ass1/components/Product.css";
import Deals from "../../chaild-components/deals/Deals";
import { Container, Row } from "react-bootstrap";

function HomePage() {
  return (
    <Container>
      <div className="homepage-component">
        <div>
          <Directory />
        </div>
        <br />
        <br />
        <div>
          <h2 align="center">Deals of the day</h2>
          <Deals />
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
