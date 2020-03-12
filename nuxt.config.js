export default {
  env: {
    firebaseConfig: {
      apiKey: "AIzaSyA1get978WjnEvb2k7JElWsPQ4AmsRBTfk",
      authDomain: "vue-project-9e3e6.firebaseapp.com",
      databaseURL: "https://vue-project-9e3e6.firebaseio.com",
      projectId: "vue-project-9e3e6",
      storageBucket: "vue-project-9e3e6.appspot.com",
      messagingSenderId: "495962986000",
      appId: "1:495962986000:web:d9f9fdd6498a9a319d9c95",
      measurementId: "G-NNJ79K0XBG"
    }
  },
  server: { port: 8000, host: "0.0.0.0" },
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
};
