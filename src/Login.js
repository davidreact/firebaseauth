import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    state= {
        email: '',
        password: '',
        error: null
    }

    handleInputChange = (event)=> {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email,password)
                .then(user => {
                    console.log('user', user);
                    console.log('this.props', this.props);
                    this.props.history.push('/')
                })
                .catch(error => {
                    this.setState({error: error})
                })
    }

    render() {
        const {email, password, error} = this.state;
        return (
            <div>
                <div>
                    <h3><b>Log In</b></h3>
                </div>
                {error ? (
                    <div className='alert alert-danger'>
                        <p>{error.message}</p>
                    </div>
                ): null}
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' name='email' placeholder='Email' autoComplete='username' onChange={this.handleInputChange}/>
                        <input type='password' name='password' placeholder='Password' autoComplete='current-password' onChange={this.handleInputChange}/>
                        <button children='Log in' />
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);