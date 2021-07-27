import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: 0,
    };
  }
  handleClicking = () => {
    this.setState({
      vote: this.state.vote + 1,
    });
  };

  render() {
    return (
      <div>
        <Col>
          <Card style={{ width: "22rem", height: "25rem" }}>
            <Card.Img style={{ width: "100%", height: "15rem" }} onClick={this.handleClicking} src={this.props.image_url} alt={this.props.title} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.description}
              </Card.Text>
              <p>Number of Votes : {this.state.vote}</p>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}

export default HornedBeasts;
