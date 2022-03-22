import React, { useContext } from 'react';

import FeedbackItem from './FeebackItem.component';

import FeedbackContext from '../context/FeedbackContext';
import LoadingSpinner from './LoadingSpinner.component';

const FeedbackList = () => {
    const { feedback, isLoading, error } = useContext(FeedbackContext)

    if ((!feedback || feedback.length === 0) && !isLoading) return <div>No Feedback Data</div>


    return isLoading ? <LoadingSpinner /> : (<div className='feedback-list'>
        {feedback.map(feedback => (
            <FeedbackItem key={feedback.id} {...feedback} />
        ))}
    </div>)
}

export default FeedbackList;