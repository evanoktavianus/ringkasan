// const firebase =require('firebase')
import firebase from 'firebase'
require ('firebase/firestore')

if (!firebase.apps.length) firebase.initializeApp(process.env.firebaseConfig)

const db=firebase.firestore();

export default db