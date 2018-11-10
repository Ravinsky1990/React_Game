import React,{Component} from "react";
import classes from "./Question.css";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index"


class Question extends Component{
  componentDidMount(){
    let value = this.props.firstInt*this.props.secondInt
    this.props.setTrueAnswer(value)
  }
  componentDidUpdate(){
    let value = this.props.firstInt*this.props.secondInt
    this.props.setTrueAnswer(value)
  }

  render(){
    return(
          <div className={classes.Question}>
              <span>{this.props.firstInt}</span>
              <span>*</span>
              <span>{this.props.secondInt}</span>
          </div>
    )
  }
}


const mapStateToProps = state => {
  return {
   firstInt: state.gameData.firstInt,
   secondInt: state.gameData.secondInt 
  };
};

const mapDispatchToProps=(dispatsh)=>{
  return{
    setTrueAnswer:(value)=>dispatsh(actions.setTrueAnswer(value))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Question);
