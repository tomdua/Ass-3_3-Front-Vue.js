<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1 class= "center" >{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <!-- <div class="mb-3">
              <i  v-if="recipe.vegetarian" class="fa fa-leaf" style="color: green; margin-right:5px"></i>
              <i  v-if="recipe.vegan" class="fa fa-envira" style="color: red; margin-right:5px"></i>
              <i  v-if="recipe.glutenFree" class="fa fa-pagelines" style="color: brown; margin-right:5px"></i>
            <span>{{recipe.aggregateLikes}}</span>
            <b-icon icon="hand-thumbs-up" style="color: blue; margin-right:5px"></b-icon>
            <span>{{recipe.readyInMinutes}}</span>
            <b-icon icon="clock" style="color: blue; margin-right:30px"></b-icon>
                  <b-button>Start To Cook!</b-button> 

            </div> -->
            
            <ul v-if=recipe.ingredients>
              Ingredients:
              <li
                v-for="(r, index) in recipe.ingredients"
                :key="index + '_' + r.id"
              >
                {{ r.original }}
              </li>
            </ul>
          </div>
          <div class="wrapped">
            Instructions:
            <ol>
              <li v-for="s in recipe.analyzedInstructions" :key="s.number">
                    <b-form-checkbox size="lg">{{ s.step }}</b-form-checkbox>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </div>
  </div>
</template>

<script>
export default {

//    props: {
//     recipe: {
//       type: Object,
//       required: true,
//     }
//   },  
  data() {
    return {
      recipe: null,
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
        analyzedInstructions,
        instructions,
        ingredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        vegetarian,
        vegan,
        glutenFree
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
        analyzedInstructions,
        ingredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        vegetarian,
        vegan,
        glutenFree
      };

      this.recipe = _recipe;
  } catch (error) {
       console.log("error.response.status", error.response.status);
        this.$router.replaceGIT("/NotFound");
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
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
/* .recipe-header{

} */
</style>
