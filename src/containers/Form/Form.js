import React, {Component} from "react"
import classes from "./Form.css"
import Input from "../../components/input/input"
import Button from "../../components/UI/Button/Button";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "axios";
import {saveToken} from "../../utility/saveToken"
//import Aux from "../../HOC/Aux/Aux"
import { withRouter } from 'react-router';


class Form extends Component{

	componentDidMount(){
		console.log(this.props)
	}

	state={
		registerForm:{
			password:{
				elementConfig:{
					type:"text",
					placeholder:"Your password (Password should be at least 6 characters)"
				},
				value: "",
				validation:{
					require:true,
				},
				valid:false,
				touched:false
			},
			email:{
				elementConfig:{
					type:"email",
					placeholder:"Your email"
				},
				value: "",
				validation:{
					require:true,
					isEmail:true
				},
				valid:false,
				touched:false
			}
		},
		formIsValid:false
	}

	pushHendler=(path)=>{
		if(path==="/game"){
			this.props.history.push(path)
		}else if(path==="resetAuthFail"){
			this.props.onAuthFail("","")
		}
	}

	submitHendler=(type)=>{
		// event.preventDefault();
		let formData = {
			returnSecureToken:true
		};
		for(let el in this.state.registerForm){
			formData[el] = this.state.registerForm[el].value;
		}
		console.log(formData);

		this.props.onAuthStart();
		//request
		if(type === "sing up"){
			axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyABngotDwiV55CmpTfAffSvhPA1DE94ECs", formData)
			.then(response=>{
				saveToken(response.data.idToken, response.data.expiresIn, response.data.localId, response.data.email);
				console.log(response);
				let authData = {
					token:response.data.idToken,
					userId:response.data.localId,
					expTime:response.data.expiresIn,
					userEmail:response.data.email
				}
				this.props.onAuthStart();
				this.props.onAuthSuccess(authData);

			})
			.catch(error=>{
				console.log(error.response.data.error.message);
				this.props.onAuthStart();
				this.props.onAuthFail(error.response.data.error.code, error.response.data.error.message)
			})
		}else if (type === "sing in") {
			axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyABngotDwiV55CmpTfAffSvhPA1DE94ECs", formData)
			.then(response=>{
				console.log(response);
				let authData = {
					token:response.data.idToken,
					userId:response.data.localId,
					expTime:response.data.expiresIn,
					userEmail:response.data.email
				}
				this.props.onAuthStart();
				this.props.onAuthSuccess(authData)
			})
			.catch(error=>{
				console.log(error.response.data.error.message);
				this.props.onAuthStart();
				this.props.onAuthFail(error.response.data.error.code, error.response.data.error.message)
			})
		}
		
	}

	inputChangedHandler=(event,inputIdentifier)=>{
		//console.log(event.target.value)
		const updatedRegisterForm={
			...this.state.registerForm
		};
		const updatedRegisterFormElement= {
			...updatedRegisterForm[inputIdentifier]
		};
		updatedRegisterFormElement.value = event.target.value;
		updatedRegisterFormElement.valid = this.checkValidity(updatedRegisterFormElement.value, updatedRegisterFormElement.validation);
		updatedRegisterFormElement.touched = true;
		updatedRegisterForm[inputIdentifier] = updatedRegisterFormElement;

		let formIsValid = true;

		for(let identifier in updatedRegisterForm){
			formIsValid = updatedRegisterForm[identifier].valid && formIsValid; 
		}
		this.setState({registerForm:updatedRegisterForm, formIsValid:formIsValid})
	}

	checkValidity=(value, rules)=>{
		let isValid = true;
		if(rules.require){
			isValid = (value.trim() !== "" && isValid);
		};
		return isValid;
	}

	render(){
		//Create form arr
		let formArray= [];
		for(let key in this.state.registerForm){
			formArray.push({
				id:key,
				config:this.state.registerForm[key]
				
			})
		}
		//
		//Render logic
		let registerView = null;

		if(this.props.authStart){
			registerView=(<div><Spinner/></div>)
		}else if(this.props.authSuccess){
			registerView=(
				<div>	
					<h1 className={classes.Succsess}>Authentication successful!</h1>
					<div className={classes.BtnWrap}>
						<Button click={()=>this.pushHendler("/game")}>Play game</Button>
					</div>
				</div>
			)
		}else if(this.props.error.message !== ""){
			registerView=(
				<div>	
					<h1 className={classes.Error}>{this.props.error.message}</h1>
					<div className={classes.BtnWrap}>
						<Button click={()=>this.pushHendler("resetAuthFail")}>Try again!</Button>
						<Button click={()=>this.pushHendler("/game")}>Try free game!</Button>
					</div>
				</div>)
		}
		else{
			registerView=(
				<form className={classes.Form}>
						{formArray.map(formElement=>(
							<Input elementConfig={formElement.config.elementConfig}
							value={formElement.config.value}
							key={formElement.id}
							onChange={(event)=>this.inputChangedHandler(event, formElement.id)}
							invalid={!formElement.config.valid}
							touched={formElement.config.touched}
							/>
						))}
					<Button click={()=>this.submitHendler("sing up")} disabled={!this.state.formIsValid}>Sign up</Button>
					<Button click={()=>this.submitHendler("sing in")}disabled={!this.state.formIsValid}>Sign in</Button>
				</form>
			)
		}

		return (registerView)
		
	}
};

const mapStateToProps = state => {
  return {
   isAuth: state.authData.isAuth,
   authStart: state.authData.authStart,
   authSuccess: state.authData.authSuccess,
   authFail: state.authData.authFail,
   error: state.authData.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    onAuthStart: ()=> dispatch(actions.authStart()),
    onAuthSuccess: (authData)=> dispatch(actions.authSuccess(authData)),
    onAuthFail: (code, message)=> dispatch(actions.authFail(code,message)),
    onAuth: ()=> dispatch(actions.auth())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));


