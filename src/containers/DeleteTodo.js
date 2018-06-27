import DeleteTodo from "../components/DeleteTodo/DeleteTodo";
import {connect} from "react-redux";
import {deleteTodo, toggleDeleteMode, toggleEditMode} from "../actions/todo";
import {batchActions} from 'redux-batched-actions';

const mapDispatchToProps = dispatch => {
    return {
        onClick: (id)=>{
            dispatch(batchActions([toggleDeleteMode(id), toggleEditMode(id, true), deleteTodo(id)]));
        }
    }
}

export default connect(null, mapDispatchToProps)(DeleteTodo);