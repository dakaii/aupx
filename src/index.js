import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import ReduxPromise from 'redux-promise';
import logger from 'redux-logger'
import App from './containers/App';
import './index.css';
import MovieReducer from './reducers/MovieReducer'


const middlewares = [
    ReduxPromise,
    logger
]

 export const store = createStore(MovieReducer, applyMiddleware(...middlewares));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
