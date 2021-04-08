import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CityForm extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group controlID="citySearch">
          <Form.Control type="text" placeholder="Enter city" />
          <Button onClick={this.props.handleLocationSearched} variant="info" type="submit">
            Explore!
          </Button>
        </Form.Group>
      </Form>
    )
  }
}

export default CityForm;