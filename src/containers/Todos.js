import Todos from "../components/Todos/Todos";
import {connect} from "react-redux";
import {completeTodo, editTodo, toggleDeleteMode, toggleEditMode} from "../actions/todo";

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(completeTodo(id));
        },
        onEditTodo: (id) => {
            return description => dispatch(editTodo(id, description))
        },
        toggleDeleteMode: (id) =>{
            dispatch(toggleDeleteMode(id));
        },
        toggleEditMode: (id) =>{
            dispatch(toggleEditMode(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);