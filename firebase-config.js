// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    sendPasswordResetEmail, 
    onAuthStateChanged, 
    signOut, 
    GoogleAuthProvider, 
    signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { 
    getDatabase, 
    ref, 
    get, 
    set, 
    update, 
    push, 
    query, 
    orderByChild, 
    equalTo 
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB7YhDmQa4MtSzutSwJGGU2F7XR9ubcoqQ",
    authDomain: "arpm-mining.firebaseapp.com",
    databaseURL: "https://arpm-mining-default-rtdb.firebaseio.com/",
    projectId: "arpm-mining",
    storageBucket: "arpm-mining.appspot.com",
    messagingSenderId: "854582920631",
    appId: "1:854582920631:web:8ce5d5141c70d068a3d432",
    measurementId: "G-8YVW5EK6N1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const provider = new GoogleAuthProvider();

export { 
    auth, 
    db, 
    provider, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    sendPasswordResetEmail, 
    onAuthStateChanged, 
    signOut, 
    signInWithPopup, 
    ref, 
    get, 
    set, 
    update, 
    push, 
    query, 
    orderByChild, 
    equalTo 
};