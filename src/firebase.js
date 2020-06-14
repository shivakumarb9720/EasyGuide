  import firebase, { firestore, auth } from  'firebase/app';
  import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyDpIwO-G_y5sgQ8afAwhZXSU0QL05nQLT8",
  authDomain: "easyguide-89a3.firebaseapp.com",
  databaseURL: "https://easyguide-89a3.firebaseio.com",
  projectId: "easyguide-89a3",
  storageBucket: "easyguide-89a3.appspot.com",
  messagingSenderId: "155985071572",
  appId: "1:155985071572:web:5f83e8e4dd60785455da41",
  measurementId: "G-KLBTCVWGK9"
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//var db = firebase.firestore();
var ds = firebase.storage();
//db.settings({ timestampsInSnapshots: true }); 
export default firebase