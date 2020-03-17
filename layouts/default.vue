<template>
  <div>
    <nuxt-link to="/">
    <div class="header">
      <h1 class="ringkasan-title">RINGKASAN</h1>
    </div>
    </nuxt-link>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.post-title {
  color: white;
  background-color: black;
  padding: 20px;
  display: flex;
  align-items: center;
}

.ringkasan-title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 1em;
  color: white;
  letter-spacing: 1px;
  text-align: center;
  text-decoration: none;
  background-color:#35495e;
  padding:10px;

  border: 2px solid #35495e;
  border-radius: 0 0 10px 10px;

}

.header {
  margin:0px 5px;
  display:flex;
  justify-content: center;
  /* background-color: #35495e; */
}

.editor-container {
  display: flex;
  margin: 20px;
  padding: 10px;
  flex-flow: column;
  border: black solid 0.5px;
}

.page-container {
  margin: 0 auto;
  padding: 10px;
}

.post-image {
  width: 100%;
}

a{
  text-decoration: none;
}
</style>
