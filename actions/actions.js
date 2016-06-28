/**
 * Created by ihoffmann on 6/24/16.
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VIS = 'SET_VIS';
export const ADD_USER = 'ADD_USER';

let nextTodoId = 2;//Should be 0 if no test data exists in /reducers/todoLists.js

export const addTodo = (text, userName) => {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text,
        userName
    }
}
export const addUser = (userName) => {
    return {
        type: ADD_USER,
        userName
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VIS,
        filter
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
}