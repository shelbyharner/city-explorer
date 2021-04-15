import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Error extends React.Component {
  render() {
    return(
      <ListGroup>
        <ListGroup.Item>
          {this.props.error}
        </ListGroup.Item>
      </ListGroup>
    )
  }
}

export default Error;
