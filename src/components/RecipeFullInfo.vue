<template>
  <b-container class="recipe-body">
    <br>

    <h2>{{recipe.title}}</h2>
    <br>
    <b-card no-body class="overflow-hidden" style="background: none;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src=recipe.image alt="Image" class="rounded-0" style="width:100%; high:100%;"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <b-card-text>
              <h3 style="text-align: center">Ingredients:</h3>
              <ul>
                <li v-for="(r, index) in recipe.ingredients" :key="index + '_' + r.id">
                  {{ r.original }}</li>
              </ul>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <br>
    <b-row>
      <!-- <router-link :to="{ name: 'preparing' }"><b-button>Start To Cook!</b-button></router-link> -->
      <!-- <hr>
      <i class="fa fa-cutlery" aria-hidden="true">{{recipe.servings}}</i> -->

      <!-- <b-col cols="12" md="auto"> -->
      <b-col col lg="5" offset-md="1">

        <RecipePreviewData :recipe="recipe" />
      </b-col>
      <b-col cols="5" md="auto">

        <!-- <i class="fa fa-cutlery" aria-hidden="true">{{recipe.servings}}</i> -->
      </b-col>
      <b-col col lg="2">
        <RecipePreviewUserInfo :recipe="recipe" :personal="personal" />
      </b-col>
      <br>
    </b-row>
    <br>
    <b-row>
      <b-col col lg="12">
        <!-- <RecipePreviewData :recipe="recipe" /> -->
        <h3 style="text-align: center">Instructions:</h3>
        <!-- Instructions: -->
        <ul>
          <li v-for="s in recipe.analyzedInstructions" :key="s.number">
            {{ s.step }}</li>
        </ul>
      </b-col>
            <b-col col lg="3" offset-md="1">

      <router-link :to="{ name: 'preparing' }">
        <b-button variant="dark" size="lg">Preparing The Recipe</b-button>
      </router-link>
      
            </b-col>
             <b-col col lg="4" offset-md="3">

        <b-button variant="primary" size="lg" @click="addRecipe">Add To The Upcoming Meal</b-button>
      
            </b-col>

    </b-row>
    <br>

  </b-container>
</template>

<script>
import RecipePreviewUserInfo from "./RecipePreviewUserInfo.vue";
import RecipePreviewData from "./RecipePreviewData";
export default {
  components: {
    RecipePreviewUserInfo,
    RecipePreviewData
  },
  props: {
    personal: {
      type: Boolean,
      required: true
    },
    recipe: {
      type: Object,
      requred: true
    }
  },
  methods:{
    // addRecipe(){
    //             this.$root.store.addRecipe();

    // },
  }

};
</script>

<style style lang="scss" scoped>
li {
  color: cornsilk;
}
h2 {
  font-family: "Comic Sans MS", cursive, sans-serif;
  text-align: center;
}
// .recipe-body{
//   font-size: 17px;
//   // font-family:Verdana, Geneva, Tahoma, sans-serif;
//   // font-weight: bold;
// }
</style>