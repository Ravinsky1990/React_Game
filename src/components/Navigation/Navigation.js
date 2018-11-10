import React,{Component} from "react";
import NavigationLink from "./NavigationLink/NavigationLink";
import classes from "./Navigation.css"

class Navigation extends Component{
    render(){
        return(
        <nav className={classes.Navigation}>
            <ul style={
                {
                 textAlign:"center",
                 padding: "0px"
                }
            }>
                <NavigationLink path="/results">Results</NavigationLink>
                <NavigationLink path="/">Log out</NavigationLink>
            </ul>
        </nav>
    )
    }
} 

export default Navigation