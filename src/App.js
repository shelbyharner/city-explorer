import React from 'react';
import axios from 'axios';

import Header from './Header.js';
import CityForm from './CityForm.js';
import CityMap from './CityMap.js';
import Footer from './Footer.js';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alreadySearched: false,
      locationSearched: '',
      cityData: '',
    }
  }

  handleSearch = () => {
    this.setState({alreadySearched: false});
  }

  handleLocationSearched = async(locationSearched) => {
    
    let cityDataReturned = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${locationSearched}&format=json`);
    console.log('searched', cityDataReturned)
    
    this.setState({
      alreadySearched: true,
      locationSearched: locationSearched,
      cityData: cityDataReturned.data[0]
    });
  }

  render() {
    return(
      <div>
        <Header />

        <CityForm 
        handleLocationSearched={this.handleLocationSearched}
        />

        <CityMap
        cityData={this.state.cityData}
        />
        
        <Footer />
      </div>
    )
  }
}

export default App;
