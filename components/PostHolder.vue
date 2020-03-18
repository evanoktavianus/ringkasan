<template>
<div>
    <LiveUpdate/>
  <div class="post-holder" v-bind:class="[dark ? 'dark' : 'light']">
    <div class="header-holder">
      <div class="image-holder">
        <img src="/corona-virus.png" class="image-class" />
      </div>
      <div class="title-holder">
        <h2>{{ judul }}</h2>
        <v-html>{{ ringkasan }}</v-html>
      </div>
    </div>
    <div v-if="isi" class="body-holder">
      <p>{{ isi }}</p>
      <div class="child-holder">
        <div v-for="p in child" v-bind:key="p.judul" class="child-class">
          <h2 class="child-title">{{ p.judul }}</h2>
          <p>{{ p.ringkasan }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import LiveUpdate from "~/components/LiveUpdate";
export default {
  components: { LiveUpdate },
  props: {
    judul: String,
    ringkasan: String,
    isi: String,
    child: Array,
    dark: { type: Boolean, default: true }
  }
};
</script>

<style scoped>
.post-holder {
  margin: 0 10px 10px 10px;
  padding: 10px;
}
.header-holder {
  margin: 0px 10px 0 10px;
  display: flex;
  align-items: stretch;
}
.child-class {
  /* border-top: 1px solid red; */
  margin: 20px 0 0 0;
}
.child-title {
  border-bottom: 1px solid red;
}
.child-holder {
  margin: 20px 0 0 0;
}

.dark {
  background-color: black;
  color: white;
}
.light {
  border: lightgrey solid 0.3px;
  color: black;
}
.image-holder {
  flex: 1;
  margin: auto;
  text-align: center;
}
.title-holder {
  flex: 4;
  padding: 0 20px;
}
.image-class {
  /* width:100%; */
  height: 100px;
}
.body-holder {
  padding: 20px;
}

@media screen and (max-width: 300px) {
  .header-holder {
    flex-flow: column;
    padding: 0;
  }
  .title-holder {
    flex: 4;
    padding: 0;
  }
}
</style>
