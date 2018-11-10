import React from "react";
import classes from "./Button.css"

const button=(props)=>{
	return(
		<button
		disabled={props.disabled}
		onClick={props.click}
		className={classes.btn}>{props.children}</button>
	)
}

export default button