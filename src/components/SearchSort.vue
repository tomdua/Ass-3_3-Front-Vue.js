<template>
  <div id="sort">
    <h4>Sort by:</h4>
    <b-form-radio-group
      v-model="valuesort"
      :options="sort"
      :searchable="false"
      :close-on-select="true"
      :show-labels="false"
      :allow-empty="true"
      v-bind="sortFunc"
    ></b-form-radio-group>
  </div>
</template>

<script>
export default {
  data: () => ({
    valuesort: "",
    sort: [
      "Low popularity",
      "Very popularity",
      "Quick preparation time",
      "Long preparation time",
    ],
  }),
  method: {
    lowPopularity() {
      let tempRecipes = [];
      tempRecipes = this.recipes;
      tempRecipes.sort(function(recipe1, recipe2) {
        return (
          parseFloat(recipe1.aggregateLikes) -
          parseFloat(recipe2.aggregateLikes)
        );
      });
    },
    noFindRecipes() {
      alert("Sorry, No recipes found.");
    },
    highPopularity() {
      let tempRecipes = [];
      tempRecipes = this.recipes;
      tempRecipes.sort(function(recipe1, recipe2) {
        return (
          parseFloat(recipe2.aggregateLikes) -
          parseFloat(recipe1.aggregateLikes)
        );
      });
    },
    highPreparationgTime() {
      let tempRecipes = [];
      tempRecipes = this.recipes;
      tempRecipes.sort(function(recipe1, recipe2) {
        return (
          parseFloat(recipe1.readyInMinutes) -
          parseFloat(recipe2.readyInMinutes)
        );
      });
    },
    lowPreparationgTime() {
      let tempRecipes = [];
      tempRecipes = this.recipes;
      tempRecipes.sort(function(recipe1, recipe2) {
        return (
          parseFloat(recipe1.readyInMinutes) -
          parseFloat(recipe2.readyInMinutes)
        );
      });
    },
    sortFunc() {
      if (this.valuesort === "Low popularity") this.lowPopularity();
      else if (this.valuesort === "Very popularity") this.highPopularity();
      else if (this.valuesort === "Long preparation time")
        this.highPreparationgTime();
      else if (this.valuesort === "Quick preparation time")
        this.lowPreparationgTime();
    },
  },
};
</script>

<style></style>
