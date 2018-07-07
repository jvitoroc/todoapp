import {SignIn} from "../routes";
import {connect} from "react-redux";
import {login} from "../actions/auth";

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password)=>{
            dispatch(login(username, password));
        }
    }
}

export default connect(null, mapDispatchToProps)(SignIn);