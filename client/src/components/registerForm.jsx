import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import auth from '../services/authService';

class RegisterForm extends Form {
    state = { 
        data: { username: "", password: "", name: "" },
        errors: {}
    }

    schema = {
        username: Joi.string()
          .required()
          .email()
          .label("Username"),
        password: Joi.string()
          .required()
          .min(5)
          .label("Password"),
        name: Joi.string()
          .required()
          .label("Name")
    } 
    
    doSubmit = async () => {
      try {
        const response = await userService.register(this.state.data);
        auth.loginWithJwt(response.headers["x-auth-token"]);
        window.location = "/";
      } catch(ex) {
        if(ex.response && ex.response.status === 400) {
          const errors = {...this.state.errors};
          errors.username = ex.response.data;
          this.setState({ errors });
        }
      }
    }

    render() {     
        return ( 
            <div className = "bg-image">
                <img src = "https://github.com/Ceci007/images/blob/master/img-vidly/avengers.jpg?raw=true"
                 alt = "background"
               />
                <div className = "container bg-overlap">
                    <div className = "row">
                        <div className = "col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
                        <form onSubmit = {this.handleSubmit} >
                          <div className = "card card-login card-hidden">
                            <div className = "card-header card-header-primary text-center">
                                <h4>Register</h4>
                            </div>
                            <div className = "card-body text-center p-4">
                            {this.renderInput("username", "Username")}
                            {this.renderInput("password", "Password", "password")}
                            {this.renderInput("name", "Name")}
                            {this.renderButton("Register")}
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
 
export default RegisterForm;