/**
 * Created by ihoffmann on 6/24/16.
 */
import {store} from 'redux';
var _ = require('lodash');
import {ADD_TODO, ADD_USER, TOGGLE_TODO, toggleTodo} from '../actions/actions';

var data = [
    {
        todos: [
            {id: 1, author: "Isaac", text: "This is one todo"},
            {id: 2, author: "Isaac", text: "This is *another* todo"}
        ],
        userName: "Isaac",
        onTodoClick: (id) => {
            store.dispatch(toggleTodo(id))
        }
    }
];

const todoList = (state = data, action) => {
    switch (action.type) {
        case ADD_TODO:
            console.log(state);
            for(var x = 0; x < state.length; x ++){
                if(state[x].userName === action.userName) {
                    let  newState = _.cloneDeep(state);
                    //let newState = Object.assign({}, state);//THIS MAY NOT WORK DUE TO DEEP COPY ISSUES
                    newState[x].todos.push({id: action.id, author:action.author, text: action.text});
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
            
            var newTodoList = {
                todos:[],
                userName: action.userName,
                onTodoClick: data.onTodoClick
            };
            console.log(state);
            return [_.cloneDeep(state), newTodoList];
            /*return [
                ...state,//THIS MAY NOT WORK DUE TO DEEP COPY ISSUES
                newTodoList
            ];*/
        case TOGGLE_TODO:
            let  newState = _.cloneDeep(state);
            //var newState = Object.assign({}, state);//THIS MAY NOT WORK DUE TO DEEP COPY ISSUES
            for(var x = 0; x < newState.length; x ++){//finds the user
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

export default todoList;