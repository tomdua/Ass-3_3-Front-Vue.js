<template>
  <div>
    <h3>Search Page!</h3>
    <div class="w-full  px-3 mb-6">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="name"
      >
      </label>
      <div class="relative mb-3">
        <input
          placeholder=" What to Cook Today?!"
          id="name"
          v-model="keyword"
        />
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        ></div>
        <div>
          <multiselect
            v-model="valueCuisine"
            :options="Cuisine"
            :searchable="false"
            :close-on-select="true"
            :show-labels="false"
            :allow-empty="false"
            placeholder="Pick a Cuisine"
          ></multiselect>

          <multiselect
            v-model="valueDiet"
            :options="Diet"
            :searchable="false"
            :close-on-select="true"
            :show-labels="true"
            :allow-empty="false"
            placeholder="Pick a Diet"
          ></multiselect>

          <multiselect
            v-model="valueIntolerances"
            :options="Intolerances"
            :searchable="false"
            :close-on-select="true"
            :show-labels="true"
            :allow-empty="false"
            placeholder="Pick a Intolerances"
          ></multiselect>
         <h4> Number of recipes:</h4>
          <select v-model="valueNumber">
            <option selected>5</option>
            <option>10</option>
            <option>15</option>
          </select>

          <h4>Sort by:</h4>
          <select v-model="value">
            <option selected> </option>
            <option>Very popularity</option>
            <option>Low popularity</option>
            <option>Quick preparation time</option>
            <option>Long preparation time</option>
          </select>

          <pre class="language-json"></pre>
        </div>
      </div>

      <button
        v-on:click="searchRecipe"
        class="bg-blue-500  font-bold py-2 px-4 rounded"
      >
        Search
      </button>
    </div>
    <b-container>
      <b-row>
        <div class="col-md-6" v-for="r in recipes" :key="r.id">
          <RecipePreview class="recipePreview" :recipe="r" />
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import RecipePreview from "../components/RecipePreview";
import axios from "axios";
import { debounce } from "lodash";
import Multiselect from "vue-multiselect";
import VueSimpleAlert from "vue-simple-alert";
import Cuisine from "../assets/cuisine";
import Diet from "../assets/diet";
import Intolerances from "../assets/intolerances";

Vue.use(VueSimpleAlert);

export default {
  name: "SearchPage",
  components: {
    RecipePreview,
    Multiselect,
  },
  mounted() {
    this.userLastSearch();
    this.Cuisine.push(...Cuisine);
    this.Diet.push(...Diet);
    this.Intolerances.push(...Intolerances);
  },
  data: () => ({
    keyword: "",
    valueCuisine: "",
    Cuisine: [],
    valueDiet: "",
    Diet: [],
    valueIntolerances: "",
    Intolerances: [],
    valueNumber: "",
    value: "",
    recipes: [],
  }),

  methods: {
    customLabel(option) {
      return `${option.library} - ${option.language}`;
    },
    async searchRecipe() {
      // eslint-disable-next-line no-console
      //console.log(`Checking name: ${this.keyword}`);
      await axios
        .get("http://localhost:3000/search", {
          params: {
            query: this.keyword,
            cuisine: this.valueCuisine,
            diet: this.valueDiet,
            intolerances: this.valueIntolerances,
            number: this.valueNumber,
          },
        })
        .then((res) => {
          const recipes = res.data;
          this.recipes = [];
          this.recipes.push(...res.data);
          if (this.recipes.length <= 0) this.noFindRecipes();
          console.log(recipes);
          console.log(this.recipes.length);
          if (this.$root.store.username != null) {
            this.$root.store.lastSearch = this.recipes;
          }
          console.log(this.value);
          if (this.value === "Low popularity") this.lowPopularity();
          if (this.value === "Very popularity") this.highPopularity();
          if (this.value === "Long preparation time")
            this.highPreparationgTime();
          if (this.value === "Quick preparation time")
            this.lowPreparationgTime();
        })
        .catch((err) => {
          console.log(err);
        });
    },

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
    userLastSearch() {
      if (this.$root.store.username != null) {
        this.recipes = this.$root.store.lastSearch;
      }
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style></style>
