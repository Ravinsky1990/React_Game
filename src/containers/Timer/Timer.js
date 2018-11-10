import React, {Component} from "react";
import classes from "./Timer.css";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index"

class Timer extends Component{
	
	componentDidUpdate(){
		if(this.props.start==="startManually" && this.state.time === 60){
			console.log("YYYY")
			this.startHendler()
		}

	}

	componentDidMount(){
		this.startHendler()
		console.log(this.props)
	}

	componentWillUnmount(){
		this.stopHendler()
	}


	state={
		time:60
	}

	startHendler=()=>{
		this.interval=setInterval(this.update, 1000)
	}

	stopHendler=()=>{
		clearInterval(this.interval)
	}



	update=()=>{
		if(this.state.time > 0){
			this.setState({
			time: this.state.time - 1});
		}else{
			this.stopHendler();
			this.props.stopTimer()

			this.setState({
				time:60
			});

			this.props.showModal();
		}
	}



	render(){
		return(
		<div className={classes.Timer}>
			<span>Timer:</span>
			<span>{this.state.time}</span>
		</div>
	)
	}
};


const mapStateToProps = state => {
  return {
   start:state.gameData.startTimerManually
  };
};


const mapDispatchToProps = dispatch => {
  return {
    showModal:()=>dispatch(actions.showModal()),
    stopTimer: ()=>dispatch(actions.stopTimerManually())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
