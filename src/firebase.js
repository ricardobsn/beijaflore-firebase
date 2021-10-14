import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyADq1mHxt0XFjMtAvTqvFRFG577f1oWnEE",
    authDomain: "beijaflore-firebase.firebaseapp.com",
    projectId: "beijaflore-firebase",
    storageBucket: "beijaflore-firebase.appspot.com",
    messagingSenderId: "1061520881475",
    appId: "1:1061520881475:web:75bd841d16ba4edfcae1f6"
  };

  
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;