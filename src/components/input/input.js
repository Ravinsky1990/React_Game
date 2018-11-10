import React from "react";
import classes from "./input.css"

const input =(props)=>{
	let inputClasses = [classes.InputElement]

	if(props.invalid && props.touched){
		inputClasses.push(classes.Invalid);
	}

	return(
		<div className={classes.Input}>
			<label className={classes.Label}>{props.label}</label>
			<input className={inputClasses.join(" ")}
			onChange={props.onChange}
			{...props.elementConfig}
			value={props.value}
			/>
		</div>
	)
};

export default input;