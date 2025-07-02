import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4OSfJsz3tx-Ip6CxL2ws8m81iCM74Vgs",
    authDomain: "kolorsystem-4efee.firebaseapp.com",
    projectId: "kolorsystem-4efee",
    storageBucket: "kolorsystem-4efee.firebasestorage.app",
    messagingSenderId: "88498331505",
    appId: "1:88498331505:web:f937ad9df4b08a1d9f20d0",
    measurementId: "G-VEV8XCB2TG"
};


console.log("Przed initializeApp");
const app = initializeApp(firebaseConfig);
console.log("Po initializeApp:", app);
const db = getFirestore(app);
console.log("Firestore db:", db);

export { db };
