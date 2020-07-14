import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'P3zaHLtYBNF5Gwj9E4Wr6RbKBliw7oJ1';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviews: data.results.map(result => result.link.url)
        })
      })
  }



  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
