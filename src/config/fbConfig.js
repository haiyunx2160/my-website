import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var config = {
    apiKey: "AIzaSyChJMTE8ok2MO8i1_UOKS4gTm5diwih0b8",
    authDomain: "ng-haiyun.firebaseapp.com",
    databaseURL: "https://ng-haiyun.firebaseio.com",
    projectId: "ng-haiyun",
    storageBucket: "ng-haiyun.appspot.com",
    messagingSenderId: "577251732825",
    appId: "1:577251732825:web:e717f39c4a1352af"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
