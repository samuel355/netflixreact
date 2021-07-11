import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyAkig5c6KEgfK5XiVSxrMX_t4YY9yqwN2A",
  authDomain: "netflixapp-65ba0.firebaseapp.com",
  projectId: "netflixapp-65ba0",
  storageBucket: "netflixapp-65ba0.appspot.com",
  messagingSenderId: "304209194902",
  appId: "1:304209194902:web:f5aae9c6dd2f19df6c77b7",
  measurementId: "G-3VRS9RCQ4V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth()

export {auth}
export defautl db;