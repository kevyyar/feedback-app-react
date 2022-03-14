import React from 'react';
import PropTypes from 'prop-types';

import FeedbackItem from './FeebackItem.component';

const FeedbackList = ({ feedback, onDeleteFeedback }) => {
    if (!feedback || feedback.length === 0) return <div>No Feedback Data</div>

    return (
        <>
            {feedback.map(feedback => (
                <FeedbackItem key={feedback.id} {...feedback} onDeleteFeedback={onDeleteFeedback} />
            ))}
        </>
    );
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            // id: PropTypes.number,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

export default FeedbackList;