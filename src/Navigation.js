import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import LogOut from './Logout';
import Register from './Register';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import styled, {css} from 'styled-components';
import firebase from 'firebase/app';

// https://www.zeolearn.com/magazine/react-and-firebase-authentication-using-email-and-password

const DivStyled = styled.div`
    padding: 10px 0px;


    ${props => props.primary && css`
        background: palevioletred;
        color: white;
    `};
    `
    
 const bodyStyle = {
    //  margin: '5% 5px'
 }



const Navigation = (props) => {
    // console.log('navigation props', props, firebase.auth().currentUser);
    return (
        <BrowserRouter
            basename={process.env.NODE_ENV === 'development' ? '' : '/firebaseauth'}
        >
            <div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        {props.authenticated?
                            (<DivStyled>
                                <NavLink className='navigation' exact={true} to='/'>Home</NavLink>
                                <NavLink className='navigation' to='/dashboard'>Dashboard</NavLink>
                                <NavLink className='navigation' to='/logout'>Logout</NavLink>
                            </DivStyled>):
                            (<DivStyled>
                                <NavLink className='navigation' exact={true} to='/'>Home</NavLink>
                                <NavLink className='navigation' to='/login'>Login</NavLink>
                                <NavLink className='navigation' to='/register'>Register</NavLink>
                            </DivStyled>)}
                    </div>
                    <div style={{padding: '10px', color: 'gray'}}>
                      {firebase.auth().currentUser ? <span>Welcome back {firebase.auth().currentUser.email} </span>: null}
                    </div>  
                </div>
                <br/>
                
                <div style={bodyStyle}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route authenticated={props.authenticated} path='/login' component={Login} />
                        <Route path='/register' component={Register} />
                        <ProtectedRoute authenticated={props.authenticated} path='/logout' component={LogOut} />
                        <ProtectedRoute authenticated={props.authenticated} path='/dashboard' component={Dashboard} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Navigation;