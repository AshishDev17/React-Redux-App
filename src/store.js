import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'; 

//Store
export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware)));

export * from './reducers/authors.js';
