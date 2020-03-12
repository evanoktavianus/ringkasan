<template>
  <div id="app">
    <h1>Main Posts</h1>

    <div class="box-container">
      <h2>Post Title</h2>
      <input type="text" v-model="post.title">
      <h2>Post Summary</h2>
      <ckeditor :editor="editor" v-model="post.summary" :config="editorConfig" style="title"></ckeditor>
    </div>
    <h1>Child Posts</h1>
    <div v-for="doc in post.child" v-bind:key="doc.title">
      <div class="box-container">
        <h2>Child Post Title</h2>
        <input type="text" v-model="doc.title">
        <h2>Post Summary</h2>
        <ckeditor :editor="editor" v-model="doc.summary" :config="editorConfig" style="title"></ckeditor>
      </div>
    </div>
  </div>
</template>

<script>
import firestore from "~/plugins/firebase";

let ClassicEditor;
let CKEditor;

if (process.client) {
  ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
  CKEditor = require("@ckeditor/ckeditor5-vue");
} else {
  CKEditor = { component: { template: "<div></div>" } };
}

export default {
  components: {
    ckeditor: CKEditor.component
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      },
      postImage: "/gDoV6radhkPgedVEm7fv.jpeg"
    };
  },
  asyncData(context) {
    return firestore.getPost("posts/gDoV6radhkPgedVEm7fv");
  }
};
</script>
