import * as actionsTypes from "../../actions/actionsTypes"

const initialState={
	isAuth: false,
	authStart:false,
	authSuccess:false,
	authFail: false,
	error:{
		code: null,
		message:""
	},
	authData:{
		token: null,
		userId: null,
		expTime: null,
		userEmail:"anonymous user"
	}
}

const authReduser=(state=initialState, action)=>{
	switch ( action.type ) {
        case actionsTypes.AUTH_START:
        return{
        	...state,
        	authStart: !state.authStart,
		};

		case actionsTypes.AUTH_SUCCESS:
		return{
        	...state,
			authSuccess:!state.authSuccess,
			authData:{
				token: action.token,
				userId: action.userId,
				expTime: action.expTime,
				userEmail: action.userEmail
			}
		};

		case actionsTypes.AUTH_FAIL:
		return{
        	...state,
			authFail:!state.authFail,
			error:{
				code:action.code,
				message: action.message
			}
		};

		case actionsTypes.LOG_OUT:
		return initialState

        default: return state
    }
};

export default authReduser