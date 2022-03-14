import { createContext, useState } from "react";
import FEEDBACK_DATA from "../data/FeedbackData";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FEEDBACK_DATA)

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

    return <FeedbackContext.Provider value={{
        feedback,
        onDeleteFeedback,
        onAddFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;