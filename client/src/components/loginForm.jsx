import React from 'react';
import { Redirect } from 'react-router-dom';
import Joi from 'joi-browser';
import Form from './common/form';
import auth from '../services/authService';

class LoginForm extends Form {
    state = {
        data: { username: '', password: '' },
        errors: {}
    }

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

    doSubmit = async () => {
        try {
            const { data } = this.state;
            await auth.login(data.username, data.password);
            const { state } = this.props.location;
            window.location = state ? state.from.pathname : "/";
        } catch(ex) {
            if(ex.response && ex.response.status === 400) {
                const errors = {...this.state.errors};
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    }

    render() { 
        if(auth.getCurrentUser()) return <Redirect to="/" />;

        return ( 
            <div className = "bg-image">
                 <img src = "https://github.com/Ceci007/images/blob/master/img-vidly/avengers.jpg?raw=true"
                 alt = "background"
               />
               <div className = "container bg-overlap">
                   <div className = "row">
                       <div className = "col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
                       <form onSubmit = {this.handleSubmit}>
                        <div  className = "card card-login card-hidden">
                            <div className = "card-header card-header-primary text-center">
                            <h4>Login</h4> 
                            </div>
                            <div className = "card-body text-center p-4">
                                {this.renderInput("username", "Username")}
                                {this.renderInput("password", "Password", "password")}
                                {this.renderButton('Login')}
                            </div>
                        </div>
                        </form>
                       </div>
                   </div>
               </div>
            </div>
         );
    }
}
 
export default LoginForm;