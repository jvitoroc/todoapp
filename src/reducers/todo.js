import {ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, TOGGLE_DELETE_MODE, TOGGLE_EDIT_MODE} from "../actions/todo";
import {whereIndex, removeItem} from "../helpers/utils";
import {combineReducers} from "redux";

const initialState = {
    todos: [],
    editMode: [],
    deleteMode: null
}

let lastId = -1;

const todos = (state = initialState.todos, action)=>{
    let _todos = null;
    let index = null;
    switch(action.type){
        case ADD_TODO:
            return [...state, {description: action.description, id: ++lastId}]
        
        case DELETE_TODO:
            return state.filter((todo)=>{
                return todo.id !== action.id;
            });
        
        case EDIT_TODO:
            index = whereIndex(state, {id: action.id});
            if(index !== -1){
                _todos = [...state];
                _todos[index].description = action.description;
                _todos[index].editMode = false;
                return _todos;
            }
        
        case COMPLETE_TODO:
            index = whereIndex(state, {id: action.id});
            if(index !== -1){
                _todos = [...state];
                _todos[index].completed = !_todos[index].completed;
                return _todos;
            }
        
        case TOGGLE_EDIT_MODE:
            index = whereIndex(state, {id: action.id});
            if(index !== -1){
                _todos = [...state];
                _todos[index].editMode = !_todos[index].editMode;
                return _todos;
            }

        case TOGGLE_DELETE_MODE:
            index = whereIndex(state, {id: action.id});
            if(index !== -1){
                _todos = [...state];
                _todos[index].deleteMode = !_todos[index].deleteMode;
                _todos = _todos.map((todo)=>{
                    if(todo.id !== action.id && todo.deleteMode)
                        return {...todo, deleteMode: false};
                    return todo;
                })
                return _todos;
            }

        default:
            return state;
    }
}

const editMode = (state = initialState.editMode, action)=>{

    switch(action.type){
        case REMOVE_TODO:
        case TOGGLE_EDIT_MODE:
            let newState = removeItem(state, action.id);
            return !newState && action.type !== REMOVE_TODO ? [...state, action.id] : newState;

        default: return state;
    }
}

// for future reducers
const todoApp = combineReducers({
    todos,

});

export default todoApp;