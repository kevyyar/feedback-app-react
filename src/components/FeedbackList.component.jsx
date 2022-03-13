import React from 'react';
import PropTypes from 'prop-types';

import FeedbackItem from './FeebackItem.component';

const FeedbackList = ({ feedback }) => {
    return (
        <>
            {feedback.map(feedback => (
                <FeedbackItem key={feedback.id} {...feedback} />
            ))}
        </>
    );
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

export default FeedbackList;