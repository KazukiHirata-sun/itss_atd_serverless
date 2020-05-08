import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StylesProvider } from '@material-ui/styles';

// For Firebase
// import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: XXXXXXXXXXXXXXXx,
//   authDomain: XXXXXXXXXXXXXXXx,
//   databaseURL: XXXXXXXXXXXXXXXx,
//   projectId: XXXXXXXXXXXXXXXx,
//   storageBucket: XXXXXXXXXXXXXXXx,,
//   messagingSenderId: XXXXXXXXXXXXXXXx,
//   appId: XXXXXXXXXXXXXXXx
// };

// firebase.initializeApp(firebaseConfig);
// For Firebase

ReactDOM.render(
  <StylesProvider injectFirst>
    <App />
  </StylesProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();