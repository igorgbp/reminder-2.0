import firebase from 'firebase';


import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBgk12ke0qUXDspHI8mAqM2JwEteI2jpS4",
  authDomain: "comp-6aa8a.firebaseapp.com",
  projectId: "comp-6aa8a",
  storageBucket: "comp-6aa8a.appspot.com",
  messagingSenderId: "145371084553",
  appId: "1:145371084553:web:15df8a3eb39b16972785d8"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 
  export default firebase;