import * as actionsTypes from "./actionsTypes";

//Game actions
export const apdateGame=()=>{
	return{
		type:actionsTypes.UPDATE_GAME
	}
};

export const setTrueAnswer=(value)=>{
	return{
		type:actionsTypes.SET_TRUE_ANSWER,
		value
	}
};

export const setIsApdateble=(value)=>{
	return{
		type:actionsTypes.SET_IS_APDATEBLE,
		value
	}
};

export const setPointsIncrement=()=>{
	return{
		type:actionsTypes.SET_POINTS_INCREMENT
	}
};

export const setPointsDecrement=()=>{
	return{
		type:actionsTypes.SET_POINTS_DECREMENT
	}
};


export const resetPoints=()=>{
	return{
		type:actionsTypes.RESET_POINTS
	}
};

export const redirect=()=>{
	return{
		type:actionsTypes.REDIRECT
	}
};


//Modal

export const closeModal=()=>{
	return{
		type:actionsTypes.HIDE_MODAL
	}
};

export const showModal=()=>{
	return{
		type:actionsTypes.SHOW_MODAL
	}
};

//Timer

export const startTimerManually=()=>{
	return{
		type:actionsTypes.START_TIMER_MANUALLY
	}
};

export const stopTimerManually=()=>{
	return{
		type:actionsTypes.STOP_TIMER_MANUALLY
	}
};

	





