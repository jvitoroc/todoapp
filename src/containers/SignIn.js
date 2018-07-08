import {SignIn} from "../routes";
import {connect} from "react-redux";
import {login} from "../actions/auth";

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password)=>{
            return new Promise((resolve, reject)=>{
                dispatch(login(username, password, resolve, reject));
            });
        }
    }
}

export default connect(null, mapDispatchToProps)(SignIn);