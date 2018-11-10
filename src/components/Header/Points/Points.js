import React from "react"
import classes from "./Points.css";
import {connect} from "react-redux"


const points = (props)=>{
	return(
		<div className={classes.Points}>
			<span>Points:</span>
			<span>{props.points}</span>
		</div>
	)
}

const mapStateToProps = state => {
  return {
    points: state.gameData.points
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onTryAutoSignup: () => dispatch( actions.authCheckState() )
//   };
// };

export default connect(mapStateToProps)(points);



