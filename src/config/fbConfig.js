import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCEuIPJnnxjWmbnWJ_eo70YcFKlsDd26us",
    authDomain: "gradobor-rpg.firebaseapp.com",
    databaseURL: "https://gradobor-rpg.firebaseio.com",
    projectId: "gradobor-rpg",
    storageBucket: "gradobor-rpg.appspot.com",
    messagingSenderId: "360554453268",
    appId: "1:360554453268:web:40f7184988116877e0ca01",
    measurementId: "G-JC5K6N1JKZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings( { timestampsInSnapshots: true})

  export default firebase