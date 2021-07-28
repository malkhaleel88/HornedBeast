import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }
  clicking = () => {
    this.setState(
      {
        clicks: this.state.clicks + 1
      }
    );
  }

  showCard = () => {
    this.props.showCard({
      title: this.props.title,
      description: this.props.description,
      source: this.props.source
    });
  }

  render() {
    return (
      <Row xs={6}  className="g-4">
        <Col xs={6}>
          <Card align='center' style={{ width: '20rem', height: '35rem', margin:'20px'}} class='card' onClick={this.showCard}>
            <Card.Title>
              <h3>{this.props.title}</h3>
            </Card.Title>
            <Card.Img style={{ width: '20rem', height: '50%' }} onClick={this.clicking} variant="top" src={this.props.source} />
            <Card.Body>
              <Card.Text>
                {this.props.description}
              </Card.Text>
              <Card.Text> The number of votes : {this.state.clicks}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default HornedBeast;
