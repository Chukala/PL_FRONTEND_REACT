import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './account.css';

class Login extends Component{
    constructor(){
        super();
        this.state= {
            email:'',
            password:''
        }

        this.onChange = this.onChange.bind(this)
       /* this.onSubmit = this.onSubmit.bind(this)*/
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    /*onSubmit(e) {
        e.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password
        }
    }*/

    render(){
        return(
          <div className="login-container">
                <div className="clear-fix"></div>
                <div className="login-form-container">
                    <div className="box-wrapper">
                        <div className="login">
                            <div className="customer-type"><i className="fa fa-user"></i><strong>Login</strong></div>
                        </div>
                        <div id="login-password-form">
                            <form method="post" action="/user/login" >
                                <div className="error_msg">
                                        {/*if(messages){ 
                                            for(var i=0; i<messages.length; i++) {
                                            <li> messages[i]</li> 
                                            }}*/}
                                    </div>
                                <div className="" id="isLogin">
                                    <div className="login--regular">
                                        <fieldset className= "fieldset">
                                            <legend>Email Address*</legend>
                                            <input type="email"  placeholder="Email Address" name="email" id="ShopLoginForm_Login" 
                                            value = { this.state.email } onChange = { this.onChange } autoCorrect="off" autoCapitalize="none"/>
                                        </fieldset>
                                    </div>
                                    <div className="password">
                                        <fieldset className= "fieldset">
                                            <legend>Password*</legend>
                                            <input value={this.state.password} onChange={this.onChange} required="" type="password" placeholder="********" name="password" id="ShopLoginForm_Password"/>
                                        </fieldset>
                                    </div>
                                    <div className="login_btn">
                                        <button type="submit" className="btn btn-lg btn-block">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="divider_component">
                            <span>Or</span>
                        </div>
                            <p>Don't have an account ?</p>
                        <div className="login_btn">
                            <button><Link className="register-btn" to="/register">Register</Link></button>
                        </div>
                    </div>
                </div>
                <div className="clear-fix"></div>
            </div>           
        )
    }

 }

export default Login;