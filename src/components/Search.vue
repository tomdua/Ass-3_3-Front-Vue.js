<template>
  <div>
    <h3>What to Cook Today?!</h3>
    <div class="w-full  px-3 mb-6">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="name"
      >
      </label>
      <div class="relative mb-3">
        <input
          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
          Number of recipes:
          <b-form-radio-group
            v-model="valueNumber"
            :options="number"
            :searchable="false"
            :close-on-select="true"
            :show-labels="false"
            :allow-empty="false"
          ></b-form-radio-group>

          <pre class="language-json"></pre>
        </div>
      </div>
      <SearchSort class="searchSort" v-model="sortFunc"> </SearchSort>

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
import RecipePreview from "./RecipePreview";
import SearchSort from "./SearchSort";
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
    SearchSort,
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
    number: ["5", "10", "15"],
    valuePopularity: "",
    popularity: ["Low popularity", "Very popularity"],
    valuePreparationTime: "",
    preparationtime: ["Quick preparation time", "Long preparation time"],
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
        })
        .catch((err) => {
          console.log(err);
        });
    },
    noFindRecipes() {
      alert("Sorry, No recipes found.");
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
