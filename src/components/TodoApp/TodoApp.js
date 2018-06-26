import React from "react";
import TopBar from "../TopBar/TopBar";
import Todos from "../../containers/Todos";
import style from "./style.css";

const TodoApp = ()=>{
    return (
        <div className={style.wrapper}>
            <div className={style.TodoApp}>
                <TopBar/>
                <Todos/>
            </div>
        </div>
    );
};

export default TodoApp;