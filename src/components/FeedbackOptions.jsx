import PropTypes from "prop-types";



<div>
    <h2>Please leave your feedback</h2>
        <div style={{display:'flex', gap:'15px', margin:"20px"}}>
        <button style={{height:'30px',width:'90px', boxShadow: '0 2px 4px rgba(0, 0, 0, 1)',backgroundColor:'white', borderRadius:"5px",fontWeight:'bold'}} onClick={()=>handleFeedback('good')}>Good</button>
        <button style={{height:'30px',width:'90px',boxShadow: '0 2px 4px rgba(0, 0, 0, 1)',backgroundColor:'white', borderRadius:"5px",fontWeight:'bold'}}onClick={()=>handleFeedback('neutral')}>Neutral</button>
        <button style={{height:'30px',width:'90px',boxShadow: '0 2px 4px rgba(0, 0, 0, 1)',backgroundColor:'white', borderRadius:"5px",fontWeight:'bold'}}onClick={()=>handleFeedback('bad')}>Bad</button>
        </div>
</div>
      