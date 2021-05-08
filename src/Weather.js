import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {
  render() {
    let allListGroupItems = this.props.weatherData.map((day, index) => (
      <ListGroup.Item key={index}>
        {day.date}: {day.description}
      </ListGroup.Item>
    ))
    return (
      <Card style={{ width: '25rem' }} id="weather">
        <Card.Header>
          <h3>Weather</h3>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <ListGroup>
              {allListGroupItems}
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Weather;
