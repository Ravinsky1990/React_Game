import React, {Component} from "react";
import classes from "./Answers.css"
import Answer from "./Answer/Answer"
import {connect} from "react-redux";
import randomNum from "../../utility/randomNum";
import * as actions from "../../store/actions/index"

class Answers extends Component{

    check=(answer)=>{
        let isApdateble = (this.props.trueAnswer===answer);
        this.props.setIsApdateble(isApdateble);
        if(isApdateble){
            this.props.setPointsInc()
            this.props.apdateGame()
        }else{
            this.props.setPointsDec();
            this.props.apdateGame()
        }
    }

    render(){

        let arrWithTrue=[]
        let index = randomNum(0,4);
        this.props.randomAnswers.splice(index,1,this.props.trueAnswer)
        arrWithTrue = [...this.props.randomAnswers]

        return(
            <div className={classes.Answers}>
                {arrWithTrue.map((el,index)=>{
                    return (
                        <Answer value={el} key={index} check={()=>this.check(el)} />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    randomAnswers: state.gameData.arrayOfRandomAns,
    trueAnswer: state.gameData.trueAns
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setIsApdateble: (value) => dispatch(actions.setIsApdateble(value) ),
    setPointsInc: ()=>dispatch(actions.setPointsIncrement()),
    setPointsDec: ()=>dispatch(actions.setPointsDecrement()),
    apdateGame:()=>dispatch(actions.apdateGame())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Answers);