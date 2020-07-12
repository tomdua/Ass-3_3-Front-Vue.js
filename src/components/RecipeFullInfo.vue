<template>
  <b-container class="recipe-body">
    <br>

    <h1 style="text-align: center">{{recipe.title}}</h1>
    <br>
    <b-row class="justify-content-md-center">
      <b-img :src=recipe.image fluid alt="Responsive image"></b-img>
    </b-row>
    <br>
<b-row >
  <b-col >
      <router-link :to="{ name: 'preparing' }"><b-button>Start To Cook!</b-button></router-link>
      <!-- <hr>
      <i class="fa fa-cutlery" aria-hidden="true">{{recipe.servings}}</i> -->
 
  </b-col>
  <b-col>
    <RecipePreviewData :recipe="recipe" />
     <!-- <i class="fa fa-cutlery" aria-hidden="true">{{recipe.servings}}</i> -->
    </b-col>
    
    <b-col>
    <RecipePreviewUserInfo :recipe="recipe" :personal="personal" />
     </b-col>
  
</b-row>
    <b-row>
      <b-col>
        <!-- <RecipePreviewUserInfo :recipe="recipe" :personal="personal" /> -->
         <h3 style="text-align: center">Ingredients:</h3>
        <ul>
           <li v-for="(r, index) in recipe.ingredients" :key="index + '_' + r.id">
            {{ r.original }}</li>
          </ul>
      </b-col>
      <b-col>
        <!-- <RecipePreviewData :recipe="recipe" /> -->
        <h3 style="text-align: center">Instructions:</h3>
        <!-- Instructions: -->
        <ul>
              <li v-for="s in recipe.analyzedInstructions" :key="s.number">
                {{ s.step }}</li>
                </ul>
      </b-col>

    </b-row>

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
  }
};
</script>

<style style lang="scss" scoped>
.recipe-body{
  font-size: 20px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-style: italic;
  font-weight: bold;
}
</style>