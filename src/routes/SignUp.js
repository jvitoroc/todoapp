import React, {Component, Fragment} from "react";
import TopBar from "../components/TopBar/TopBar";
import AddTodoForm from "../containers/AddTodoForm";
import Todos from "../containers/Todos";

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {showTodoForm: false};
    }

    changeState = ()=>{
        this.setState(({showTodoForm})=>{
            return {showTodoForm: !showTodoForm};
        });
    }

    render = ()=>{
        return (
            <Fragment>
                <TopBar changeStateHandler={this.changeState}/>
                <AddTodoForm changeStateHandler={this.changeState} show={this.state.showTodoForm}/>
                <Todos/>
            </Fragment>
        );
    };
};

export default SignUp;