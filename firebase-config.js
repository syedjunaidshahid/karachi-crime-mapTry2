<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
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
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
