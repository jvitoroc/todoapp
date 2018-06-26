import AddTodo from "../components/AddTodo/AddTodo";
import {connect} from "react-redux";
import {addTodo} from "../actions/todo";

const mapDispatchToProps = dispatch => {
    return {
        onClick: (description)=>{
            dispatch(addTodo(description));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);