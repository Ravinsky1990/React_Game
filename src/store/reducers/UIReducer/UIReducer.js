import * as actionsTypes from "../../actions/actionsTypes"

const initialState= {
	showModal:false
};

const UIReducer = (state=initialState, action) =>{
	switch ( action.type ) {
        case actionsTypes.SHOW_MODAL:
        return{
        	showModal:true
		};

		case actionsTypes.HIDE_MODAL:
        return{
        	showModal:false
		};

        default: return state
    }
};


export default UIReducer
