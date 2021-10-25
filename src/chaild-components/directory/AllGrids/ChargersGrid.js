import React from "react";

import { Col, Row, Container } from "react-bootstrap";

class Speakers extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {
          name: "Samsung",
          id: 1,
          cost: "$4",
          image: (
            <img
              src="https://5.imimg.com/data5/HN/NI/MY-22129772/samsung-mobile-charger-500x500.jpg"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "philips",
          id: 2,
          cost: "$8",
          image: (
            <img
              src="https://images.philips.com/is/image/PhilipsConsumer/DLP2553_97-IMS-en_IN?$jpglarge$&wid=1250"
              width="300"
              height="300"
            />
          )
        },

        {
          name: "boat",
          id: 3,
          cost: "$3",
          image: (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8-m54WwNxGTQT1Qx7ZVy2Hs4M1SQbGTO6JA&usqp=CAU"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "Realme",
          id: 4,
          cost: "$12",
          image: (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbhiscy8Yd86_d3HHJM0qdGHipaLUv93i7Mw&usqp=CAU"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "Readme",
          id: 5,
          cost: "$7",
          image: (
            <img
              src="https://m.media-amazon.com/images/I/71hBSSCMbWL._SL1500_.jpg"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "Iphone",
          id: 6,
          cost: "$9",
          image: (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXU0aGlYSod_EX5dxfjGtClVgwNxrsHojIyQ&usqp=CAU"
              width="300"
              height="300"
            />
          )
        }
      ]
    };
  }
  render() {
    return (
      <div className="Deals-Component">
        <div className="Deals-Items">
          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
            {" "}
            Best of Chargers
          </h1>
          {
            <Container>
              <Row className="col">
                <Col>
                  <div className="DealsImages">
                    <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                      {" "}
                      {this.state.categories[0].name}{" "}
                      {this.state.categories[0].cost}
                    </div>
                    <div style={{ width: "100%" }}>
                      {" "}
                      {this.state.categories[0].image}
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="DealsImages">
                    <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                      {" "}
                      {this.state.categories[1].name}{" "}
                      {this.state.categories[1].cost}
                    </div>
                    <div> {this.state.categories[1].image}</div>
                  </div>
                </Col>
                <Col>
                  <div className="DealsImages">
                    <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                      {" "}
                      {this.state.categories[2].name}{" "}
                      {this.state.categories[2].cost}
                    </div>
                    <div> {this.state.categories[2].image}</div>
                  </div>
                </Col>
              </Row>
              <Row className="col">
                <Col>
                  <div className="DealsImages">
                    <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                      {" "}
                      {this.state.categories[3].name}{" "}
                      {this.state.categories[3].cost}
                    </div>
                    <div style={{ width: "100%" }}>
                      {" "}
                      {this.state.categories[3].image}
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="DealsImages">
                    <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                      {" "}
                      {this.state.categories[4].name}{" "}
                      {this.state.categories[4].cost}
                    </div>
                    <div> {this.state.categories[4].image}</div>
                  </div>
                </Col>
                <Col>
                  <div className="DealsImages">
                    <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                      {" "}
                      {this.state.categories[5].name}{" "}
                      {this.state.categories[5].cost}
                    </div>
                    <div> {this.state.categories[5].image}</div>
                  </div>
                </Col>
              </Row>
            </Container>
          }
        </div>
      </div>
    );
  }
}
export default Speakers;
