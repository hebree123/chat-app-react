import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB8WdLejSAGI7SUhqtbkHPCZu0Y7gMxMJ8",
  authDomain: "chat-react-12554.firebaseapp.com",
  projectId: "chat-react-12554",
  storageBucket: "chat-react-12554.appspot.com",
  messagingSenderId: "941980169949",
  appId: "1:941980169949:web:185fad790a92798ff8cd34",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
