/**
 * Created by ihoffmann on 6/27/16.
 */
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/actions';
import TodoListBox from '../components/TodoListBox';

const getVisibleTodos = (todoLists, visibilityFilter) => {
    switch (visibilityFilter) {
        case 'SHOW_ALL':
            console.log("In show_all in VisibleTodoList");
            return todoLists;
        case 'SHOW_COMPLETED':
            var newTodoLists = [];//Makes new object so no mutations
            for(var x = 0; x < todoLists.length; x++){//Cycle through all the todoList objects
                var tempTodoList = {//Used to add todoList objects to the new todoList array
                    userName: todoLists[x].userName,
                    onTodoClick: todoLists[x].onTodoClick,
                    todos:[]
                };

                for(var y = 0; y < todoLists.todo.length; y++){//Cycle through the list to find completed
                    if(todoLists[x].todos[y].completed){
                        tempTodoList.todos.push(todoLists[x].todos[y]);//Add completed to each todoList's list
                    }
                }
                if(tempTodoList.todos.length > 0){//Doesn't show empty todoList objects
                    newTodoLists.push(tempTodoList);
                }
            }
            return newTodoLists;
        case 'SHOW_ACTIVE':
            var newTodoLists = [];//Makes new object so no mutations
            for(var x = 0; x < todoLists.length; x++){//Cycle through all the todoList objects
                var tempTodoList = {//Used to add todoList objects to the new todoList array
                    userName: todoLists[x].userName,
                    onTodoClick: todoLists[x].onTodoClick,
                    todos:[]
                };

                for(var y = 0; y < todoLists.todo.length; y++){//Cycle through the list to find completed
                    if(!todoLists[x].todos[y].completed){
                        tempTodoList.todos.push(todoLists[x].todos[y]);//Add active items to each todoList's list
                    }
                }
                if(tempTodoList.todos.length > 0){//Doesn't show empty todoList objects
                    newTodoLists.push(tempTodoList);
                }
            }
            return newTodoLists;
        default:
            console.log("In default in VisibleTodoList");
            return todoLists;
    }
}

const mapStateToProps = (state) => {
    return {
        todoLists: getVisibleTodos(state.todoLists, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListBox);

export default VisibleTodoList