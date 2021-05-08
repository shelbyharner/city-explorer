import React from 'react';
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
      <ListGroup>
        {allItems}
      </ListGroup>
    )
  }
}

export default Movie;
