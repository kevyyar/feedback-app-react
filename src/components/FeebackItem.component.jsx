import React, { useState } from 'react';


const FeedbackItem = ({ text, rating }) => {
    return (
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display">
                {text}
            </div>
        </div>
    );
}

export default FeedbackItem;