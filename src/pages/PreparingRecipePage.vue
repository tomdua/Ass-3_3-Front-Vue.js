<template>
  <b-container class="recipe-body">
    <br>

    <h2>{{recipe.title}}</h2>
    <br>
    <b-card no-body class="overflow-hidden" style="background: none;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src=recipe.image alt="Image" class="rounded-0" style="width:100%; high:100%;"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <b-card-text>
              <h3 style="text-align: center">Ingredients:</h3>
              <ul v-if="updatedMultiplier">
                <li  v-for="(r, index) in recipe.extendedIngredients" :key="index + '_' + r.id">
                  {{ r.amount*updatedMultiplier }} {{ r.name }}</li>
                  <br>
                  <span style="font-weight: bold; color:blue">Number Of Servings: {{servingsNumAfter}}</span>
              </ul>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <br>
    <b-row class="justify-content-md-center">
 <div>
    <label style="font-weight: bold;" for="sb-step">Change Number Of Servings:</label>
    <b-form-spinbutton id="sb-step" min="0" max="500" v-model="servingsNumAfter" :placeholder=recipe.servings :step=recipe.servings ></b-form-spinbutton>
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
            <b-form-checkbox>{{ s.step }}</b-form-checkbox></li>
        </ul>
      </b-col>
           

    </b-row>
    <br>

  </b-container>
</template>

<script>
// import RecipePreviewUserInfo from "./RecipePreviewUserInfo.vue";
import RecipePreviewData from "../components/RecipePreviewData";
export default {
  components: {
    // RecipePreviewUserInfo,
    // RecipePreviewData
  },
  data() {
    return {
      recipe: {},
      personal: false,
      servingsNumfirst: "",
      servingsNumAfter:"",
    };
  },
  computed:{
    updatedMultiplier: function () {
      return this.servingsNumAfter / this.servingsNumfirst;
    }
  },
  created() {
    this.getRecipeInfo();
  },
  methods: {
    async getRecipeInfo() {
      try {
        // console.log(recipeInfo.title);
        let response = await this.axios.get(
          "http://localhost:3000/recipes/information",
          {
            params: { id: this.$route.params.recipeId }
          }
        );

        console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      
        this.servingsNumfirst=response.data.servings;
        this.recipe = response.data; //this.$route.params.recipeId;
        console.log(this.recipe);

        // console.log("asd");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.push("/").catch(() => console.log("asd"));

        // this.$router.replaceGIT("/NotFound");
        return;
      }
    }
  }
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
.recipe-body{
  font-size: 20px;
  // font-family:Verdana, Geneva, Tahoma, sans-serif;
  // font-weight: bold;
}
</style>