import React, { useState } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";

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
const countTotalFeedback = () => {
  return feedback.good + feedback.neutral + feedback.bad;
  }

  const countPositiveFeedbackPercentage = () =>{
    const total = countTotalFeedback();
    return total > 0 ? Math.round((feedback.good/total) * 100) : 0;
  }

  const totalFeedback = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <>
      <h1>Espresso Feedback</h1>

      <FeedbackOptions 
      options = {['good', 'neutral','bad']}
      customerFeedback = {handleFeedback}
      />
      
      <Statistics 
        good={feedback.good} 
        neutral={feedback.neutral} 
        bad={feedback.bad} 
        total={totalFeedback} 
        positivePercentage={positiveFeedback}/>
    </>
  );
}

export default App;
