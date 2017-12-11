import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyDdjyUbtaJBT1cJHfcL-3CSOeH691Rj8ys",
  authDomain: "your-domain-name.firebaseapp.com",
  databaseURL: "https://rrm-public-website.firebaseio.com",
  storageBucket: "rrm-public-website.firebaseio.com",
  messagingSenderId: "123123123123"
};
var fire = firebase.initializeApp(config);
export default fire;
