// Code MovieReviews Here
import React from 'react'

let MovieReviews = ({ reviews }) => {
    return (<div className="review-list">{reviews.map(review => <div key={review} className="review">{review.link.url}</div>)}</div>)
}

export default MovieReviews
