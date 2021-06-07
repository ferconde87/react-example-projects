import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANYnISHAMMuf-nEhOIlly4L2DNqiGibE0",
  authDomain: "fer-react-firegram.firebaseapp.com",
  projectId: "fer-react-firegram",
  storageBucket: "fer-react-firegram.appspot.com",
  messagingSenderId: "735360648888",
  appId: "1:735360648888:web:5aaac11a9e6a6dc439164d",
  measurementId: "G-H4FM5Q6ES8"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  //Initialize storage and firestore services
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };
