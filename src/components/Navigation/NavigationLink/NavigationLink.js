import React from "react";
import classes from "./NavigationLink.css";
import { Link } from 'react-router-dom'


const navigationLink = (props)=>{
    return(
        <li className={classes.NavLink}>
            <Link to={props.path} className={classes.Animated}>{props.children}</Link>
        </li>
    )
}

export default navigationLink