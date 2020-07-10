import React from 'react'
    
    const MovieReviews = ({ reviews }) => (
    <div className="review-list">
        { reviews.map(review => 
            <div className="review">
                <h2>{ review.display_title }</h2>
                <h3>{ review.headline }</h3>
                <p>{ review.summary_short }</p>
            </div>
        )}
    </div>
    )
    
export default MovieReviews