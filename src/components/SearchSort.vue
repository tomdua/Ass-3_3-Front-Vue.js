<template>
  <div id="sort">
    <h4>Sort by:</h4>
    <b-tabs active-nav-item-class="font-weight-bold text-uppercase text-danger" active-tab-class="font-weight-bold text-success" content-class="mt-3">
      <b-tab title="Very popularity" active></b-tab>
      <b-tab title="Low popularity"></b-tab>
      <b-tab title="Quick preparation time"></b-tab>
      <b-tab title="Long preparation time"></b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  data: () => ({
    recipes: [],
    valuesort: "",
    sort: [
      "Low popularity",
      "Very popularity",
      "Quick preparation time",
      "Long preparation time"
    ]
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
      console.log(this.valuesort);
      if (this.valuesort === "Low popularity") this.lowPopularity();
      else if (this.valuesort === "Very popularity") this.highPopularity();
      else if (this.valuesort === "Long preparation time")
        this.highPreparationgTime();
      else if (this.valuesort === "Quick preparation time")
        this.lowPreparationgTime();
    }
  }
};
</script>

<style></style>
