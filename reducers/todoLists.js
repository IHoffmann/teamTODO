/**
 * Created by ihoffmann on 6/24/16.
 */
import { dispatch } from 'redux';
var _ = require('lodash');
import { store } from '../index';
import {ADD_TODO, ADD_USER, TOGGLE_TODO, toggleTodo} from '../actions/actions';

var data = [
    {
        todos: [
            {id: 0, author: "Isaac", text: "This is one todo", completed:false},
            {id: 1, author: "Isaac", text: "This is *another* todo", completed:false}
        ],
        userName: "Isaac",
        onTodoClick: (id) => {
            store.dispatch(toggleTodo(id))
        }
    }
];

const todoLists = (state = data, action) => {
    let  newState = _.cloneDeep(state);
    switch (action.type) {
        case ADD_TODO:
            for(var x = 0; x < state.length; x ++){
                if(state[x].userName === action.userName) {
                    newState[x].todos.push({id: action.id, author:action.userName, text: action.text, completed:false});
                    console.log(newState);
                    return newState;
                }
            }
            return state;
        case ADD_USER:
            for(var x = 0; x < state.length; x ++){
                if(action.userName === state[x].userName){//Ignores already added users
                    console.log("Found the same user");
                    return state;
                }
            }
            
            let newTodoList = {
                todos:[],
                userName: action.userName,
                onTodoClick: (id) => {
                    store.dispatch(toggleTodo(id))
                }
            };
            console.log(state);
            newState.push(newTodoList);
            return newState;
        case TOGGLE_TODO:
            for(var x = 0; x < newState.length; x ++){//goes through users
                for(var y = 0; y < newState[x].todos.length; y ++){
                    if(action.id === newState[x].todos[y].id){//finds the entry
                        newState[x].todos[y].completed = !newState[x].todos[y].completed;
                        return newState;
                    }
                }
            }
            return state;
        default:
            return state;
    }
};

export default todoLists;