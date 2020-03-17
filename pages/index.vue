<template>
  <div class="page-container">
    <div v-for="post in posts" v-bind:key="post.judul">
      <nuxt-link to="/post/corona-virus">
        <PostHolder v-bind:judul="post.judul" v-bind:ringkasan="post.ringkasan" v-bind:dark="false" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import firestore from "~/plugins/firebase";
import PostHolder from "~/components/PostHolder";

export default {
  components: { PostHolder },
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
