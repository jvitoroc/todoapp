import DeleteTodo from "../components/DeleteTodo/DeleteTodo";
import {connect} from "react-redux";
import {deleteTodo} from "../actions/todo";

const mapDispatchToProps = dispatch => {
    return {
        onClick: (id)=>{
            dispatch(deleteTodo(id));
        }
    }
}

export default connect({}, mapDispatchToProps)(DeleteTodo);