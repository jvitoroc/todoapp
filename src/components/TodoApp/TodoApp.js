import React from "react";
import TopBar from "../TopBar/TopBar";
import Todos from "../Todos/Todos";
import style from "./style.css";

const TodoApp = ({addTodoHandler, todos, changeDescriptionHandler, saveHandler, deleteModeHandler, deleteTodoHandler, completeTodo})=>{

    return (
        <div className={style.wrapper}>
            <div className={style.TodoApp}>
                <TopBar addTodoHandler={addTodoHandler}/>
                <Todos todos={todos}
                    changeDescriptionHandler={changeDescriptionHandler}
                    saveHandler={saveHandler}
                    deleteModeHandler={deleteModeHandler}
                    deleteTodoHandler={deleteTodoHandler}
                    completeTodo={completeTodo}/>
            </div>
        </div>
    );
};

export default TodoApp;