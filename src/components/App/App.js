import React from "react";
import TopBar from "../TopBar/TopBar";
import Todos from "../../containers/Todos";
import style from "./style.css";

const App = ()=>{
    return (
        <div className={style.wrapper}>
            <div className={style.App}>
                <TopBar/>
                <Todos/>
            </div>
        </div>
    );
};

export default App;