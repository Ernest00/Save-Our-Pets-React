// Import the functions you need from the SDKs you need
import  firebase  from "firebase";
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiEE8KqUSUqeDJS1vIoJ7haHuVJ6zSbus",
    authDomain: "save-our-pets.firebaseapp.com",
    projectId: "save-our-pets",
    storageBucket: "save-our-pets.appspot.com",
    messagingSenderId: "483513704146",
    appId: "1:483513704146:web:5b6a3d5bb4bdc36b1a170b"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


// Initialize Firebase
export default firebase;