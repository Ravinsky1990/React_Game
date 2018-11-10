import React, {Component} from "react";
import classes from "./ResultsPage.css";
import ResultItem from "./ResultItem/ResultItem";
import axios from "../../axios"
import Button from "../../components/UI/Button/Button";
import * as actions from "../../store/actions/index";
import {connect} from "react-redux";
import extrName from "../../utility/cutUserName"



class ResultsPage extends Component{

	state={
		resultsData:[]
	}

	componentDidMount(){
		axios.get("/results.json")
		.then(response=>{
			console.log(response);
			let Data=[];
			for(let el in response.data){
			Data.push({
				...response.data[el]
			})};
			let sortData = Data.sort(function(a,b){
				if(a.points > b.points){
					return 1
				};
				if(a.points < b.points){
					return -1
				}
				return 0
			})

			this.setState({
				resultsData:[...sortData]
			});

			console.log(this.state.resultsData)
		})
		.catch(error=>{
			console.log(error)
		})
	}

	pushHendler=()=>{
		this.props.startTimerManually();
		this.props.resetPoints();
		this.props.hideModal();
		this.props.history.push("/game")
	}


	render(){
		return(
		<section className={classes.ResultsWrapper}>
			{this.state.resultsData.length === 0 ? <p className={classes.NoResGames}>No resent games</p>:null}
			{this.state.resultsData.map(resItem=>{
				return(
					<ResultItem date={resItem.date} points={resItem.points} key={resItem.date}
					name={extrName(resItem.userEmail)} />
				)
			})}
			<div style={{textAlign:"center"}}>
				<Button click={this.pushHendler}>Back to game</Button>
			</div>
		</section>
	)
	}
};

// const mapStateToProps = state => {
//   return {
//    urerName:state.authData.authData.userEmail
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    startTimerManually: () => dispatch( actions.startTimerManually()),
    hideModal: ()=> dispatch(actions.closeModal()),
    resetPoints: ()=> dispatch(actions.resetPoints()),
  };
};

export default connect(undefined,mapDispatchToProps)(ResultsPage);

