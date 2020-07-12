<template>
  <div>
    <h1 style="color:white; text-align:center">Search Recipes</h1>


<form class="example" action="/action_page.php" style="margin:auto;max-width:300px">
  <input  v-model="keyword" type="text" placeholder="Search.." name="search2">
  <button v-on:click="searchRecipe" type="button"><i class="fa fa-search"></i></button>
</form>


    <div class="w-full  px-3 mb-6" style="text-align:center">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="name"
      >
      </label>
      <div class="relative mb-3">
        <div>
        <b-row class="justify-content-md-center">
          <b-form inline style="text-align:center">
            <label class="mr-sm-2" for="inline-form-custom-select-pref"
              >Pick a Cuisine</label>
            <b-form-select
              v-model="valueCuisine"
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              :options=Cuisine
            ></b-form-select>
            <label class="mr-sm-2" for="inline-form-custom-select-pref"
              >Pick a Diet</label>
            <b-form-select
              v-model="valueDiet"
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              :options=Diet
            ></b-form-select>
            <label class="mr-sm-2" for="inline-form-custom-select-pref"
              >Pick a Intolerances</label>
            <b-form-select
              v-model="valueIntolerances"
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              :options=Intolerances
            ></b-form-select>
            </b-form>
          <b-form inline style="text-align:center">
            <label class="mr-sm-2" for="inline-form-custom-select-pref" 
              >Number of recipes</label
            >
            <b-form-select
              v-model="valueNumber"
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"    

              :options="[
                '5',
                '10',
                '15',
              ]"
            ></b-form-select>
            <label class="mr-sm-2" for="inline-form-custom-select-pref"
              >Sort by</label
            >
            <b-form-select
              v-model="value"
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              :options="[
                'Very popularity',
                'Low popularity',
                'Quick preparation time',
                'Long preparation time',
              ]"
            ></b-form-select>
          </b-form>
       </b-row>

          <pre class="language-json"></pre>
        </div>
      </div>
    </div>
    <b-row  class="justify-content-md-center">
    <RecipePreviewList :recipes="recipes" />
    </b-row>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import axios from "axios";
import { debounce } from "lodash";
import VueSimpleAlert from "vue-simple-alert";
import Cuisine from "../assets/cuisine";
import Diet from "../assets/diet";
import Intolerances from "../assets/intolerances";

Vue.use(VueSimpleAlert);

export default {
  name: "SearchPage",
  components: {
    RecipePreviewList,
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
    valueNumber: 5,
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
            this.$root.store.query = this.keyword;
            this.$root.store.cuisine = this.valueCuisine;
            this.$root.store.diet = this.valueDiet;
            this.$root.store.intolerances = this.valueIntolerances;
            this.$root.store.number = this.valueNumber;
            this.$root.store.value = this.value;
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
          parseFloat(recipe2.readyInMinutes) -
          parseFloat(recipe1.readyInMinutes)
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
        this.keyword= this.$root.store.query;
        this.valueCuisine= this.$root.store.cuisine;
        this.valueDiet = this.$root.store.diet;
         this.valueIntolerances = this.$root.store.intolerances;
         this.valueNumber=this.$root.store.number;
         this.value=this.$root.store.value;
      }
    },
  },
};
</script>

<style>
body {
  font-family: Arial;
}

* {
  box-sizing: border-box;
}

form.example input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}

form.example button {
  float: left;
  width: 20%;
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
}

form.example button:hover {
  background: #0b7dda;
}

form.example::after {
  content: "";
  clear: both;
  display: table;

}
</style>
