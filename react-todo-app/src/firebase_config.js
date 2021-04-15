import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBwNFTEc8fc8SvRsFzVIdC6ZqIdrZ7iL3o",
    authDomain: "todo-app-c961c.firebaseapp.com",
    projectId: "todo-app-c961c",
    storageBucket: "todo-app-c961c.appspot.com",
    messagingSenderId: "337881846677",
    appId: "1:337881846677:web:9ce82a0af6fb427a0cdc9c"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
