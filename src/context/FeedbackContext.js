import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Fetch feedback data from server
        const fetchFeedback = async () => {
            const res = await fetch('http://localhost:5000/feedback')
            const data = await res.json()
            console.log(data);
            setIsLoading(false)
            setFeedback(data);
        }
        fetchFeedback()
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
        isLoading,
        onDeleteFeedback,
        onAddFeedback,
        onEditFeedback,
        onUpdateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;