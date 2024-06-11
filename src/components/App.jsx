import React, { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState({ 
    good: 0, 
    neutral: 0, 
    bad: 0 });
  const handleFeedback = (feedbackType) =>
    {setFeedback(prevFeedback =>({
      ...prevFeedback, 
      [feedbackType]:prevFeedback[feedbackType] + 1
    }));
  }
  return (
    <>
      <h1>Espresso Feedback</h1>
      <div>
        <h2>Please leave your feedback</h2>
      </div>
    </>
  );
}

export default App;
