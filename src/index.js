import React from 'react';
import "normalize.css";
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Switch} from "react-router-dom"
import Game from './containers/Game/Game';
import HomePage from "./containers/HomePage/HomePage"
import RegisterPage from "./containers/RegisterPage/RegisterPage";
import ResultsPage from "./containers/ResultsPage/ResultsPage"
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import {checkToken} from "./utility/checkToken";
import fetchAuthData from "./utility//fetchaAuthData"
import * as actions from "./store/actions/authActions";


//redusers
import gameReducer from "./store/reducers/GameReducers/GameReducer";
import authReducer from "./store/reducers/AuthReducers/authReducer";
import UIReducer from "./store/reducers/UIReducer/UIReducer"


const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;


const rootReducer=combineReducers({
	gameData: gameReducer,
	authData: authReducer,
	UIcontrol: UIReducer
})

//Store
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

store.subscribe(()=>{
	console.log(store.getState())
});

//Check Auth
if(checkToken("3600")){
	let authData=fetchAuthData();
	console.log(authData)
	store.dispatch(actions.authSuccess(authData))
}

//root
let app = (
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={HomePage}/>
				<Route path="/game" component={Game}/>
				<Route path="/register" component={RegisterPage}/>
				<Route path="/results" component={ResultsPage}/>
			</Switch>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();

