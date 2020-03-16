// const firebase =require('firebase')
import firebase from 'firebase'
require ('firebase/firestore')

if (!firebase.apps.length) firebase.initializeApp(process.env.firebaseConfig)

const db=firebase.firestore();

function getPost(path){
    return db
    .doc(path)
    .get()
    .then(doc => {
      if (!doc.exists) {throw "not found"} else {
      var post = doc.data();
      // console.log("returned data from firebase: " + post);
      return { post: post };
      }
    });
}

function getPosts(path){
  return db.collection(path).get().then(querySnapshot=>{
    var posts=[]
    querySnapshot.forEach(doc=>{
      var post=doc.data()
      console.log(post)
      posts.push(post)
    })
    return {posts:posts}
  })
}

function savePost(path,post){
  return db.doc(path).set(post)
}

export default {db,getPost,savePost,getPosts}