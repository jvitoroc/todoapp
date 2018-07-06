import React, {Component} from "react";
import style from "./style.css";
import {Form, Text} from "informed";
import classnames from "classnames";

class AddTodoForm extends Component{
    state = {errors: {description: false}}

    validateDescription = (value)=>{
        return value === undefined || value === null || value.length < 5 ? "Description must be longer than 4 characters!": value.length > 160 ? "Description must be shorter than 161 characters!":null;
    }

    onSubmit = ()=>{
        this.formApi.submitForm();
        this.setState({errors:{description: this.formApi.getError('description')}});
        let state = this.formApi.getState();
        if(!state.invalid){
            this.props.addTodo(state.values.description);
            this.props.changeStateHandler();
            this.formApi.setValue("description", "");
        }
    }

    onCancel = ()=>{
        this.formApi.setValue("description", "");
        this.props.changeStateHandler();
    }
    
    render = ()=> {
        let classes = classnames(style.AddTodoForm, {'show': this.props.show})

        return (
            <div className={classes}>
                <Form autoComplete={'off'} className={style.form} getApi={(api)=>this.formApi = api}>
                    <label className={style.label} htmlFor="description">Todo</label>
                    <Text className={style.text} field="description" id="description" validate={this.validateDescription}/>
                    <div className={style.error}>{this.state.errors.description}</div>
                    <button className={style.button} onClick={this.onSubmit}>
                        Add
                    </button>
                    <button className={style.button} onClick={this.onCancel}>
                        Cancel
                    </button>
                </Form>
            </div>
        );
    }
};

export default AddTodoForm;