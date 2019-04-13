##This Project is an example of React with Firebase Authentication

https://davidreact.github.io/firebaseauth

Steps:
- Create skeleton react application files
- installed react react-dom react-router-dom firebase parcel-bundler @babel/core @babel/plugin-proposal-class-properties
- Updated package.json with scripts for parcel-bundler and launched the local server

- The authentication needs:
1. Navigation.js: (Navbar and pages will be displayed here using routes)
2. Home.js: doesnt require authentication
3. Login.js: if not authenticated app will redirect here. This is done using the ProtectedRoute component that checks if the user is authenticated before allowing access to the rest of the application.
4. Register.js: allows user to register
5. Logout.js: allows user to log out and redirects to login.js.
6. ProtectedRoute.js: checks if the user is authenticated before allowing access to certain routes otherwise it redirects to login.js.
7. Dashboard.js: this the secured page within the application
8. index.js: loads React into the DOM of the page.
9. firebase.js: contains the config to connect to firebase. This file is not loaded to Github so not to reveal the credentials. This is what it looks like. (see below for code sample)
10. App.js: checks if the user is authenticated and passes a prop to Navigation.js so that it knows what to display. Probably not needed and could be integrated into the Navigation.js.

````javascript
#src/firebase.js
import firebase from 'firebase';
const config = {
 apiKey: 'xxxxxx',
 authDomain: 'xxxxxx.firebaseapp.com',
 databaseURL: 'https://xxxxxx.firebaseio.com',
 projectId: 'xxxxxx',
 storageBucket: '',
 messagingSenderId: 'xxxxxx',
};
firebase.initializeApp(config);
export default firebase;
````
