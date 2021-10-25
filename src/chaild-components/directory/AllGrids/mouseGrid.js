import React from "react";

import { Col, Row, Container } from "react-bootstrap";

class Mouse extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {
          name: "SuperLight",
          id: 1,
          cost: "$20",
          image: (
            <img
              src="https://i.pcmag.com/imagery/roundups/05WZZW0W25KbIOxT55uBdb6-3.fit_lim.size_1050x.jpg"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "Hp",
          id: 2,
          cost: "$22",
          image: (
            <img
              src="https://5.imimg.com/data5/JQ/OF/MY-50737849/wireless-mouse-500x500.jpg"
              width="300"
              height="300"
            />
          )
        },

        {
          name: "G pro",
          id: 3,
          cost: "$18",
          image: (
            <img
              src="https://m.media-amazon.com/images/I/51iRyfBZtfS._AC_SL1204_.jpg"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "Logitech",
          id: 4,
          cost: "$20",
          image: (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iTdmmD0W229yjMPSUztZdKmweOxv22BM4Q&usqp=CAU"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "philips",
          id: 5,
          cost: "$25",
          image: (
            <img
              src="https://images.philips.com/is/image/PhilipsConsumer/SPM4701BB_97-IMS-en_IN?$jpglarge$&wid=1250"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "Apple",
          id: 6,
          cost: "$35",
          image: (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Apple-mouse.jpg/450px-Apple-mouse.jpg"
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
            Best of Mouse
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
export default Mouse;
