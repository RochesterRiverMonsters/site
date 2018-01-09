const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
//   apiKey: "AIzaSyBWogvNYWE3wOAPKrMdcv7urYtrz9CAFOk",
//   authDomain: "rrm-uat-site.firebaseapp.com",
//   databaseURL: "https://rrm-uat-site.firebaseio.com",
//   storageBucket: "rrm-uat-site.firebaseio.com",
//   messagingSenderId: "123123123123"
// };

var config = {
  apiKey: 'AIzaSyBWogvNYWE3wOAPKrMdcv7urYtrz9CAFOk',
  authDomain: 'rrm-uat-site.firebase.com',
  projectId: 'rrm-uat-site'
};

var fire = firebase.initializeApp(config);
export default fire;
