<template>
  <Login> </Login>
</template>

<script>
import Login from "../components/Login";
export default {
  name: "LoginPage",
  components: {
    Login,
  },
  data() {
    return {
      log: Login,
    };
  },
};
</script>
