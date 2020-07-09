<template>
  <b-container fluid class="bv-example-row">
    <b-row>
      
      <b-col md=5 offset-md="2">
        <br>
        <h1>Explore these recipes</h1>
        <br>
        <RecipePreviewList  :recipes="randomRecipes" />
        <!-- <router-link v-if="!$root.store.username" to="/login" tag="button"></router-link> -->
        <br>
      </b-col>
      <b-col md=5>
          <br>
         <h1>Last Viewed Recipes</h1>
        <br>
        <LogIn v-if=!this.$root.store.username />
        <RecipePreviewList v-else  :recipes="lastRecipes" />
        <br>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import RecipeService from "../core/recipes";
import RecipePreviewList from "../components/RecipePreviewList";
import LogIn from "../components/LogIn";
export default {
  components: {
    RecipePreviewList,
    LogIn
  },
  data() {
    return {
      randomRecipes: [],
      lastRecipes: []
    };
  },
  created() {
    this.updateRandomRecipes();
    this.updateLastRecipes();
  },
  methods: {
    async updateRandomRecipes() {
      try {
        // const response = await this.axios.get(
        //   "https://recipe-tom-almog.herokuapp.com/recipes/random"
        // );
        // console.log(response);
        // const recipes = response.data;
        const recipes = [
          {
            id: 653169,
            image: "https://spoonacular.com/recipeImages/653169-556x370.jpg",
            title: "No Oven Peanut Butter Squares",
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            aggregateLikes: 50,
            readyInMinutes: 45
          },
          {
            id: 658725,
            image: "https://spoonacular.com/recipeImages/658725-556x370.jpg",
            title: "Rocky Road Ice Cream",
            vegetarian: false,
            vegan: false,
            glutenFree: true,
            aggregateLikes: 23,
            readyInMinutes: 45
          },
          {
            id: 715383,
            image: "https://spoonacular.com/recipeImages/715383-556x370.jpg",
            title: "Slow Cooker Chicken and Dumplings",
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            aggregateLikes: 641,
            readyInMinutes: 11
          }
        ];
        //const recipes = response.data;
        this.randomRecipes = [];
        this.randomRecipes.push(...recipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    },
     async updateLastRecipes() {
      try {
        // const response = await this.axios.get(
        //   "http://localhost:3000/profile/watchedRecipes"
        // );
        // console.log(response);
        // const recipes = response.data;
        const recipes = [
          {
            id: 653169,
            image: "https://spoonacular.com/recipeImages/653169-556x370.jpg",
            title: "No Oven Peanut Butter Squares",
            vegetarian: true,
            vegan: true,
            glutenFree: true,
            aggregateLikes: 50,
            readyInMinutes: 45
          },
          {
            id: 658725,
            image: "https://spoonacular.com/recipeImages/658725-556x370.jpg",
            title: "Rocky Road Ice Cream",
            vegetarian: false,
            vegan: false,
            glutenFree: true,
            aggregateLikes: 23,
            readyInMinutes: 45
          },
          {
            id: 715383,
            image: "https://spoonacular.com/recipeImages/715383-556x370.jpg",
            title: "Slow Cooker Chicken and Dumplings",
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            aggregateLikes: 641,
            readyInMinutes: 11
          }
        ];
        //const recipes = response.data;
        this.lastRecipes = [];
        this.lastRecipes.push(...recipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// .container{
//   float: center;
// }

// .RandomRecipes {
//   margin-top: 30px;
//   margin-left: 20px;
//   margin: 20px 20 0px;
// }

// .leftRaw {
//   float: left;
// }

// .rightRaw {
//   float: right;
// }

// .blur {
//   display: none;
// }
</style>


// $root.store.username