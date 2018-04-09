import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyClTAJMmK99M_hHwZB7mpoA03LxXoKmF4s",
    authDomain: "react-gastos.firebaseapp.com",
    databaseURL: "https://react-gastos.firebaseio.com",
    projectId: "react-gastos",
    storageBucket: "react-gastos.appspot.com",
    messagingSenderId: "1075855926435"
  };

firebase.initializeApp(config);

const database = firebase.database();


export {firebase, database as default};