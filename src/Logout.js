import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { withRouter } from 'react-router-dom';


const logOutUser = () => {
    firebase.auth().signOut();
}

const Logout = () => {
    return (
        <button onClick={logOutUser} children="Log Out" />
    );
};

export default withRouter(Logout);