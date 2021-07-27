import React from 'react';
import Card from 'react-bootstrap/Card';


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

      <div class='cards' style={{ margin: '2rem' }}>
        <Card style={{width: '28rem'}} class='card' onClick={this.showCard}>
          <Card.Title>
            <h3>{this.props.title}</h3>
          </Card.Title>
          <Card.Img onClick={this.clicking} variant="top" src={this.props.source} />
          <Card.Body>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text> The number of votes : {this.state.clicks}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeast;
