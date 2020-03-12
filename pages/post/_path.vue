<template>
  <div class="container">
    <div class="post-title">
      <img v-bind:src="postImage" class="post-image"/>
      <h1 class="title">{{ post.title }}</h1>
    </div>
    <div class="post-summary" >
      <p>{{post.summary}}</p>
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
      post: { title: "coba title" },
      postImage:"/gDoV6radhkPgedVEm7fv.jpeg"};
  },
  asyncData(context) {
    console.log(context.params.path)
    return firestore.getDoc("posts/gDoV6radhkPgedVEm7fv");
  },
  created() {
    console.log(this.post);
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
.post-image{
  height:50px;
}
.post-body {
  padding: 20px;
  /* background-color:green; */
}
.post-summary{
  padding:20px;
}
.post-child{
  border: black solid 0.5px;
  margin: 20px 0px;
  padding: 20px;
}
.child-title{
  margin: 0 0 10px 0;
}
.container {
  margin: 0 auto;
  padding: 10px;
  /* min-height: 100vh;
  display: flex; */
  /* justify-content: center; */
  /* align-items: left;
  text-align: left;
  flex-flow:column; */
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
