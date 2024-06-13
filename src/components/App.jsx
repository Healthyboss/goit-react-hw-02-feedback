import React, { useState } from "react";
import Statistics from "./Statistics";

function App() {
  const [feedback, setFeedback] = useState({ 
    good: 0, 
    neutral: 0, 
    bad: 0,
 });

 const handleFeedback = (feedbackType) =>
  {setFeedback(prevFeedback =>({
    ...prevFeedback, 
    [feedbackType]:prevFeedback[feedbackType] + 1
  }));
}
  
  return (
    <>
      <h1>Espresso Feedback</h1>
      <Statistics 
        good={} 
        neutral={} 
        bad={} 
        total={} 
        positivePercentage={}>
      </Statistics>
    </>
  );
}

export default App;
