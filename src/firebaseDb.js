import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDq9VO-pjtZClan0ffX-1kwBpuogmLLfUI",
    authDomain: "addtodo-e2daf.firebaseapp.com",
    databaseURL: "https://addtodo-e2daf.firebaseio.com",
    projectId: "addtodo-e2daf",
    storageBucket: "addtodo-e2daf.appspot.com",
    messagingSenderId: "279728176373",
    appId: "1:279728176373:web:69fdf6beaa344a961c99bc",
    measurementId: "G-EJG8BGK5RF"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();