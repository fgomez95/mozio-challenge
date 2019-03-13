import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: false,
    loading: false,
    errorInfo: '',
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
            
        case actionTypes.SET_ERROR:
            return {
                ...state,
                error: action.payload.isError,
                errorInfo: action.payload.errorInfo,
            };
            
        default: 
            return state;
    }
};

export default reducer;