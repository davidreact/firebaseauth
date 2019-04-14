import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import background from './assets/office.jpg';

const Jumbotrone = styled.div`
    background: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    max-width: 100%;
    height: 60vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    // flex-wrap: wrap;
`
const DivBlock = styled.span`
        margin-left: 2px;
    @media (max-width: 500px) {
        display: block;
        margin-top: 5px;
    } 
`


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
                    // console.log('user', user);
                    // console.log('this.props', this.props);
                    this.props.history.push('/')
                })
                .catch(error => {
                    this.setState({error: error})
                })
    }

    render() {
        const {email, password, error} = this.state;
        return (
            <Jumbotrone>
                    <h3 style={{margin: '0px 0px 10px 0px', color: 'white'}}><b>Log In</b></h3>
                {error ? (
                    <div className='alert alert-danger'>
                        <p>{error.message}</p>
                    </div>
                ): null}
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' name='email' placeholder='Email' autoComplete='username' onChange={this.handleInputChange}/>
                        <input type='password' name='password' placeholder='Password' autoComplete='current-password' onChange={this.handleInputChange}/>
                        <DivBlock>
                            <button className='btn btn-primary' children='Log in' />
                        </DivBlock>
                    </form>
                </div>
            </Jumbotrone>
        );
    }
}

export default withRouter(Login);