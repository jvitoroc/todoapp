import React, {Component} from "react";
import style from "./style.css";
import {MdDone} from "react-icons/lib/md";
import classnames from "classnames";
import Pressed from "../../helpers/Pressed";
import DeleteTodo from "../../containers/DeleteTodo";

class Todo extends Component{
    
    render = ()=> {
        const {data, editModeHandler, id, deleteModeHandler, deleteMode, editMode, onToggle, onEdit, onDelete} = this.props;
        let description = null;
        const checkBoxColor = data.completed ?  "#fbfbfb":"#051A29";

        if(editMode){
            const classes = `${style["description-input"]} ${style.description}`
            description = <input type="text"
                            onKeyUp={(e)=>{e.persist(); onEdit(e.target.value)}}
                            autoFocus
                            defaultValue={data.description}
                            className={classes}/>;
        }else{
            description = (
                <div onDoubleClick={()=>editModeHandler(id)}
                    className={style.description}>
                    {data.description}
                </div>
            );
        }
    
        const editModeClasses = classnames(style['edit-mode'], {'active': editMode});
        const todoClasses = classnames(style.Todo, {'delete-mode': deleteMode})
        return (
            <React.Fragment>
                <Pressed time={350}
                    handler={()=>deleteModeHandler(id, !deleteMode)}>
                    <li className={todoClasses}>
                        <div className={style.content}>
                            <div className={editModeClasses}></div>
                            {description}
                            <div className={style.checkButton}
                                onClick={()=>{onToggle(id)}}>
                                <MdDone size={29}
                                    color={checkBoxColor}/>
                            </div>
                        </div>
                    </li>
                </Pressed>
                <DeleteTodo deleteHandler={()=>onDelete(id)}
                    cancelHandler={()=>deleteModeHandler(id, false)}
                    show={deleteMode}/>
            </React.Fragment>
        );
    }
};

export default Todo;