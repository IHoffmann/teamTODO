/**
 * Created by ihoffmann on 6/24/16.
 */
import { combineReducers } from 'redux';
import todos from './todo';
import visibilityFilter from './visibilityFilter'

let todoApp = combineReducers({
    todos,
    visibilityFilter
});

export default todoApp;