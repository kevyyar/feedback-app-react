import React from 'react';
import Header from './components/Header.component';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import FeedbackList from './components/FeedbackList.component';
import FeedbackStats from './components/FeedbackStats.component';
import FeedbackForm from './components/FeedbackForm.component';
import About from './pages/About.component';
import AboutIconLink from './components/AboutIconLink.component';

import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
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
