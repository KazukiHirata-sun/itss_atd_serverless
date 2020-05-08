import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StylesProvider } from '@material-ui/styles';

// For Firebase
// import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyCnIUVm1Yw0DGmza0BYRqzhtU_x1ZIe1bA",
//   authDomain: "todolist-bc9ed.firebaseapp.com",
//   databaseURL: "https://todolist-bc9ed.firebaseio.com",
//   projectId: "todolist-bc9ed",
//   storageBucket: "",
//   messagingSenderId: "720192206141",
//   appId: "1:720192206141:web:e2fed1410f3d38d9"
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