import React from "react";

import { Col, Row, Container } from "react-bootstrap";

class Usb extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {
          name: "Hp",
          id: 1,
          cost: "$9",
          image: (
            <img
              src="https://images.wondershare.com/recoverit/article/2019/08/different-types-of-usb-7.jpg"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "SanDisk",
          id: 2,
          cost: "$8",
          image: (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXOb4-cwgjWfaXxvjuPiPTLVEoQ2sEWzOjg&usqp=CAU"
              width="300"
              height="300"
            />
          )
        },

        {
          name: "Samsung",
          id: 3,
          cost: "$6",
          image: (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAJ_gJCKKiqHc5KSaZDn4CXR3QqmdANfk2Nw&usqp=CAU"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "intel",
          id: 4,
          cost: "$12",
          image: (
            <img
              src="https://www.usbmemorydirect.com/media/images/products/swm/thumbnail/swm_custom_usb_drives.jpg"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "Team Group",
          id: 5,
          cost: "$3",
          image: (
            <img
              src="https://c1.neweggimages.com/ProductImageCompressAll300/20-331-072-V05.jpg"
              width="300"
              height="300"
            />
          )
        },
        {
          name: "Gap",
          id: 6,
          cost: "$6",
          image: (
            <img
              src="https://www.promobrands.com.au/product_images/add_images/withlogo/zoom/U904/U-904_1_03.jpg"
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
          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}> Best of USB</h1>
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
export default Usb;
