import React,{Component} from "react";
import classes from "./HomePage.css"
import Button from "../../components/UI/Button/Button";
import {checkToken} from "../../utility/checkToken";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";

class HomePage extends Component{
	
	pushHendler=(path)=>{
		if(path==="/registerAfterLogOut"){
			window.localStorage.clear()
			let defaultAuthData={
				token: null,
				userId: null,
				expTime: null,
				userEmail:""
			}
			this.props.onAuthSuccess(defaultAuthData)
		}else{
			this.props.history.push(path)
		}
	}

	render(){
		let view = null;
		
		if(checkToken("3600") && this.props.authSuccess){
			view = (
				<section className={classes.WelcomeSection}>
					<div>
						<h1>Welcome to game!</h1>
						<div className={classes.BtnWrap}>
							<Button
							click={()=>this.pushHendler("/game")}
							>Play game</Button>

							<Button
							click={()=>this.pushHendler("/registerAfterLogOut")}
							>Log out</Button>
						</div>
					</div>	
				</section>
			)
		}else{
			view = (
				<section className={classes.WelcomeSection}>
					<div>
						<h1>Welcome to game!</h1>
						<div className={classes.BtnWrap}>
							<Button
							click={()=>this.pushHendler("/game")}
							>Try free</Button>

							<Button
							click={()=>this.pushHendler("/register")}
							>Log in</Button>
						</div>
					</div>	
				</section>
			)
		};

		return(
			view
		)
	}
};

const mapStateToProps = state => {
  return {
   authSuccess: state.authData.authSuccess,
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    onAuthSuccess: (authData)=> dispatch(actions.authSuccess(authData))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
