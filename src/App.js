import React from 'react';
import axios from 'axios';

import Header from './Header.js';
import CityForm from './CityForm.js';
import Footer from './Footer.js';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alreadySearched: false,
      locationSearched: '',
    }
  }

  handleSearch = () => {
    this.setState({locationSearched: false});
  }

  handleLocationSearched = () => {
    this.setState({
      alreadySearched: true,
      locationSearched: locationSearched,
    });
  }

  render() {
    return(
      <div>
        <Header />

        <CityForm />
        onClick={this.state.handleLocationSearched}

        <Footer />
      </div>
    )
  }
}

export default App;
