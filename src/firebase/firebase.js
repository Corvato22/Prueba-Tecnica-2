// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBDqsc7MjnpbY3_0lF_nik2DFQidUHPXI",
    authDomain: "prueba-tecnica-2.firebaseapp.com",
    databaseURL: "https://prueba-tecnica-2-default-rtdb.firebaseio.com",
    projectId: "prueba-tecnica-2",
    storageBucket: "prueba-tecnica-2.appspot.com",
    messagingSenderId: "291647816591",
    appId: "1:291647816591:web:c08eaa63502781649781fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const db = getFirestore();

export {
    app,
    db,
}