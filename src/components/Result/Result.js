import React, {Component} from "react"
import Aux from "../../HOC/Aux/Aux";
import Button from "../UI/Button/Button";
import classes from "./Result.css";
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import * as actions from "../../store/actions/index"
import {getDate} from "../../utility/getDate"
import axios from "../../axios"
import Spinner from "../UI/Spinner/Spinner"

class Result extends Component{

	state={
		errorMs: false,
		isLoading: false,
	}

	saveHendler=()=>{

		console.log(this.props)

		this.setState({
			isLoading:true
		});

		const postData = {
			points:this.props.points,
			date: getDate(),
			userEmail: this.props.userEmail
		};

		axios.post("/results.json", postData)
		.then(response=>{
			console.log(response);

			this.setState({
				isLoading:false,
			});

			this.props.setRedirect()

		})
		.catch(error=>{
			this.setState({
				errorMs: true,
				isLoading: false
			})
		})

		// console.log(getDate())
	}

	tryAgainHendler=()=>{
		this.props.setRedirect()
		this.props.startTimerManually();
		this.props.resetPoints();
		this.props.hideModal();
	}

	pushHendler=()=>{
		this.props.setRedirect();
		this.props.history.push("/results")
	}

	render(){
		//Render logic

		let result = null;

		if(this.state.isLoading){
			result = <Spinner/>
		}else if(this.props.redirect){
			result = (
			<Aux>	
				<h1 className={classes.Header}>Results saved!</h1>
				<div className={classes.BtnWrap}>
					<Button click={this.pushHendler}>See result</Button>
					<Button click={this.tryAgainHendler}>Try again</Button>
				</div>
			</Aux>
		)
		}else if(this.state.errorMs){
			result = (
				<Aux>
					<h1 style={{textAlign:"center",color:"red"}}>Something get wrong!</h1>
					<div className={classes.BtnWrap}>
						<Button click={this.tryAgainHendler}>Try again</Button>
					</div>
				</Aux>
			)
		}
		else{
			result=(
				<Aux>
					<h1 className={classes.Header}>Your result</h1>
					<div className={classes.Points}><span>{this.props.points}</span></div>
					<div className={classes.BtnWrap}>
						<Button click={this.saveHendler}>Save result</Button>
						<Button click={this.tryAgainHendler}>Try again</Button>
					</div>
				</Aux>
			)
		}

		// render logic end
		return(
			result
		)
	}
}

const mapStateToProps = state => {
  return {
    points: state.gameData.points,
    redirect: state.gameData.redirectBackToGame,
    userEmail:state.authData.authData.userEmail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startTimerManually: () => dispatch( actions.startTimerManually()),
    hideModal: ()=> dispatch(actions.closeModal()),
    resetPoints: ()=> dispatch(actions.resetPoints()),
    setRedirect: ()=> dispatch(actions.redirect())
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Result));
