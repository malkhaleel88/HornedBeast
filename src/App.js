import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import FormHorns from './components/Form';
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import PostData from './components/data.json';
import Container from 'react-bootstrap/Container';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      selected: {},
      newData: PostData
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

  dataFilter = (x) => {
    //eslint-disable-next-line
    let newArr = PostData.filter((item) => {
      if (item.horns === Number(x)) {
        return item;
      } else if (x === "All") {
        return item;
      }
    })
    this.setState({
      newData: newArr
    })
  }


  render() {
    return (
      <Container align="center">

        <Header />
        <FormHorns dataForm={this.dataFilter} />
        
        <Main PostData={this.state.newData} showCard={this.HornedCardShowing} />
    
        <SelectedBeast show={this.state.show} hideCard={this.hideCard} selected={this.state.selected} />
        <Footer />
      </Container>
    );
  }
}

export default App;
