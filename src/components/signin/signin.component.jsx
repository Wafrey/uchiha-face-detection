import React, { Component } from 'react';
import './signin.styles.css';

class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
      }
    
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
      }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            email: this.state.signInEmail,
            password: this.state.signInPassword
          })
        })
          .then(response => response.json())
          .then(user => {
            if (user.id) {
              this.props.loadUser(user)
              this.props.onRouteChange('home');
            }
          })
      }  

      render() {
        const { onRouteChange } = this.props;
        return (
          <article className='br3 ba b--white-90 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center'>
          <main className="bord pa4 white-80">
            <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input 
                    className="white bord pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="email" name="email-address"  
                    id="email-address"/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input 
                    className="white bord b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password" name="password"  
                    id="password"/>
                </div>               
                </fieldset>
                <div className="">
                <input 
                onClick={() => onRouteChange('home')}
                className="b ph3 pv2 input-reset white ba b--white bg-transparent grow pointer f5 dib" 
                type="submit" 
                value="Sign in"/>
                </div>
                <div className="lh-copy mt3">
                <p 
                onClick={() => onRouteChange('register')} 
                className="f5 link dim white db pointer">Register now!
                </p>               
                </div>
            </div>
          </main>
        </article>
        );
      }  
}
 
export default Signin;