// const firebase =require('firebase')
import firebase from 'firebase'
require ('firebase/firestore')

if (!firebase.apps.length) firebase.initializeApp(process.env.firebaseConfig)

const db=firebase.firestore();

function getDoc(path){
    return db
    .doc(path)
    .get()
    .then(doc => {
      var post = doc.data();
      // console.log("returned data from firebase: " + post);
      return { post: post };
    });
}

export default {db,getDoc}