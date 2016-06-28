/**
 * Created by ihoffmann on 6/24/16.
 */
import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import {addTodo, addUser} from '../actions/actions';

let AddBar = ({ dispatch }) => {
    let inputUserName;
    let inputTodo;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!inputUserName.value.trim()) {
                    return;
                }
                else if (!inputTodo.value.trim() && inputUserName.value.trim()){
                    dispatch(addUser(inputUserName.value));
                }
                else{
                    dispatch(addUser(inputUserName.value));
                    dispatch(addTodo(inputTodo.value, inputUserName.value));
                }
                inputUserName.value = '';
                inputTodo.value = '';
            }}>
                <input ref={user => {inputUserName = user;}} />
                <input ref={node => {inputTodo = node;}} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
};
AddBar = connect()(AddBar);

export default AddBar;