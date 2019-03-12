import * as actionTypes from '../actions/actionTypes';

const initialState = {
    searchField: '',
};

const reducer = (state=initialState, action={}) => {
    switch(action.type){
        case actionTypes.SET_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload.searchField,
            };
        default: 
            return state;
    }
};

export default reducer;