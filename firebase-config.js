// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFxB4j3KNMCi-azXwZDmz6W070SgzJxGU",
  authDomain: "karachi-crime-map.firebaseapp.com",
  projectId: "karachi-crime-map",
  storageBucket: "karachi-crime-map.appspot.com",
  messagingSenderId: "604410434693",
  appId: "1:604410434693:web:8748c31832c0e8422405ec",
  measurementId: "G-53QK1B68KK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialize Firestore
var db = firebase.firestore();
