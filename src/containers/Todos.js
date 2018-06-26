import Todos from "../components/Todos/Todos";
import {connect} from "react-redux";
import {completeTodo} from "../actions/todo";

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(completeTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);