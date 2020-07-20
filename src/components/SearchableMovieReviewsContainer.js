import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSubmit = () => {
        fetch(`${URL}&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(data => {
                const reviews = data.results
                this.setState({
                    reviews: reviews
                })
            })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
                <form onSubmit={this.handleSubmit()}>
                    <input type="text"></input>
                </form>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
