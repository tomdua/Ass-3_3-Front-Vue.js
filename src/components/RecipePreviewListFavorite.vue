<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          "https://recipe-tom-almog.herokuapp.com/profile/personalRecipes",
        );
        console.log(response);
        const recipes = response.data;
        /* const recipes = [
    {
    "id": 653169,
    "image": "https://spoonacular.com/recipeImages/653169-556x370.jpg",
    "title": "No Oven Peanut Butter Squares",
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "aggregateLikes": 50,
    "readyInMinutes": 45
  },
  {
    "id": 658725,
    "image": "https://spoonacular.com/recipeImages/658725-556x370.jpg",
    "title": "Rocky Road Ice Cream",
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "aggregateLikes": 23,
    "readyInMinutes": 45
  },
  {
    "id": 715383,
    "image": "https://spoonacular.com/recipeImages/715383-556x370.jpg",
    "title": "Slow Cooker Chicken and Dumplings",
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "aggregateLikes": 641,
    "readyInMinutes": 11
  }
]
*/
        //const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
