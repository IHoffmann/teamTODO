/**
 * Created by ihoffmann on 6/24/16.
 */
import {ADD_TODO, ADD_USER, TOGGLE_TODO} from '../actions/actions';

var data = [
    {
        todos: [
            {id: 1, author: "Isaac", text: "This is one todo"},
            {id: 2, author: "Isaac", text: "This is *another* todo"}
        ],
        userName: "Isaac"
    }
];

const todos = (state = {todoLists: data, visibilityFilter: 'SHOW_ALL'}, action) => {
    switch (action.type) {
        case ADD_TODO:
            
            return;
        case ADD_USER:
            
            return state;

        case TOGGLE_TODO:
            
            return state;
        default:
            return state;
    }
}

export default todos