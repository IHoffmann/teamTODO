/**
 * Created by ihoffmann on 6/24/16.
 */
import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick}) => (
    <ul>
        {todos.map(todo =>
            <Todo
                todo={todo}
                onTodoClick={() => onTodoClick(todo.id)}
                key={todo.id}
            />
        )}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;