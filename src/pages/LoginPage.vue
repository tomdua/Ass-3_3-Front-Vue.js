<template>
  <Login> </Login>
</template>

<script>
import Login from "../components/LogIn";
export default {
  name: "LoginPage",
  components: {
    Login,
  },
  data() {
    return {
      log: LogIn,
    };
  },
};
</script>
