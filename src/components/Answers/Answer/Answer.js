import React from "react";
import classes from "./Answer.css"

const answer = (props)=>{
    return(
        <div onClick={props.check} className={classes.Answer}>
            <span>{props.value}</span>
        </div>
    )
}

export default answer