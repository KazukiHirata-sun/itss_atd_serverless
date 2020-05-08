import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// for firebase
// import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyCgaOuwGvMh14Dm64Ot_E11CAB2rBZOqxM",
//   authDomain: "itss-std-fb.firebaseapp.com",
//   databaseURL: "https://itss-std-fb.firebaseio.com",
//   projectId: "itss-std-fb",
//   storageBucket: "itss-std-fb.appspot.com",
//   messagingSenderId: "368538731984",
//   appId: "1:368538731984:web:238d3f34e8ac7937ace5d5"
// };
// firebase.initializeApp(firebaseConfig);
// for firebase

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
