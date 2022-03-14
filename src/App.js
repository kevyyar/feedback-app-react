import React, { useState } from 'react';
import Header from './components/Header.component';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList.component';
import FeedbackStats from './components/FeedbackStats.component';
import FeedbackForm from './components/FeedbackForm.component';
import About from './pages/About.component';
import AboutIconLink from './components/AboutIconLink.component';

import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const onDeleteFeedback = (id) => {
    if (window.confirm('You sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  const onAddFeedback = (feedback) => {
    setFeedback((prevFeedback) => {
      return [feedback, ...prevFeedback]
    })
  }

  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedbackForm onAddFeedback={onAddFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} onDeleteFeedback={onDeleteFeedback} />
              </>
            }>
            </Route>
            <Route path="/about" element={<About />} />
          </Routes>
          <AboutIconLink />
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
