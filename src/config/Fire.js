import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDoONZCygLtrxFyFRLk6ublXVfOCVCM1BQ",
    authDomain: "money-tracker-app-ag.firebaseapp.com",
    projectId: "money-tracker-app-ag",
    storageBucket: "money-tracker-app-ag.appspot.com",
    messagingSenderId: "708507423371",
    appId: "1:708507423371:web:ae108224f5a6d6616fba8e",
    measurementId: "G-CY9V8XT2K3"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export default auth;