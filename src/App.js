import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import PostData from './components/data.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      selected: {}
    };
  }

  HornedCardShowing = (select) => {
    this.setState({
      show: true,
      selected: select
    });
  }
  hideCard = () => {
    this.setState({
      show: false,
    });
  }
  render() {
    return (
      <div >
        <Header />
        <Main PostData={PostData} showCard={this.HornedCardShowing} />
        <SelectedBeast show={this.state.show} hideCard={this.hideCard} selected={this.state.selected} />
        <Footer />
      </div>
    );
  }
}

export default App;
