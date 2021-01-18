import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redirect
window.location.replace('https://vimeo.com/501322684/2279ac3439');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: 'AIzaSyD__wgb6Cum9x5FX6XZlYmMapkh_giuEII',
    authDomain: 'wedding-ced87.firebaseapp.com',
    databaseURL: 'https://wedding-ced87.firebaseio.com',
    projectId: 'wedding-ced87',
    storageBucket: 'wedding-ced87.appspot.com',
    messagingSenderId: '324192344239',
    appId: '1:324192344239:web:299fb617fb8a6fbc1b9c5a'
};
// // Initialize Firebase
// Firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
