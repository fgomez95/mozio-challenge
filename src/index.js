import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import mainReducer  from './store/reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({ mainReducer });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>, 
                document.getElementById('root'));
serviceWorker.unregister();
