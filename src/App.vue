<template>
  <div >
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
//import background from "./assets/backgrounds.jpg";

export default {
  name: "App",
  //  data: () => ({
  //    background
  // }),

  components: {
    Navbar
  }

  // data: () => ({
  //   //
  // }),
};
</script>

<style lang="scss" >
body {
  background-image: url("./assets/backgrounds2.jpg");
  background-size: cover;
  // background-position: center;
}
// @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');


</style>