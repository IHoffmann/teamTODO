/**
 * Created by ihoffmann on 6/24/16.
 */
import React, { PropTypes } from 'react';
import TodoList from './TodoList';

const TodoListBox = ({todoLists}) => (
    <ul>
        {todoLists.map(todoList =>
            <li>
                {todoList.userName}
                <TodoList
                    todos={todoList.todos}
                    onTodoClick={todoList.onTodoClick}
                />
            </li>
        )}
    </ul>
);

TodoListBox.propTypes = {
    todoLists: PropTypes.arrayOf(PropTypes.shape({
            todos: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                completed: PropTypes.bool.isRequired,
                text: PropTypes.string.isRequired
            }).isRequired).isRequired,
            onTodoClick: PropTypes.func.isRequired,
            userName: PropTypes.string.isRequired
        }
    ))
}

export default TodoListBox;