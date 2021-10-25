import React from "react";

import { Col, Row, Container } from "react-bootstrap";

class Speakers extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {
          name: "Sony",
          id: 1,
          cost: "$14",
          image: (
            <img
              src="https://5.imimg.com/data5/FR/HQ/LM/SELLER-29542680/980x-500x500.jpg"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "philips",
          id: 2,
          cost: "$18",
          image: (
            <img
              src="https://5.imimg.com/data5/IC/BL/MY-8338199/philips-bluetooth-speaker-bt6000a-500x500.jpeg"
              width="300"
              height="300"
            />
          )
        },

        {
          name: "Samsung",
          id: 3,
          cost: "$13",
          image: (
            <img
              src="https://images.samsung.com/is/image/samsung/latin-en_WAM7500-ZA_001_Front_black?$L1-Thumbnail$"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "Lenovo",
          id: 4,
          cost: "$12",
          image: (
            <img
              src="https://5.imimg.com/data5/DD/HU/CF/SELLER-2546325/lenovo-speaker-l1520-500x500.jpg"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "Dell",
          id: 5,
          cost: "$18",
          image: (
            <img
              src="https://snpi.dell.com/snp/images/products/large/dell_speaker_system_ae215_1_s.jpg"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "Dell OEM",
          id: 6,
          cost: "$19",
          image: (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfX7SQxw722P3UAY0Y7GU8l3mK0570-TSSg&usqp=CAU"
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
            Best of Speakers
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
