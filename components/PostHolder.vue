<template>
    <div class="post-holder" v-bind:class="[dark ? 'dark':'light']">
        <div class="image-holder">
            <img src="/corona-virus.png" class="image-class"/>
        </div>
        <div class="title-holder">
            <h2> {{judul}} </h2>
            <p> {{ringkasan}} </p>
        </div>
    </div>
</template>

<script>
export default {
    props:{judul:String,ringkasan:String,dark:{type:Boolean,default:true}}
}
</script>

<style scoped>

.post-holder{
    margin:0 20px 20px 0;
    padding:20px;
    display:flex;
    align-items:stretch;
}

@media screen and (max-width: 300px) {
  .post-holder {
    flex-flow:column;
  }
}


.dark{
    background-color:black;
    color:white
}
.light{
    border:black solid 0.3px;
    color:black;
}
.image-holder{
    flex:1;
    margin:auto;
}
.title-holder{
    flex:4;
    padding:0 20px;
}
.image-class{
    /* width:100%; */
        height: 100px;

}
</style>