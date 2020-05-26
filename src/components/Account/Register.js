import React, { Component } from 'react';
import './account.css';

 class Register extends Component {
        constructor() {
            super()
            this.state = {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                errors: {}
            }

            this.onChange = this.onChange.bind(this)
            this.onSubmit = this.onSubmit.bind(this)
        }

        onChange(e) {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        onSubmit(e) {
            e.preventDefault()
            this.setState({
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              email: this.state.email,
              password: this.state.password
            })
        }

    render(){
        return(
    <div className="login-container">
      <div className="clear-fix"></div>
      <div className="login-form-container">
          <div className="box-wrapper">
              <div className="login_reg">
                  <h3>Register</h3>
                  <span>Fill in your details to register as a member.</span>
              </div>

              <div id="login-password-form">
                  <form method="post" action="/user/register">
                      <div className="error_msg">
                          {/* if(messages){
                              for(var i=0; i<messages.length; i++){
                              <li> messages[i]</li>
                              }
                           }
                        */}
                      </div>

                      <div className="full-name">
                          <fieldset className="fieldset">
                              <legend>First Name<span className="required-symbol">*</span></legend>
                              <input type="text" required="" id="first-name" placeholder="First Name*" name="first_name" value={this.state.first_name}
                                     onChange={this.onChange}
                              />
                          </fieldset>
                          <fieldset className="fieldset">
                              <legend>Last Name<span className="required-symbol">*</span></legend>
                              <input type="text" required="" id="last-name" placeholder="Last Name*" name="last_name" value={this.state.last_name}
                                     onChange={this.onChange}
                              />
                          </fieldset>
                      </div>

                      <div className="email">
                          <fieldset className="fieldset">
                              <legend>Email Address<span className="required-symbol">*</span></legend>
                              <input type="email" required="" id="email" placeholder="Email Address*" name="email"
                                  value={this.state.email} onChange={this.onChange}
                              />
                          </fieldset>
                      </div>

                      <div className="user_psw" id="password">
                          <fieldset className="fieldset">
                              <legend>Password<span className="required-symbol">*</span>
                              </legend>
                              <input type="password" required="" id="password" placeholder="******" name="password" value={this.state.password}
                                     onChange={this.onChange}

                              />
                          </fieldset>
                      </div>
                      <div className="login_btn">
                          <button type="submit" className="btn btn-lg btn-block">Register</button>
                      </div>

                  </form>
              </div>

          </div>
      </div>
    <div className="clear-fix"></div>
  </div>
        )
    }
}

export default Register;
