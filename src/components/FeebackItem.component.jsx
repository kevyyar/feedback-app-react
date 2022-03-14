import React, { useState, useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

import { FaTimes } from 'react-icons/fa'

import Card from './UI/Card.component';

const FeedbackItem = ({ id, text, rating }) => {
    const { onDeleteFeedback } = useContext(FeedbackContext)

    return (
        <Card className="card">
            <div className="num-display">{rating}</div>
            <button className='close' onClick={() => onDeleteFeedback(id)}>
                <FaTimes color='purple' />
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