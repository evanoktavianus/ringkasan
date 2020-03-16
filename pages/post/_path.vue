<template>
  <div class="page-container">
    <div class="post-title">
      <img v-bind:src="post.image" class="post-image"/>
      <h1 class="title">{{ post.title }}</h1>
    </div>
    <div class="post-body" >
      <p>{{post.body}}</p>
    </div>
      <div v-for="doc in post.child" v-bind:key="doc.title" class="post-child">
        <div class="child-title">
          <h3> {{doc.title}} </h3>
        </div>
        {{doc.summary}}
      </div>
    </div>
</template>

<script>
import firestore from "~/plugins/firebase";

export default {
  data() {
    return { 
      post: {}
    }
  },
  asyncData(context) {
    return firestore.getPost("posts/"+context.params.path)
    .catch(error=>{
      console.log("error catched")
      context.error({statusCode:404,message:'Post not found'})
    });
  }
};
</script>

<style>
.post-title {
  color: white;
  background-color: black;
  padding: 20px;
  display:flex;
  align-items:center;
}

.post-body {
  padding: 20px;
  /* background-color:green; */
}

.post-child{
  border: black solid 0.5px;
  margin: 20px 0px;
  padding: 20px;
}
.child-title{
  margin: 0 0 10px 0;
}


.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 3em;
  color: white;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
