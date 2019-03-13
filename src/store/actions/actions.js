import * as actionTypes from './actionTypes';

export const setLoading = (isLoading) => ({
    payload: isLoading,
    type: actionTypes.SET_LOADING
});

export const setError = (isError, errorInfo) => ({
    payload: {
        isError,
        errorInfo
    },
    type: actionTypes.SET_ERROR,
})