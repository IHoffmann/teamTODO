/**
 * Created by ihoffmann on 6/24/16.
 */
import React, { PropTypes } from 'react';

const Todo = ({ todo, onTodoClick }) => (
    <li
        onClick={onTodoClick}
        style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
    >
        {todo.text}
    </li>
);

Todo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default Todo;