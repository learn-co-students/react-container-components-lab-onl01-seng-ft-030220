import React from 'react';


const Review = ({
    headline, 
    byline,
    link,
    short_summary
}) => {
    return(<div key={headline} className="review">
        <header>
            <a className="review-link" href={link.url}>
                {headline} 
            </a>
            <span className="author">{byline}</span>
        </header>
        <blockquote>{short_summary}</blockquote>
    </div>);
};

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {review: []};

export default MovieReviews;




