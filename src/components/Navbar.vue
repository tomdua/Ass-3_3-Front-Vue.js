<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <router-link :to="{ name: 'main' }">
        <b-navbar-brand>OpenSpoon</b-navbar-brand>
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <b-nav-item>
              <router-link class="try" :to="{ name: 'main' }">Main</router-link>
            </b-nav-item>
          </b-nav-item>
          <b-nav-item>
            <b-nav-item>
              <router-link class="try" :to="{ name: 'search' }">Search</router-link>
            </b-nav-item>
          </b-nav-item>
          <b-nav-item>
            <b-nav-item>
              <router-link class="try" :to="{ name: 'about' }">About</router-link>
            </b-nav-item>
          </b-nav-item>
          <b-nav-item href="#">
            <b-nav-item-dropdown text="Personal" v-if="$root.store.username" right>
              <b-dropdown-item href="#">
                <router-link :to="{ name: 'personal' }">Private Recipes</router-link>
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <router-link :to="{ name: 'family' }">Family Recipes</router-link>
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <router-link :to="{ name: 'favorite' }">Favorite Recipes</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-nav-item>
          <b-nav-item href="#">
            <b-nav-item v-if="$root.store.username" v-b-modal.modal-prevent-closing href="#">
              New Recipe
              <NewRecipePage />
            </b-nav-item>
          </b-nav-item>

          <!--  v-if="$root.store.username"  href="#">
            New Recipe
          </b-nav-item> -->
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          
            <b-nav-item v-if="$root.store.username" href="#">
              <span v-if="$root.store.username"  style="margin-right:5px">{{data}}</span>
              <router-link class="try" :to="{ name: 'meal' }">
              <i class="fa fa-cutlery fa-lg" aria-hidden="true" style="margin-top:10px"></i>
                        </router-link>

            </b-nav-item>
          <b-nav-item href="#">
            <b-nav-item-dropdown text="Hello Guest" v-if="!$root.store.username" right>
              <b-dropdown-item href="#">
                <router-link :to="{ name: 'register' }">Register</router-link>
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <router-link :to="{ name: 'login' }">Login</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown v-else right :text="$root.store.username">
              <!-- <b-dropdown-item href="#">
              <router-link :to="{ name: 'personal' }">Private Recipes</router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <router-link :to="{ name: 'family' }">Family Recipes</router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <router-link :to="{ name: 'favorite' }">Favorite Recipes</router-link>
            </b-dropdown-item> -->

              <b-dropdown-item href="#" @click="Logout">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import NewRecipePage from "../pages/NewRecipePage.vue";
export default {
    computed: {//TODO Not getting +1
    data: function () { 
      return JSON.parse(localStorage.getItem('recipesPreparIn')).length;
    },
    },
    data() {
    return {
      //  fields: ['selected', 'isActive', 'age', 'first_name', 'last_name'],
      data1: [],
    }
    },
  components: {
    NewRecipePage
  },
 

  methods: {
  
    
    async Logout() {
      try {
        // this.$root.store.logout();
        const response = await this.axios.post("http://localhost:3000/logout");
        // this.$root.toast("Logout", "User logged out successfully", "success");
        // console.log(response.data);
        // console.log(session);
          this.$router.push("/").catch(() => {  
            this.$forceUpdate();
          });
        this.$root.store.logout();

      // this.$router.push("/").catch(() => console.log("asd"));

      } catch (err) {
        console.log(err.response);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.try {
  color: azure;
}
</style>
