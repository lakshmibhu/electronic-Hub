import React from "react";

import { Col, Row, Container } from "react-bootstrap";

class Laptops extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {
          name: " samsung",
          id: 1,
          cost: "$110",
          image: (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEdKOH2EtD0NXpmQISghgA4vPnfzfEldY-A&usqp=CAU"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "Apple",
          id: 2,
          cost: "$120",
          image: (
            <img
              src="https://4.imimg.com/data4/SJ/BA/MY-3018414/apple-laptop-500x500.jpg"
              width="300"
              height="300"
            />
          )
        },

        {
          name: "Hp",
          id: 3,
          cost: "$130",
          image: (
            <img
              src="https://www.xda-developers.com/files/2021/04/Best-HP-laptops-1024x683.jpg"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "Lenovo",
          id: 4,
          cost: "$125",
          image: (
            <img
              src="https://5.imimg.com/data5/HM/CT/MY-54168454/lenovo-laptops-500x500.jpg"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "Dell",
          id: 5,
          cost: "$300",
          image: (
            <img
              src="https://5.imimg.com/data5/HM/CT/MY-54168454/lenovo-laptops-500x500.jpg"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "Dell inspiron",
          id: 6,
          cost: "$90",
          image: (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3ugkP19XB53uiS7ICtgE3m_0jsu4vJIZOA&usqp=CAU"
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
            Best of Laptops
          </h1>
          {
            <Container>
              <Row className="col">
                <Col class="grid">
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
                <Col class="grid">
                  <div className="DealsImages">
                    <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                      {" "}
                      {this.state.categories[1].name}{" "}
                      {this.state.categories[1].cost}
                    </div>
                    <div> {this.state.categories[1].image}</div>
                  </div>
                </Col>
                <Col class="grid">
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
                <Col class="grid">
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
                <Col class="grid">
                  <div className="DealsImages">
                    <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                      {" "}
                      {this.state.categories[4].name}{" "}
                      {this.state.categories[4].cost}
                    </div>
                    <div> {this.state.categories[4].image}</div>
                  </div>
                </Col>
                <Col class="grid">
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
export default Laptops;
