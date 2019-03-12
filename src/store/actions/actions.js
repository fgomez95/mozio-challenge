import * as actionTypes from './actionTypes';

export const setSearchField = (input) => ({
    payload: input,
    type: actionTypes.SET_SEARCH_FIELD
});

export const requestResults = dispatch => {
    return dispatch => {
        dispatch({ type: actionTypes.REQUEST_RESULTS_PENDING });
        setTimeout(()=>{
            dispatch({ 
                type: actionTypes.REQUEST_RESULTS_SUCCESS,
                payload: ['hello', 'world'],
            });
        }, 1000);
    };
};