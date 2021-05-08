import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Movie extends React.Component {
  render() {
    let allItems = this.props.movieData.map((movie, index) => (
      <ListGroup.Item key={index}>
        {movie.title.original_title} : {movie.title.overview}, 
        {movie.title.average_votes}, 
        {movie.title.total_votes}, 
        {movie.title.popularity}, 
        {movie.title.released_on} 
        {movie.title.image_url}
      </ListGroup.Item>
    ))
    return(
      <Card style={{width: '50rem'}} id="movie">
        <Card.Header>
          <h3>Movies</h3>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <ListGroup>
              {allItems}
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Movie;
