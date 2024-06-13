import PropTypes from "prop-types";
import styles from "./Statistics.module.css";


  const countTotalFeedback = () => {
  return feedback.good + feedback.neutral + feedback.bad;
  }

  const countPositiveFeedbackPercentage = () =>{
    const total = countTotalFeedback();
    return total > 0 ? Math.round((feedback.good/total) * 100) : 0;
  }

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <div>
        <h2>Statistics</h2>
        <p>Good : {feedback.good}</p>
        <p>Neutral : {feedback.neutral}</p>
        <p>Bad : {feedback.bad}</p>
        <p>Total : {countTotalFeedback()}</p>
        <p>Positive Feedback : {countPositiveFeedbackPercentage()}%</p>
    </div>
);