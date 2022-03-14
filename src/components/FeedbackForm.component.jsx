import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Card from "./UI/Card.component";
import Button from './UI/Button.component';
import RatingSelect from './RatingSelect.component';

const FeedbackForm = ({ onAddFeedback }) => {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(0)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                id: uuidv4(),
                text,
                rating
            }

            onAddFeedback(newFeedback);
        }

        setText('')
        setRating(10)
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input type="text" placeholder="Write a review" value={text} onChange={handleTextChange} />
                    <Button isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    );
}

export default FeedbackForm;