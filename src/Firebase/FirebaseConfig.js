
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyDiMQsmC_2RRoZAlHfXswkslCqMoxCYcJ0",
    authDomain: "foodie-94876.firebaseapp.com",
    projectId: "foodie-94876",
    storageBucket: "foodie-94876.appspot.com",
    messagingSenderId: "871938725242",
    appId: "1:871938725242:web:7cd4b90b1ada05612332c3",
    measurementId: "G-NTE0FMYRQC"
  };


// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }