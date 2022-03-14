import { createContext, useState } from "react";
import FEEDBACK_DATA from "../data/FeedbackData";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FEEDBACK_DATA)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // Delete one feedback
    const onDeleteFeedback = (id) => {
        if (window.confirm('You sure you want to delete?')) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    // Add one feedback
    const onAddFeedback = (feedback) => {
        setFeedback((prevFeedback) => {
            return [feedback, ...prevFeedback]
        })
    }

    // Edit feedback
    const onEditFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // Update the editable feedback
    const onUpdateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updatedItem } : item))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        onDeleteFeedback,
        onAddFeedback,
        onEditFeedback,
        onUpdateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;