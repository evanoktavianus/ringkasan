<template>
  <div class="page-container">
    <PostHolder
      v-bind:judul="post.judul"
      v-bind:ringkasan="post.ringkasan"
      v-bind:isi="post.isi"
      v-bind:child="post.child"
      v-bind:dark="false"
    />
  </div>
</template>

<script>
import firestore from "~/plugins/firebase";
import PostHolder from "~/components/PostHolder";

export default {
  components: { PostHolder },
  asyncData(context) {
    return firestore.getPost("posts/" + context.params.path).catch(error => {
      console.log("error catched");
      context.error({ statusCode: 404, message: "Post not found" });
    });
  },
  created(){
    console.log(this.post)
  }
};
</script>

<style scoped>
/* .post-title {
  color: white;
  background-color: black;
  padding: 20px;
  display:flex;
  align-items:center;
} */

.title-holder {
  flex: 4;
}
.post-body {
  padding: 20px;
  /* background-color:green; */
}

.post-child {
  border: black solid 0.5px;
  margin: 20px 0px;
  padding: 20px;
}
.child-title {
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
