<template>
 <b-container fluid class="bv-example-row">
    <br>
    <h2>Preparing A Meal</h2>
    <b-row class="justify-content-md-center">

      <b-col>
              <ul>
              <li v-for="(r, index) in recipeIDs" :key="index">
                    {{ r }}
                  </li>
          </ul>

      </b-col>

  <b-col>



  </b-col>





    </b-row>
    <br>

    <!-- <RecipePreviewList :recipes="familyRecipes" :personals="personals" class="center" /> -->
  </b-container>








  <!-- <div>
    <b-progress :value="value" :max="max" show-progress animated></b-progress>
    <b-progress class="mt-2" :max="max" show-value>
      <b-progress-bar :value="value * (6 / 10)" variant="success"></b-progress-bar>
      <b-progress-bar :value="value * (2.5 / 10)" variant="warning"></b-progress-bar>
      <b-progress-bar :value="value * (1.5 / 10)" variant="danger"></b-progress-bar>
    </b-progress>

    <b-button class="mt-3" @click="randomValue">Click me</b-button>
  </div> -->
</template>

<script>
  export default {
  created() {
    this.getRecipes();
  },
    data() {
      return {
        recipeIDs: [],
      }
    },
    methods: {
      getRecipes() {
        this.recipeIDs = this.$root.store.recipesPrepar;
      }

    }
  }
</script>

<style lang="scss" scoped>
h2 {
  font-family: "Comic Sans MS", cursive, sans-serif;
  text-align: center;
}
</style>