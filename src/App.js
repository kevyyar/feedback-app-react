import React, { useState } from 'react';
import Header from './components/Header.component';
// import FeedbackItem from './components/FeebackItem.component';

import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList.component';
import FeedbackStats from './components/FeedbackStats.component';
import FeedbackForm from './components/FeedbackForm.component';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const onDeleteFeedback = (id) => {
    if (window.confirm('You sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} onDeleteFeedback={onDeleteFeedback} />
      </div>
    </>
  );
}

export default App;
