import React, {Component} from "react";
import style from "./style.css";
import { Field, reduxForm } from 'redux-form'
import { SubmissionError } from 'redux-form'

const RenderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )
  

class SignInForm extends Component{
    render = ()=>{
        return (
            <form className={style.SignIn} onSubmit={this.props.handleSubmit}>
                <label htmlFor="username">Username</label>
                <Field name="username" component={RenderField} id="username" type='text'/>
                <label htmlFor="password">Password</label>
                <Field name="password" component={RenderField} id="password" type='text'/>
                <button type="submit">Sign in</button>
            </form>
        );
    };
};

SignInForm = reduxForm({
    form: 'signin'
})(SignInForm);

class SignIn extends Component{

    handleSubmit = (values)=>{
        return this.props.login(values.username, values.password)
            .catch((data)=>{
                console.log(data);
                const errors = {};
                if(data.data.errors)
                    data.data.errors.forEach((error)=>{
                        errors['username'] += error.detail;
                    });
                throw new SubmissionError(errors);
            });
    }

    render = ()=>{
        return (
            <SignInForm onSubmit={this.handleSubmit}/>
        );
    }
}

export default SignIn;