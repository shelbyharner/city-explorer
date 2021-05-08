import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {
  render() {
    console.log(this.props.weatherData);
    let allListGroupItems = this.props.weatherData.map((day, index) => (
        <ListGroup.Item key={index}>
          {day.date}: {day.description}
        </ListGroup.Item>
    ))
    return(
      <ListGroup>
        {allListGroupItems}
      </ListGroup>
    )
  }
}

export default Weather;
