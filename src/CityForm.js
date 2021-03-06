import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CityForm extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleLocationSearched(this.textInput.current.value);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} id="form">
        <Form.Group controlId="citySearch">
          <Form.Control type="text" ref={this.textInput} placeholder="Enter city" />
          <Button id="submit" type="submit">
            Explore!
          </Button>
        </Form.Group>
      </Form>
    )
  }
}

export default CityForm;