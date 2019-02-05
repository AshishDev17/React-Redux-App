import { combineReducers } from 'redux';

//import all sub reducers
import authors from './authors.js';

const rootReducer = combineReducers({
    authors
});


export default rootReducer;