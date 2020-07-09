<template>
  <LogIn> </LogIn>
</template>

<script>
import LogIn from "../components/LogIn";
export default {
  name: "LoginPage",
  components: {
    LogIn,
  },
  data() {
    return {
      log: LogIn,
    };
  },
};
</script>
