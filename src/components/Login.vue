<template>
  <b-container>
        <h3 class="mb-0" >LogIn</h3>
        <br>
    <!-- <h1 class="title">Login</h1> -->
    <b-form @submit.prevent="onLogin">
      <b-form-group style="font-weight: bold ; font-size: 17px" id="input-group-Username" label-cols-sm="3" label="Username:" label-for="Username">
        <b-form-input id="Username" v-model="$v.form.username.$model" :state="validateState('username')"></b-form-input>
        <b-form-invalid-feedback>
          Username is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group style="font-weight: bold ; font-size: 17px" id="input-group-Password" label-cols-sm="3" label="Password:" label-for="Password">
        <b-form-input id="Password" type="password" v-model="$v.form.password.$model" :state="validateState('password')"></b-form-input>
        <b-form-invalid-feedback>
          Password is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" variant="dark" style="width:100px;display:block;" class="mx-auto w-100">Login</b-button>
      <div class="mt-2">
        <h4>
        Do not have an account yet?</h4>
        <router-link style="color:blue; font-size: 30px ;" to="register"> Register in here</router-link>
      </div>
    </b-form>
    <b-alert class="mt-2" v-if="form.submitError" variant="warning" dismissible show>
      Login failed: {{ form.submitError }}
    </b-alert>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </b-container>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        submitError: undefined
      }
    };
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
      try {
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.post("http://localhost:3000/login", {
          username: this.form.username,
          password: this.form.password
          // withCredentials: true
        });

        console.log(response);
        // this.$root.loggedIn = true;
        //console.log(this.$root.store.login);
        this.$root.store.login(this.form.username);
        this.$router.push("/").catch(() => console.log("asd"));
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onLogin() {
      // console.log("login method called");
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("login method go");
      this.Login();
    }
  }
};
</script>

<style lang="scss" scoped>
h3 {
  font-family: "Comic Sans MS", cursive, sans-serif;
  text-align: center;
}
.container {
  // font-style: ;
  max-width: 400px;
}
</style>
