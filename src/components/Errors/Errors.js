import React from 'react';

const errors = ({errorInfo, show, close}) => {
    let error = null;
    if(show){
        error = <div> Error: {errorInfo} 
                    <button onClick={() => close(false, '')}>
                        Close
                    </button>
                </div>;
    }
    
    return error;
    
};

export default errors;