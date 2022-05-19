import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyC4THUzmSN73ldE6koCL8Zu4l_eaBKuRYM',
    authDomain: 'crwn-clothing-db-9d8a3.firebaseapp.com',
    projectId: 'crwn-clothing-db-9d8a3',
    storageBucket: 'crwn-clothing-db-9d8a3.appspot.com',
    messagingSenderId: '535887915043',
    appId: '1:535887915043:web:9700e0a3902cc274efe996',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider