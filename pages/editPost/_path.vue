<template>
  <div id="app">
    <h1>Main Posts</h1>

    <div class="editor-container">
      <h2>Post Title</h2>
      <input type="text" v-model="post.title" />
      <h2>Post Summary</h2>
      <ckeditor
        :editor="editor"
        v-model="post.summary"
        :config="editorConfig"
        style="title"
      ></ckeditor>
      <h2>Post Body</h2>
      <ckeditor
        :editor="editor"
        v-model="post.body"
        :config="editorConfig"
        style="title"
      ></ckeditor>
    </div>
    <h1>Child Posts</h1>
    <div v-for="(doc, index) in post.child" v-bind:key="index">
      <div class="editor-container"> 
        <h2>Child Post Title</h2>
        <input type="text" v-model="doc.title" />
        <h2>Post Summary</h2>
        <ckeditor
          :editor="editor"
          v-model="doc.summary"
          :config="editorConfig"
          style="title"
        ></ckeditor>
      </div>
    </div>
    <button v-on:click="savePost">Save Post</button>
    <notifications group="foo" />
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
  },
  computed: {
    path() {
      return this.$route.params.path;
    }
  },
  methods: {
    savePost() {
      const post = {
        title: this.post.title,
        summary: this.post.summary,
        body: this.post.body,
        child: this.post.child
      };

      console.log(post);

      firestore
        .savePost("posts/gDoV6radhkPgedVEm7fv", post)
        .then(()=>{
          console.log('post saved')
          this.$notify({
            group: "foo",
            type: "success",
            title: "Sucess",
            text: "Post Saved",
            duration: 1000,
            speed: 1000,
            data: {}
          })}
        )
        .catch(error => {
          console.log("error saving post");
          this.$notify({
            group: "foo",
            type: "warn",
            title: "Cannot save Post",
            text: error,
            duration: 10000,
            speed: 1000,
            data: {}
          });
        });
    }
  }
};
</script>
