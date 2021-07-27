import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

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
        <Card style={{ width: "18rem" }}>
          <Card.Img onClick={this.handleClicking} src={this.props.image_url} alt={this.props.title} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <p>Number of Votes : {this.state.vote}</p>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;
