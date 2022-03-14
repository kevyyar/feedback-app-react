import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
    const { feedback } = useContext(FeedbackContext)

    let avgRating = feedback.reduce((acc, curr) => {
        return acc + curr.rating
    }, 0) / feedback.length

    avgRating = avgRating.toFixed(1).replace(/[.,]0$/, '')
    return (
        <div className="feedback-stats">
            <h4>{feedback.length === 1 ? `${feedback.length} Review` : `${feedback.length} Reviews`}</h4>
            <h4>Average Rating: {!isNaN(avgRating) ? avgRating : 0}</h4>
        </div>
    );
}

export default FeedbackStats;