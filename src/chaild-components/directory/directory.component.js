import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { Col, Row, Container } from "react-bootstrap";
class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          name: "usb",
          id: 1,
          linkUrl: "/usb",
          cost: "$6",
          imageUrl:
            "https://www.usbmakers.com/wp-content/uploads/2020/01/Picture2-2.png"
        },
        {
          name: "Mouse",
          id: 2,
          linkUrl: "/mouse",
          cost: "$10",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStE4ZVZNjdubrOwCsadg6ez9sEjmYbyL7Yew&usqp=CAU"
        },
        {
          name: "Chargers",
          id: 3,
          linkUrl: "/Chargers",
          cost: "$20",
          imageUrl: "https://in.all.biz/img/in/catalog/143369.jpeg"
        },
        {
          name: "Mobiles",
          id: 4,
          linkUrl: "/Mobiles",
          cost: "$60",
          imageUrl:
            "https://images.hindustantimes.com/img/2021/06/08/1600x900/IMG_5223_1623145084295_1623145098953.jpg"
        },
        {
          name: "Laptops",
          id: 5,
          linkUrl: "/Laptops",
          cost: "$500",
          imageUrl:
            "https://api.time.com/wp-content/uploads/2017/05/laptops.jpg"
        },
        {
          name: "Speakers",
          id: 6,
          linkUrl: "/Speakers",
          cost: "$30",
          imageUrl:
            "https://media.istockphoto.com/photos/two-big-tower-sound-speakers-hifi-stereo-system-picture-id905675810"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-component">
        <div
          className="header1"
          style={{ fontSize: "40px", fontWeight: "bold", color: "red" }}
        >
          {" "}
          Electronics Hub{" "}
        </div>
        <Container>
          <Row>
            {this.state.categories.map((category) => (
              <Col md="4" className="columns">
                <MenuItem categoryname={category} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Directory;
