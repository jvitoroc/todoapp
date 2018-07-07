import React, {Component, Fragment} from "react";

class SignIn extends Component{
    render = ()=>{
        return (
            <Fragment>
                <div onClick={()=>this.props.login('jvitorc', '123gostei123')}>asd</div>
            </Fragment>
        );
    };
};

export default SignIn;