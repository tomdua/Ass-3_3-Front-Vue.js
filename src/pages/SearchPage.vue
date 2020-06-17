<template>
  <div>
<h3>Search</h3>
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
            :close-on-select="false"
            :show-labels="false"
            placeholder="Pick a Cuisine"
          ></multiselect>

          <multiselect
            v-model="valueDiet"
            :options="Diet"
            :searchable="false"
            :close-on-select="false"
            :show-labels="false"
            placeholder="Pick a Diet"
          ></multiselect>

          <multiselect
            v-model="valueIntolerances"
            :options="Intolerances"
            :searchable="false"
            :close-on-select="false"
            :show-labels="false"
            placeholder="Pick a Intolerances"
          ></multiselect>
          <pre class="language-json"></pre>

        </div>
      </div>

      <button
        @click.prevent="checkName"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >Search</button>
    </div>
    <b-container>
      <b-row>
        <div class="col-md-6"  v-for="r in recipes" :key="r.id">
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

export default {
  name: "SearchPage",
  components: {
    RecipePreview,
    Multiselect
  },
  data() {
    return {
      recipes: [],
    };
  },
  data: () => ({
    keyword: "",
    valueCuisine: "",
    Cuisine: [
      "African",
      "American",
      "British",
      "Cajun",
      "Caribbean",
      "Chinese",
      "Eastern European",
      "European",
      "French",
      "German",
      "Greek",
      "Indian",
      "Irish",
      "Italian",
      "Japanese",
      "Jewish",
      "Korean",
      "Latin American",
      "Mediterranean",
      "Mexican",
      "Middle Eastern",
      "Nordic",
      "Southern",
      "Spanish",
      "Thai",
      "Vietnamese",
    ],
    valueDiet: "",
    Diet: [
      "Gluten Free",
      "Ketogenic",
      "Vegetarian",
      "Lacto-Vegetarian",
      "Ovo-Vegetarian",
      "Vegan",
      "Pescetarian",
      "Paleo",
      "Primal",
      "Whole30",
    ],
    valueIntolerances: "",
    Intolerances: [
      "Dairy",
      "Egg",
      "Gluten",
      "Grain",
      "Peanut",
      "Seafood",
      "Sesame",
      "Shellfish",
      "Soy",
      "Sulfite",
      "Tree Nut",
      "Wheat",
    ],
  }),
    mounted() {

    },

  methods: {
  customLabel (option) {
    return `${option.library} - ${option.language}`
  },
  async checkName() {
      // eslint-disable-next-line no-console
      //console.log(`Checking name: ${this.keyword}`);
      axios
        .get("https://recipe-tom-almog.herokuapp.com/search", {
          params: {
            query: this.keyword,
            cuisine: this.valueCuisine,
            diet: this.valueDiet,
            intolerances: this.valueIntolerances,
          },
        })
        .then((res) => {
          // eslint-disable-next-line no-console
          //console.log(res.data);
          
          const recipes = res.data;
          this.recipes = [];
          this.recipes.push(...recipes);
          console.log(recipes);
          //console.log(recipes);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    },
  },
  watch: {
    keyword() {
      if (!this.keyword) return;
      this.debounceName();
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style> 
  * {
  font-family: 'Lato', 'Avenir', sans-serif;
}
</style>
