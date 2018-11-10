import React from "react";
import classes from "./ResultItem.css";

const resultItem = (props)=>{
	return(
		<figure className={classes.Wrapper}>
            <div className={classes.Name}>{props.name}</div>
            <div className={classes.Date}>{props.date}</div>
            <div className={classes.Points}>{props.points}</div>
	    </figure>
	)
};


export default resultItem