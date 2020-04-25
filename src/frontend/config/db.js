// Get a RTDB instance
import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyA7eXhmyOdKsPx3MFJ1LfF6bWh0mqS2MB4",
        authDomain: "xleague-solitaire-fcm.firebaseapp.com",
        databaseURL: "https://xleague-solitaire-fcm.firebaseio.com",
        projectId: "xleague-solitaire-fcm",
        storageBucket: "xleague-solitaire-fcm.appspot.com",
        messagingSenderId: "173618358511",
        appId: "1:173618358511:web:fff516d30abd5b05ead31a",
        measurementId: "G-K7GL2CMF7S"
    })
    .database()