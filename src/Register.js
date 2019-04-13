import React, { Component } from 'react';
import firebase from './firebase';
import { withRouter } from 'react-router-dom';

class Register extends Component {
    state = {
        email: '',
        password: '',
        error: null
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    console.log('user', user);
                    console.log('this.props', this.props);
                    this.props.history.push('/');
                })
                .catch((error)=>{
                    this.setState({error: error});
                });
    };


    render() {
        const {email, password, error} = this.state;
        return (
            <div>
                <h3><b>Register</b></h3>
                {error ? (
                    <h3><b>{error.message}</b></h3>
                ): null}
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            name='email' 
                            placeholder='Email' 
                            value={email}
                            autoComplete='email'
                            onChange={this.handleInputChange} />
                        <input 
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={password}
                            autoComplete='current-password'
                            onChange={this.handleInputChange} />
                        <button children="Register" />
                     </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Register);