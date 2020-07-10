<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <router-link :to="{ name: 'main' }">
        <b-navbar-brand>OpenSpoon</b-navbar-brand>
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
             <b-nav-item href="#">
            <router-link :to="{ name: 'main' }">Main</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link :to="{ name: 'search' }">Search</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link :to="{ name: 'search' }">AboutTODO</router-link>
          </b-nav-item>
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
<b-nav-item v-if="$root.store.username" v-b-modal.modal-prevent-closing href="#">
  New Recipe
  <NewRecipePage />
</b-nav-item>


             <!--  v-if="$root.store.username"  href="#">
            New Recipe
          </b-nav-item> -->
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
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
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import NewRecipePage from '../pages/NewRecipePage.vue'
export default {
  components:{
NewRecipePage
  },

methods: {
    Logout() {
      this.$root.store.logout();
      // this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  },
};
</script>