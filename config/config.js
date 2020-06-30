import firebase from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


export const firebaseConfig = {
    apiKey: "AIzaSyDE9X4VIG5LzIF5eWfX9OZdkSRh9kl-fV0",
    authDomain: "chat-e1845.firebaseapp.com",
    databaseURL: "https://chat-e1845.firebaseio.com",
    projectId: "chat-e1845",
    storageBucket: "chat-e1845.appspot.com",
    messagingSenderId: "459090035676",
    appId: "1:459090035676:web:ad37ff15a2723bb4fa4519",
    measurementId: "G-E0BD4FQ46R"
  };
 
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const _storage = firebase.storage();
  const _auth = firebase.auth();
  const _database = firebase.database();

  export {
    _database , _auth , _storage , firebase as default
  }