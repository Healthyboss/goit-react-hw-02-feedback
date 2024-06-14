import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
   return( 
   <div>
        <p>Good : {feedback.good}</p>
        <p>Neutral : {feedback.neutral}</p>
        <p>Bad : {feedback.bad}</p>
        <p>Total : {countTotalFeedback()}</p>
        <p>Positive Feedback : {countPositiveFeedbackPercentage()}%</p>
    </div>
   );
};