import Todos from "../components/Todos/Todos";
import {connect} from "react-redux";
import {completeTodo, editTodo, deleteTodo} from "../actions/todo";

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(completeTodo(id))
        },
        onEditTodo: (id) => {
            return description => dispatch(editTodo(id, description));
        },
        onDeleteTodo: (id) => {
            dispatch(deleteTodo(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);