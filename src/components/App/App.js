import React, {Component} from "react";
import TopBar from "../TopBar/TopBar";
import AddTodoForm from "../../containers/AddTodoForm";
import Todos from "../../containers/Todos";
import style from "./style.css";

class App extends Component{
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
            <div className={style.wrapper}>
                <div className={style.App}>
                    <TopBar changeStateHandler={this.changeState}/>
                    <AddTodoForm changeStateHandler={this.changeState} show={this.state.showTodoForm}/>
                    <Todos/>
                </div>
            </div>
        );
    };
};

export default App;