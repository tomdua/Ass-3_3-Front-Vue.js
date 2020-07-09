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
            <div class="mb-3">
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div>Likes: {{ recipe.aggregateLikes }} likes</div>
            </div>
            
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
                {{ s.step }}
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
