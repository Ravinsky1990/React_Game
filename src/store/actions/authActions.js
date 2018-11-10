import * as actionsTypes from "./actionsTypes";

export const authStart=()=>{
	return{
		type:actionsTypes.AUTH_START
	};
};

export const authSuccess=(authData)=>{
	return{
		type:actionsTypes.AUTH_SUCCESS,
		token:authData.token,
		userId:authData.userId,
		expTime:authData.expTime,
		userEmail:authData.userEmail
	};
};

export const authFail=(code,message)=>{
	return{
		type: actionsTypes.AUTH_FAIL,
		code: code,
		message: message
	};
};

export const auth=()=>{
	return{
		type:actionsTypes.AUTH
	};
};

export const logOut=()=>{
	return{
		type:actionsTypes.LOG_OUT
	};
};

