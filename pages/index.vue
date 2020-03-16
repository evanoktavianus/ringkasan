<template>
  <div class="page-container">
    <h1 class="title">
      RINGKASAN
    </h1>
    <div v-for="post in posts" v-bind:key="post.title" class="post-title">
      <img v-bind:src="post.image" class="post-image" />
      <h1>{{ post.title }}</h1>
    </div>
  </div>
</template>

<script>
import firestore from "~/plugins/firebase";

export default {
  asyncData(context) {
    return firestore.getPosts("posts");
  },
  mounted() {
    console.log(this.posts);
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
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
