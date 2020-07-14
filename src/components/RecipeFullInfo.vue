<template>
  <b-container class="recipe-body">
    <br>

    <h2>{{recipe.title}}</h2>
    <br>
    <b-card no-body class="overflow-hidden" style="background: none;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src=recipe.image alt="Image" class="rounded-0" width=100% height=100%></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <b-card-text>
              <h3 style="text-align: center">Ingredients:</h3>
              <div v-if="preparing">
                <ul>
                  <li v-for="(r, index) in recipe.extendedIngredients" :key="index + '_' + r.id">
                    {{ r.amount*(servingsNumAfter/recipe.servings) }} {{ r.name }}</li>
                  <br>
                  <span style="font-weight: bold; color:blue">Number Of Servings: {{servingsNumAfter}}</span>
                </ul>
              </div>
              <div v-else>
                <ul>
                  <li v-for="(r, index) in recipe.extendedIngredients" :key="index + '_' + r.id">
                    {{ r.original }}</li>
                </ul>
              </div>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <br>
    <div v-if="preparing">
      <b-row class="justify-content-md-center">
        <div>
          <label style="font-weight: bold;" for="sb-step">Change Number Of Servings:</label>
          <b-form-spinbutton id="sb-step" min="0" max="500" v-model="servingsNumAfter" :placeholder=recipe.servings.toString() :step=recipe.servings></b-form-spinbutton>
        </div>
      </b-row>
      <br>
      <b-row>
        <b-col col lg="12">
          <!-- <RecipePreviewData :recipe="recipe" /> -->
          <h3 style="text-align: center">Instructions:</h3>
          <!-- Instructions: -->
          <ul>
            <li v-for="s in recipe.analyzedInstructions" :key="s.number">
              <b-form-checkbox>{{ s.step }}</b-form-checkbox>
            </li>
          </ul>
        </b-col>
        <!-- <div>
        <b-progress :value="45" :max="100" show-progress animated></b-progress>
</div> -->

      </b-row>

    </div>
    <div v-else>
      <b-row>
        <!-- <router-link :to="{ name: 'preparing' }"><b-button>Start To Cook!</b-button></router-link> -->
        <!-- <hr>
      <i class="fa fa-cutlery" aria-hidden="true">{{recipe.servings}}</i> -->

        <!-- <b-col cols="12" md="auto"> -->
        <b-col col lg="5" offset-md="2">

          <RecipePreviewData :recipe="recipe" />
        </b-col>
        <b-col cols="5" md="auto">

          <!-- <i class="fa fa-cutlery" aria-hidden="true">{{recipe.servings}}</i> -->
        </b-col>
        <b-col col lg="2" offset-md="2">
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
          <router-link :to="{ name: 'preparing' }">
            <b-button variant="primary" size="lg">Add To The Upcoming Meal</b-button>
          </router-link>
          <!-- @click="addRecipe" -->
        </b-col>

      </b-row>
    </div>
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
    },
    preparing: {
      type: Boolean,
      required: true
    }
    //   servingsNumAfter: {
    //   type: Number,
    //   required: false
    // },
    //   updatedMultiplier: {
    //   type: Number,
    //   required: false
    // },
  },
  data() {
    return {
      servingsNumAfter: this.recipe.servings
      // curSteps: "",
    };
  }
  // computed:{
  //   updatedMultiplier: function () {
  //     if(recipe){
  //     return servingsNumAfter / 1;
  //     }
  //     return "";
  //   },
  // },
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
.recipe-body {
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: italic;
  font-weight: bold;
}
</style>