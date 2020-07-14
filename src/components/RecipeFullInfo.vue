<template>
  <b-container class="recipe-body">
    <br />

    <h2>{{ recipe.title }}</h2>
    <br />
    <b-card no-body class="overflow-hidden" style="background: none;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="recipe.image"
            alt="Image"
            class="rounded-0"
            width="100%"
            height="100%"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <b-card-text>
              <h3 style="text-align: center">Ingredients:</h3>
              <div v-if="preparing">
                <ul>
                  <li
                    v-for="(r, index) in recipe.extendedIngredients"
                    :key="index + '_' + r.id"
                  >
                    {{ r.amount * (servingsNumAfter / recipe.servings) }}
                    {{ r.name }}
                  </li>
                  <br />
                  <span style="font-weight: bold; color:blue"
                    >Number Of Servings: {{ servingsNumAfter }}</span
                  >
                </ul>
              </div>
              <div v-else>
                <ul>
                  <li
                    v-for="(r, index) in recipe.extendedIngredients"
                    :key="index + '_' + r.id"
                  >
                    {{ r.original }}
                  </li>
                </ul>
              </div>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <br />
    <div v-if="preparing">
      <b-row class="justify-content-md-center">
        <div>
          <label style="font-weight: bold;" for="sb-step"
            >Change Number Of Servings:</label
          >
          <b-form-spinbutton
            id="sb-step"
            min="0"
            max="500"
            v-model="servingsNumAfter"
            :placeholder="recipe.servings.toString()"
            :step="recipe.servings"
          ></b-form-spinbutton>
        </div>
      </b-row>
      <br />
      <b-row>
        <b-col col lg="12">
          <!-- <RecipePreviewData :recipe="recipe" /> -->
          <h3 style="text-align: center">Instructions:</h3>
          <!-- Instructions: -->
          <ul>
            <b-form-checkbox-group
              id="checkbox-group-2"
              v-model="curSteps"
              name="flavour-2"
              :options="steps"
              @change="sendData"
            >
              <b-form-checkbox>{{ curSteps }} </b-form-checkbox>
            </b-form-checkbox-group>
          </ul>
        </b-col>
      </b-row>
    </div>
    <div v-else>
      <b-row>
        <b-col col lg="5" offset-md="2">
          <RecipePreviewData :recipe="recipe" />
        </b-col>
        <b-col cols="5" md="auto"> </b-col>
        <b-col col lg="2" offset-md="2">
          <RecipePreviewUserInfo :recipe="recipe" :personal="personal" />
        </b-col>
        <br />
      </b-row>
      <br />
      <b-row>
        <b-col col lg="12">
          <h3 style="text-align: center">Instructions:</h3>
          <ul>
            <li v-for="s in recipe.analyzedInstructions" :key="s.number">
              {{ s.step }}
            </li>
          </ul>
        </b-col>
        <b-col col lg="3" offset-md="1">
          <router-link :to="{ name: 'preparing' }">
            <b-button variant="dark" size="lg">Preparing The Recipe</b-button>
          </router-link>
        </b-col>
        <b-col col lg="4" offset-md="3">
          <b-button @click="addToRecipesPrepar" variant="primary" size="lg"
            >Add To The Upcoming Meal</b-button
          >
        </b-col>
      </b-row>
    </div>
    <br />
  </b-container>
</template>

<script>
import RecipePreviewUserInfo from "./RecipePreviewUserInfo.vue";
import RecipePreviewData from "./RecipePreviewData";
export default {
  components: {
    RecipePreviewUserInfo,
    RecipePreviewData,
  },
  data() {
    return {
      recipesPrepar: [],
      curSteps: [],
      idStepAndCur: Object,
      steps: [],
      servingsNumAfter: this.recipe.servings,
    };
  },

  mounted() {
    this.recipesLastPrepar();
    this.pushSteps();
    this.recipeLastPrepe();
  },
  created() {
    this.startPreper();
  },
  props: {
    personal: {
      type: Boolean,
      required: true,
    },
    recipe: {
      type: Object,
      requred: true,
    },
    preparing: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    curStepData: function() {
      let recipe_id = this.recipe.id;
      let numberOfSteps = this.recipe.analyzedInstructions.length;
      return {
        id: recipe_id,
        stepsTotal: numberOfSteps,
        curSteps: this.curSteps,
      };
    },
  },
  methods: {
    startPreper() {
      if (this.$root.store.RecipesCheckList.id == this.recipe.id) {
        console.log(this.$root.store.RecipesCheckList);
        this.curSteps = this.$root.store.RecipesCheckList.curSteps;
      }
    },
    pushSteps() {
      let i = 0;
      this.recipe.analyzedInstructions.forEach((element) => {
        let recipe_step = { text: element.step, value: ++i };
        this.steps.push(recipe_step);
      });
    },
    addToRecipesPrepar() {
      let recipe_id = this.recipe.id;
      console.log(this.recipesPrepar.length);
      if (this.recipesPrepar.length === 0) {
        this.recipesPrepar.push(recipe_id);
      } else {
        this.recipesPrepar.push(recipe_id);
      }
      this.$root.store.recipesPrepar = this.recipesPrepar;
      this.$root.store.recipePapaerNumber = this.recipesPrepar.length;
      console.log("13" + this.$root.store.RecipesCheckList);
      console.log("12" + this.recipesPrepar);
    },
    recipesLastPrepar() {
      if (this.$root.store.recipesPrepar.length > 0) {
        this.recipesPrepar = this.$root.store.recipesPrepar;
      }
    },
    sendData() {
      //console.log(this.curStepData);
      console.log(this.curStepData);
      this.$root.store.RecipesCheckList = this.curStepData;
      //console.log(this.$root.store.RecipesCheckList);
    },
    recipeLastPrepe() {
      if (this.$root.store.RecipesCheckList != null) {
        this.idStepAndCur = this.$root.store.RecipesCheckList;
        console.log(this.idStepAndCur);
      }
    },
  },
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
