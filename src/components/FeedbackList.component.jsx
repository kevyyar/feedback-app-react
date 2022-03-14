import React, { useContext } from 'react';

import FeedbackItem from './FeebackItem.component';

import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
    const { feedback } = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) return <div>No Feedback Data</div>

    return (
        <>
            {feedback.map(feedback => (
                <FeedbackItem key={feedback.id} {...feedback} />
            ))}
        </>
    );
}

export default FeedbackList;