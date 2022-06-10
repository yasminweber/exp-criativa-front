import firebase from 'firebase/app';
import 'firebase/storage'

let firebaseConfig = {
    apiKey: "AIzaSyBK6vgGEsIDQ9pcF0IvfhZ8dKJyZerkpro",
    authDomain: "all4one-2f446.firebaseapp.com",
    databaseURL: 'gs://all4one-2f446.appspot.com',
    storageBucket: "all4one-2f446.appspot.com",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const storage = firebase.storage();