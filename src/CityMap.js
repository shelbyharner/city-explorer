import React from 'react';
import Container from 'react-bootstrap/Container';

class CityMap extends React.Component {
  render() {
    return (
      <Container id="location">
        <h3>{this.props.cityData.display_name}</h3>
        <h3>Latitude:{this.props.cityData.lat}</h3>
        <h3>Longitude:{this.props.cityData.lon}</h3>
        <div id="map">
          <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=12`} alt="location map" />
        </div>
      </Container>
    )
  }
}

export default CityMap;
