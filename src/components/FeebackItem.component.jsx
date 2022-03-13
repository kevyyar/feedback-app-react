import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './UI/Card.component';

const FeedbackItem = ({ text, rating }) => {
    return (
        <Card className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display">
                {text}
            </div>
        </Card>
    );
}

FeedbackItem.propTypes = {
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

export default FeedbackItem;