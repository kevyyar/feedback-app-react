import React from 'react';
import FeedbackItem from './FeebackItem.component';

const FeedbackList = ({ feedback }) => {
    return (
        <>
            {feedback.map(feedback => (
                <FeedbackItem {...feedback} />
            ))}
        </>
    );
}

export default FeedbackList;