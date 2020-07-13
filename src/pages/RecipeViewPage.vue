<template>
  <RecipeFullInfo v-if="recipeInfo.id" :recipe="recipeInfo" :personal="personal" />
</template>

<script>
import RecipeFullInfo from "../components/RecipeFullInfo";
// import RecipePreviewData from '../components/RecipePreviewData'

export default {
  components: {
    RecipeFullInfo
    //  RecipePreviewData
  },

  data() {
    return {
      recipeInfo: {},
      personal: false
    };
  },
  created() {
    this.getRecipeInfo();
  },
  methods: {
    async getRecipeInfo() {
      try {
        // console.log(recipeInfo.title);
        let response = await this.axios.get(
          "http://localhost:3000/recipes/information",
          {
            params: { id: this.$route.params.recipeId }
          }
        );

        console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
        // } catch (error) {
        //   console.log("error.response.status", error.response.status);
        //   this.$router.replaceGIT("/NotFound");
        //   return;
        // }
        // console.log(recipeInfo.title);

        // let {
        //   id,
        //   analyzedInstructions,
        //   // instructions,
        //   ingredients,
        //   aggregateLikes,
        //   readyInMinutes,
        //   image,
        //   title,
        //   vegetarian,
        //   vegan,
        //   glutenFree,
        //   servings,
        // } = response;

        // // let _instructions = analyzedInstructions
        // //   .map((fstep) => {
        // //     fstep.step = fstep.step;
        // //     return fstep.step;
        // //   })
        // //   .reduce((a, b) => [...a, ...b], []);

        // let _recipe = {
        //   //instructions,
        //   //_instructions,
        //   id,
        //   analyzedInstructions,
        //   ingredients,
        //   aggregateLikes,
        //   readyInMinutes,
        //   image,
        //   title,
        //   vegetarian,
        //   vegan,
        //   glutenFree,
        //   servings,
        // };
        // this.recipeInfo=Object;
        const recipes = {
          id: 653169,
          image: "https://spoonacular.com/recipeImages/653169-556x370.jpg",
          title: "No Oven Peanut Butter Squares",
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          aggregateLikes: 50,
          readyInMinutes: 45,
          watched: true,
          saved: true
        };

        this.recipeInfo = response.data; //this.$route.params.recipeId;
        console.log(this.recipeInfo);

        // console.log("asd");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.push("/").catch(() => console.log("asd"));

        // this.$router.replaceGIT("/NotFound");
        return;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.recipe-body {
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: italic;
  font-weight: bold;
}
// .wrapper {
//   display: flex;
// }
// .wrapped {
//   width: 50%;
// }
// .center {
//   display: block;
//   margin-left: auto;
//   margin-right: auto;
//   width: 50%;
// }
/* .recipe-header{

} */
</style>
