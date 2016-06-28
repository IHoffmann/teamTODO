/**
 * Created by ihoffmann on 6/27/16.
 */
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/actions';
import TodoListBox from '../components/TodoListBox';
import _ from 'lodash';

const getVisibleTodos = (todoLists, visibilityFilter) => {
    let newTodoLists = [];//Makes new object so no mutations
    switch (visibilityFilter) {
        case 'SHOW_ALL':
            console.log("In show_all in VisibleTodoList");
            return todoLists;
        case 'SHOW_COMPLETED':
            console.log("In show_completed in VisibleTodoList");
            for(let x = 0; x < todoLists.length; x++){//Cycle through all the todoList objects
                let tempTodoList = {//Used to add todoList objects to the new todoList array
                    todos:[],
                    userName: todoLists[x].userName,
                    onTodoClick: todoLists[x].onTodoClick
                };

                for(let y = 0; y < todoLists[x].todos.length; y++){//Cycle through the list to find completed
                    if(todoLists[x].todos[y].completed){
                        tempTodoList.todos.push(_.cloneDeep(todoLists[x].todos[y]));//Add completed to each todoList's list
                    }
                }
                if(tempTodoList.todos.length > 0){//Doesn't show empty todoList objects
                    newTodoLists.push(tempTodoList);
                }
            }
            return newTodoLists;
        case 'SHOW_ACTIVE':
            console.log("In show_active in VisibleTodoList");
            for(let x = 0; x < todoLists.length; x++){//Cycle through all the todoList objects
                let tempTodoList = {//Used to add todoList objects to the new todoList array
                    todos:[],
                    userName: todoLists[x].userName,
                    onTodoClick: todoLists[x].onTodoClick
                };

                for(let y = 0; y < todoLists[x].todos.length; y++){//Cycle through the list to find completed
                    if(!todoLists[x].todos[y].completed){
                        tempTodoList.todos.push(_.cloneDeep(todoLists[x].todos[y]));//Add active items to each todoList's list
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
};

const mapStateToProps = (state) => {
    console.log("In VisibleTodoList.js state.visibilityFilter===" + state.visibilityFilter);
    return {
        todoLists: getVisibleTodos(state.todoLists, state.visibilityFilter),
        key: 'key'
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id, userName) => {
            dispatch(toggleTodo(id, userName))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListBox);

export default VisibleTodoList;