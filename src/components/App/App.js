import React, {Component} from "react";
import {Dashboard, SignIn, SignUp} from "../../routes/";
import {Route, Switch} from "react-router-dom";
import style from "./style.css";

class App extends Component{
    render = ()=>{
        return (
            <div className={style.wrapper}>
                <div className={style.App}>
                    <Switch>
                        <Route exact path="/" component={Dashboard}/>
                        <Route exact path="/signup" component={SignUp}/>
                        <Route exact path="/signin" component={SignIn}/>
                    </Switch>
                </div>
            </div>
        );
    };
};

export default App;