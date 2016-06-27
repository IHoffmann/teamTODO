/**
 * Created by ihoffmann on 6/24/16.
 */
import {store} from 'redux';
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
            for(var x = 0; x < state.length; x ++){
                if(state[x].userName === action.userName) {
                    let newState = Object.assign({}, state);//THIS MAY NOT WORK DUE TO DEEP COPY ISSUES
                    newState.state[x].todos.push({id: action.id, author:action.author, text: action.text});
                    return newState;
                }
            }
            return state;
        case ADD_USER:
            for(var x = 0; x < state.length; x ++){
                if(action.userName === state[x].userName){//Ignores already added users
                    return state;
                }
            }
            
            var newTodoList = {
                todos:[],
                userName: action.userName,
                onTodoClick: data.onTodoClick
            };

            return [
                ...state,//THIS MAY NOT WORK DUE TO DEEP COPY ISSUES
                newTodoList
            ];
        case TOGGLE_TODO:
            var newState = Object.assign({}, state);//THIS MAY NOT WORK DUE TO DEEP COPY ISSUES
            for(var x = 0; x < newState.state.length; x ++){//finds the user
                for(var y = 0; y < newState.state[x].todos.length; y ++){
                    if(action.id === newState.state[x].todos[y].id){//finds the entry
                        newState.state[x].todos[y].completed = !newState.state[x].todos[y].completed;
                        return newState.state;
                    }
                }
            }
            return state;
        default:
            return state;
    }
};

export default todoList;