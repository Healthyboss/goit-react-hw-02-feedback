import React, { useState } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";

function App() {
  const [feedback, setFeedback] = useState({ 
    Good: 0, 
    Neutral: 0, 
    Bad: 0,
 });

 const handleFeedback = (feedbackType) =>
  {setFeedback(prevFeedback =>({
    ...prevFeedback, 
    [feedbackType]:prevFeedback[feedbackType] + 1
  }));
}
const countTotalFeedback = () => {
  return feedback.Good + feedback.Neutral + feedback.Bad;
  }

  const countPositiveFeedbackPercentage = () =>{
    const total = countTotalFeedback();
    return total > 0 ? Math.round((feedback.Good/total) * 100) : 0;
  }

  const totalFeedback = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <div>
      <h1 style = {{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 40,
          fontStyle: "italic",
          color: "brown",
      }}>
            Espresso Feedback</h1>
      <Section title= "Please submitt your feedback">
      <FeedbackOptions 
      options = {['Good', 'Neutral','Bad']}
      customerFeedback = {handleFeedback}
      />
      </Section>

      <Section title ="Customer's feedback">
      <Statistics
        good={feedback.Good} 
        neutral={feedback.Neutral} 
        bad={feedback.Bad} 
        total={totalFeedback} 
        positivePercentage={positiveFeedback}/>
      </Section>
    </div>
  );
}

export default App;
