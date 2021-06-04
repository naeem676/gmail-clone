// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCd7OLpGYZIf9hAcspOXkc9fE8aAgVOTtw",
    authDomain: "clone-8d930.firebaseapp.com",
    projectId: "clone-8d930",
    storageBucket: "clone-8d930.appspot.com",
    messagingSenderId: "456001283368",
    appId: "1:456001283368:web:710f1b5a31fe263df41c1d",
    measurementId: "G-38VVHFPWWQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebaseApp.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {db, auth, provider};