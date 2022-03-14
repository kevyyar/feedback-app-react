import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

import { FaTimes, FaEdit } from 'react-icons/fa'

import Card from './UI/Card.component';

const FeedbackItem = ({ id, text, rating }) => {
    const { onDeleteFeedback, onEditFeedback } = useContext(FeedbackContext)

    return (
        <Card className="card">
            <div className="num-display">{rating}</div>
            <button className='close' onClick={() => onDeleteFeedback(id)}>
                <FaTimes color='purple' />
            </button>
            <button className='edit' onClick={() => onEditFeedback({ id, text, rating })}>
                <FaEdit color='purple' />
            </button>
            <div className="text-display">
                <div className="text-display">
                    {text}
                </div>
            </div>
        </Card>
    );
}



export default FeedbackItem;