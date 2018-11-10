import React from "react";
import Aux from "../../../HOC/Aux/Aux"
import classes from "./Spinner.css"

const spinner = () => {
	return (
		<Aux>
			<div className={classes.SpinnerWraper}>
				<div className={classes.Spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
			</div>
		</Aux>
	)
}

export default spinner