import AddTodo from "../components/AddTodoForm/AddTodoForm";
import {connect} from "react-redux";
import {addTodo} from "../actions/todo";

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (description)=>{
            dispatch(addTodo(description));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);