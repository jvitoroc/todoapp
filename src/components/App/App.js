import React, {Component} from "react";
import TopBar from "../TopBar/TopBar";
import AddTodoForm from "../../containers/AddTodoForm";
import Todos from "../../containers/Todos";
import style from "./style.css";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {showTodos: true};
    }

    changeState = ()=>{
        this.setState(({showTodos})=>{
            return {showTodos: !showTodos};
        });
    }

    render = ()=>{
        return (
            <div className={style.wrapper}>
                <div className={style.App}>
                    <TopBar changeStateHandler={this.changeState}/>
                        {this.state.showTodos
                            ? <Todos/>
                            : <AddTodoForm changeStateHandler={this.changeState}/>
                        }
                </div>
            </div>
        );
    };
};

export default App;