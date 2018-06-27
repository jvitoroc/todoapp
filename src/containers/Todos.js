import Todos from "../components/Todos/Todos";
import {connect} from "react-redux";
import {completeTodo, editTodo, deleteTodo, toggleDeleteMode, toggleEditMode} from "../actions/todo";
import {batchActions} from 'redux-batched-actions';

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(completeTodo(id));
        },
        onEditTodo: (id) => {
            return description => dispatch(batchActions([toggleEditMode(id), editTodo(id, description)]))
        },
        onDeleteTodo: (id) => {
            dispatch(batchActions([toggleDeleteMode(), toggleEditMode(id, true), deleteTodo()]));
        },
        toggleDeleteMode: (id) =>{
            return dispatch(toggleDeleteMode(id));
        },
        toggleEditMode: (id) =>{
            return dispatch(toggleEditMode(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);