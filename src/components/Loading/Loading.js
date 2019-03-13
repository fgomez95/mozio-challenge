import React from 'react';
import './Loading.css';

const loading = ({isLoading}) => {
    let loadingComponent = null;
    if(isLoading) loadingComponent = <div className="loading">Loading...</div>;
    return(
        loadingComponent
        );
};

export default loading;