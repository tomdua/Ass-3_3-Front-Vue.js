<template>
  <b-container class="bv-example-row recipe-body">
     <b-row class="justify-content-md-center">
        <b-col md="auto">
        <h1>{{ recipeInfo.title }}</h1>
        <img :src="recipeInfo.image" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
      <RecipePreviewData :recipe="recipeInfo" />
   
      <RecipePreviewUserInfo :personal="personal" :recipe="recipeInfo" />

            <router-link :to="{ name: 'preparing' }"><b-button>Start To Cook!</b-button></router-link> 
            <ul v-if=recipeInfo.ingredients>
              Ingredients:
              <li
                v-for="(r, index) in recipeInfo.ingredients"
                :key="index + '_' + r.id"
              >
                {{ r.original }}
              </li>
            </ul>
            <span>Number Of Servings: {{recipeInfo.servings}} </span>
            </b-col>
          <b-col>
            Instructions:
            <ol>
              <li v-for="s in recipeInfo.analyzedInstructions" :key="s.number">
                {{ s.step }}
              </li>
            </ol>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreviewUserInfo from '../components/RecipePreviewUserInfo.vue'
import RecipePreviewData from '../components/RecipePreviewData'

export default {
 components: {
   RecipePreviewUserInfo,
   RecipePreviewData
  },

  data() {
    return {
      recipeInfo: null,
      personal: false,

    };
  },
  async created() {
      try {
       let response = await this.axios.get(
          "http://localhost:3000/recipes/information",
          {
            params: { id: this.$route.params.recipeId },
          }
        );

        console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      // } catch (error) {
      //   console.log("error.response.status", error.response.status);
      //   this.$router.replaceGIT("/NotFound");
      //   return;
      // }

      let {
        id,
        analyzedInstructions,
        // instructions,
        ingredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        vegetarian,
        vegan,
        glutenFree,
        servings,
      } = response.data;

      // let _instructions = analyzedInstructions
      //   .map((fstep) => {
      //     fstep.step = fstep.step;
      //     return fstep.step;
      //   })
      //   .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        //instructions,
        //_instructions,
        id,
        analyzedInstructions,
        ingredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        vegetarian,
        vegan,
        glutenFree,
        servings,
      };

      this.recipeInfo = _recipe;
      // console.log("asd");
  } catch (error) {
       console.log("error.response.status", error.response.status);
       this.$router.push("/").catch(()=>console.log("asd"));

        // this.$router.replaceGIT("/NotFound");
        return;
    }
    },
};
</script>

<style lang="scss" scoped>
.recipe-body{
  font-size: 20px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
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
