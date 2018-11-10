import React from "react";
import classes from "./Header.css"
import Points from "./Points/Points"
import Timer from "../../containers/Timer/Timer";
import Navigation from "../Navigation/Navigation"

const header = (props) =>{
    return(
    	<header className={classes.Header}>
    		<Navigation />
	    	<div className={classes.HeaderContainer}>
	            <Points />
	            <Timer />
	        </div>
    	</header>
    )
}

export default header