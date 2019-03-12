import * as actionTypes from '../actions/actionTypes';

const initialState = {
    searchField: '',
    loading: false,
    results: [],
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.SET_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload,
            };
        
        case actionTypes.REQUEST_RESULTS_PENDING:
            return {
                ...state,
                loading: true,
            };
        
        case actionTypes.REQUEST_RESULTS_SUCCESS:
            return {
                ...state,
                loading: false,
                results: action.payload,
            };

        default: 
            return state;
    }
};

export default reducer;