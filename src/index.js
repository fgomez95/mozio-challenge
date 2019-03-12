import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import searchReducer  from './store/reducers/searchReducer';

const rootReducer = combineReducers({
    searchReducer,
});
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, 
                document.getElementById('root'));
serviceWorker.unregister();
