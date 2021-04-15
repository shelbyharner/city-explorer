import React from 'react';
import axios from 'axios';

import Header from './Header.js';
import CityForm from './CityForm.js';
import CityMap from './CityMap.js';
import Footer from './Footer.js';
import Weather from './Weather.js';
import Error from './Error.js';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alreadySearched: false,
      locationSearched: '',
      cityData: '',
      weatherData: [],
      isError: false,
      error: '',
    }
  }

  handleSearch = () => {
    this.setState({alreadySearched: false});
  }

  handleLocationSearched = async(locationSearched) => {
    try {
      let cityDataReturned = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${locationSearched}&format=json`);
      
      this.setState({
        alreadySearched: true,
        locationSearched: locationSearched,
        cityData: cityDataReturned.data[0]
      });
    } catch (err) {
      this.setState({
        error: `${err.message}: ${err.response.data.error}`,
        isError: true,
      });
    }
    this.getWeatherData ();
  }

  getWeatherData = async() => {
    try {
      let weatherData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather-data`);
      this.setState({weatherData: weatherData.data});
    } catch (err) {
      this.setState({
        error: `${err.message}: ${err.response.data.error}`,
        isError: true,
      });
    }
  }

  render() {
    return(
      <div>
        <Header />

        <CityForm 
        handleLocationSearched={this.handleLocationSearched}
        />

        {
          this.state.alreadySearched ? 
          <CityMap
          cityData={this.state.cityData}
          />
          : ''
        }
        
        {
          this.state.isError ?
          <Error 
          error={this.state.error}
          />
          : ''          
        }

        <Weather
        weatherData={this.state.weatherData}
        />

        <Footer />
      </div>
    )
  }
}

export default App;
