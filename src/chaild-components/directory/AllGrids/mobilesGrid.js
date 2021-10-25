import React from "react";

import { Col, Row, Container } from "react-bootstrap";

class Mobile extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {
          name: "Lenova",
          id: 1,
          cost: "$110",
          image: (
            <img
              src="https://drop.ndtv.com/TECH/product_database/images/113201624435PM_635_lenovo_lemon_3.jpeg"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "Redmi",
          id: 2,
          cost: "$120",
          image: (
            <img
              src="https://i01.appmifile.com/webfile/globalimg/sg/cms/C954339F-A02F-47F0-648A-E99767C03544.jpg"
              width="300"
              height="300"
            />
          )
        },

        {
          name: "Realme",
          id: 3,
          cost: "$130",
          image: (
            <img
              src="https://image01.realme.net/general/20200807/1596788942059.png"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "ViVO",
          id: 4,
          cost: "$125",
          image: (
            <img
              src="https://static.digit.in/default/24ba7cb1a41a5d2cda5ac4620851f8b1a2a189b6.jpeg?tr=w-1200"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "Samsung",
          id: 5,
          cost: "$3",
          image: (
            <img
              src="https://5.imimg.com/data5/GN/LL/MY-25454644/samsung-mobiles-500x500.png"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "Poco",
          id: 6,
          cost: "$90",
          image: (
            <img
              src="https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_Teaser_neu.jpeg"
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
            Best of mobiles
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
export default Mobile;
