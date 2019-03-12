import * as actions from './actionTypes';

export const setSearchField = (input) => ({
    type: actions.SET_SEARCH_FIELD,
    payload: input,
});