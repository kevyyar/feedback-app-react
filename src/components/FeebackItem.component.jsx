import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa'

import Card from './UI/Card.component';

const FeedbackItem = ({ id, text, rating, onDeleteFeedback }) => {

    return (
        <Card className="card">
            <div className="num-display">{rating}</div>
            <button className='close' onClick={() => onDeleteFeedback(id)}>
                <FaTimes color='#fff' />
            </button>
            <div className="text-display">
                <div className="text-display">
                    {text}
                </div>
            </div>
        </Card>
    );
}

FeedbackItem.propTypes = {
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

export default FeedbackItem;