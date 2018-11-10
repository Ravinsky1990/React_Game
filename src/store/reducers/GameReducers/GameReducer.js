import getRandomInt from "../../../utility/randomNum";
import * as actionsTypes from "../../actions/actionsTypes"
import randomArr from "../../../utility/randomArr"

const initialState={
	points:0,
	firstInt: undefined,
	secondInt:undefined,
	arrayOfRandomAns:[],
	trueAns:0,
	isApdateble:false,
	startTimerManually: "start",
	redirectBackToGame: false
}

const gameRaducer=(state=initialState, action)=>{
	switch ( action.type ) {
        case actionsTypes.UPDATE_GAME:
        return{
        	...state,
			firstInt:getRandomInt(1,10),
			secondInt: getRandomInt(1,10),
			arrayOfRandomAns:randomArr(5),
			isApdateble:false,
			
		};

		case actionsTypes.SET_TRUE_ANSWER:
		return{
        	...state,
			trueAns:action.value
			
		};

		case actionsTypes.SET_IS_APDATEBLE:
		return{
        	...state,
			isApdateble:action.value
		};

		case actionsTypes.SET_POINTS_INCREMENT:
		return{
        	...state,
			points:state.points+100
		};

		case actionsTypes.SET_POINTS_DECREMENT:
		if(state.points===0){
			return{
				...state,
				points:0
			}
		}else{
			return{
				...state,
				points:state.points-100
			}
		}

		case actionsTypes.RESET_POINTS:
		return{
        	...state,
			points: 0
		}

		case actionsTypes.START_TIMER_MANUALLY:
		return{
        	...state,
			startTimerManually: "startManually"
		}

		case actionsTypes.STOP_TIMER_MANUALLY:
		return{
        	...state,
			startTimerManually: "stop"
		}

		case actionsTypes.REDIRECT:
		return{
        	...state,
			redirectBackToGame: !state.redirectBackToGame
		}

        default: return state
    }
}

export default gameRaducer