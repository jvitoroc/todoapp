import AddTodo from "../components/AddTodoForm/AddTodoForm";
import {connect} from "react-redux";
import {addTodoAsync} from "../actions/todo";

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (description)=>{
            dispatch(addTodoAsync(description));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);