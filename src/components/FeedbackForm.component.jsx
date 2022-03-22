import React, { useState, useContext, useEffect } from 'react';

import FeedbackContext from '../context/FeedbackContext';

import Card from "./UI/Card.component";
import Button from './UI/Button.component';
import RatingSelect from './RatingSelect.component';

const FeedbackForm = () => {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(0)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const { onAddFeedback, onUpdateFeedback, feedbackEdit } = useContext(FeedbackContext)

    useEffect(() => {
        // if (feedbackEdit.edit === true) {
        //     setBtnDisabled(false)
        //     setText(feedbackEdit.item.text)
        //     setRating(feedbackEdit.item.rating)
        // }
    }, [feedbackEdit])

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
                text,
                rating
            }

            if (feedbackEdit.edit === true) {
                onUpdateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                onAddFeedback(newFeedback);
            }
        }

        setText('')
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