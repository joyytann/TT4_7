import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Customer Name</label>
                    <input type="text" className="form-control" placeholder="Customer Name" />
                </div>

                <div className="form-group">
                    <label>Customer Phone</label>
                    <input type="email" className="form-control" placeholder="Enter Phone" />
                </div>

                <div className="form-group">
                    <label>Customer Address</label>
                    <input type="email" className="form-control" placeholder="Enter Address" />
                </div>

                <div className="form-group">
                    <label>User ID</label>
                    <input type="text" className="form-control" placeholder="User ID" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Confirmed Password</label>
                    <input type="password" className="form-control" placeholder="Enter password again" />
                </div>               

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}