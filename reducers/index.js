/**
 * Created by ihoffmann on 6/24/16.
 */
import { combineReducers } from 'redux';
import todoLists from './todoLists';
import visibilityFilter from './visibilityFilter';

let todoApp = combineReducers({
    todoLists,
    visibilityFilter
});

export default todoApp;