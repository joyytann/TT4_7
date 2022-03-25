import React, { Component } from "react";

//login check
import validateLogin from "../Function/login";

export default class Login extends Component {

   /* constructor(){
        super();
        this.state = {
            userName: '',
            password: '',
            loginFailedMessage: '',

        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin = (userName,password)=> {
        if (validateLogin(userName,password)){
            this.setState({userName,password});
            console.log(this.state);
        } else {
            this.setState({loginFailedMessage: 'login failed'});
        }
    }*/

    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>User ID</label>
                    <input type="email" className="form-control" placeholder="Enter User ID" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Login</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}
