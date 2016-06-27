/**
 * Created by ihoffmann on 6/24/16.
 */
var data = [
    {
        todos: [
            {id: 1, author: "Isaac", text: "This is one todo"},
            {id: 2, author: "Isaac", text: "This is *another* todo"}
        ],
        userName: "Isaac"
    }
];

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            //TODO add in this reducer
            return ;
        case 'ADD_TODO':
            //TODO add in this reducer
            return ;
        case 'TOGGLE_TODO':
            //TODO add in this reducer
            return;
        default:
            return state
    }
}

const todos = (state = data, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return;
        case 'ADD_TODO':
            for(var x = 0; x < state.length; x++){
                if(state[x].userName === action.userName){
                    return todo(state[x].todos, action);
                }
            }
            return state;

        case 'TOGGLE_TODO':
            for(var x = 0; x < state.length; x++){
                if(state[x].userName === action.userName){
                    return todo(state[x].todos, action);
                }
            }
            return state;
        default:
            return state;
    }
}

export default todos