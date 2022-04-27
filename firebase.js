import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.apiKey ,
    authDomain: "docs-46db2.firebaseapp.com",
    projectId: "docs-46db2",
    storageBucket: "docs-46db2.appspot.com",
    messagingSenderId: "304092186627",
    appId: "1:304092186627:web:964e989091ad6b91b9a636"
  };
  
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore();

  export { db };