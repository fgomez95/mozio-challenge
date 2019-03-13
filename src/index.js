import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import searchReducer  from './store/reducers/searchReducer';
/*import { createLogger } from 'redux-logger';*/
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    searchReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>, 
                document.getElementById('root'));
serviceWorker.unregister();
