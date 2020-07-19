<template>
  <b-container class="recipe-body">
    <br />

    <h2>{{ recipe.title }}</h2>
    <br />
    <b-card no-body class="overflow-hidden" style="background: none;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="recipe.image" alt="Image" class="rounded-0" width="100%" height="100%"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <b-card-text>
              <h3 style="text-align: center">Ingredients:</h3>
              <div v-if="preparing">
                <ul>
                  <li v-for="(r, index) in recipe.extendedIngredients" :key="index + '_' + r.id">
                    {{ r.amount * (servingsNumAfter / recipe.servings) }}
                    {{ r.name }}
                  </li>
                  <br />
                  <span style="font-weight: bold; color:blue">Number Of Servings: {{ servingsNumAfter }}</span>
                </ul>
              </div>
              <div v-else>
                <ul>
                  <li v-for="(r, index) in recipe.extendedIngredients" :key="index + '_' + r.id">
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
          <label style="font-weight: bold;" for="sb-step">Change Number Of Servings:</label>
          <b-form-spinbutton id="sb-step" min="0" max="500" v-model="servingsNumAfter" :placeholder="recipe.servings.toString()" :step="recipe.servings"></b-form-spinbutton>
        </div>
      </b-row>
      <br />
      <b-row class="justify-content-md-center">
        <!-- <b-col col lg="20"> -->
        <RecipePrepareTable :items="itemsToSend" :recipe="recipe" />
        <!-- </b-col> -->
     

      </b-row>
    </div>
    <div v-else>
      <b-row>
        <b-col col lg="5" offset-md="1">
          <RecipePreviewData :recipe="recipe" style="margin-left:100px" />
        </b-col>
        <b-col md="auto"> </b-col>
        <b-col col lg="3" offset-md="2">
          <RecipePreviewUserInfo :recipe="recipe" :personal="personal" />
        </b-col>
        <br />
      </b-row>
      <br />
      <b-row>
        <b-col col lg="12">
          <h3 style="text-align: center">Instructions:</h3>
          <ul>
            <li v-for="(s,index) in steps" :key="index">
              {{ s }}
            </li>
          </ul>
        </b-col>
        <b-col v-if="$root.store.username" col lg="3" offset-md="1">
          <router-link :to="{ name: 'preparing' }">
            <b-button @click="addToRecipesPrepar" variant="dark" size="lg">Prepar The Recipe</b-button>
          </router-link>
        </b-col>
        <b-col v-if="$root.store.username" col lg="4" offset-md="3">
          <b-button @click="addToRecipesPrepar" variant="primary" size="lg">Add To The Upcoming Meal</b-button>
        </b-col>
      </b-row>
    </div>
    <br />
  </b-container>
</template>

<script>
import RecipePreviewUserInfo from "./RecipePreviewUserInfo.vue";
import RecipePreviewData from "./RecipePreviewData";
import RecipePrepareTable from "./RecipePrepareTable";
export default {
  components: {
    RecipePreviewUserInfo,
    RecipePreviewData,
    RecipePrepareTable
  },
  data() {
    return {
      //  fields: ['selected', 'isActive', 'age', 'first_name', 'last_name'],
      itemsToSend: [],
      //     selectMode: 'multi',
      //     selected: [],
      // items: [],
      recipesPrepar: Object,
      curSteps: [],
      // updatedcurSteps: [],
      idStepAndCur: [],
      steps: [],
      ingredientsName: [],
      equipmentName: [],
      servingsNumAfter: this.recipe.servings,
      sendData: []
    };
  },

  created() {
    this.pushSteps();
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
  },
  methods: {

    pushSteps() {
    

      this.steps = this.recipe.analyzedInstructions.steps.map(element => {
        return element.step;
      });

      this.ingredientsName = this.recipe.analyzedInstructions.steps.map(
        element => {
          if (element.ingredients.length > 0)
            return element.ingredients.map(ing => {
              //  if(ing.length>0)
              return ing.name;
            });
        }
      );

      this.ingredientsName = this.ingredientsName.map(element => {
        if (element) {
          return element.toString();
          // console.log(element);
        } else return (element = "");
      });

      //       this.ingridentsName = this.ingridentsName.filter(function (el) {
      //       return el != null;
      // });
      this.equipmentName = this.recipe.analyzedInstructions.steps.map(
        element => {
          if (element.equipment.length > 0)
            return element.equipment.map(eq => {
              //  if(ing.length>0)
              return eq.name;
            });
        }
      );

      this.equipmentName = this.equipmentName.map(element => {
        if (element) {
          return element.toString();
          // console.log(element);
        } else return (element = "");
      });
      // fields: ['Done', 'Equipment', 'Ingredients', 'Instructions'],

      for (let i = 0; i < this.steps.length; i++) {
        this.itemsToSend[i] = {
          Equipment: this.equipmentName[i],
          Ingredients: this.ingredientsName[i],
          Instructions: this.steps[i],
          selected: false
        };
      }
  
    },
    addToRecipesPrepar() {
      let recipe_id = this.recipe.id.toString();

      let exists = false;
      let added = false;
      // let array = false;
      // let a= JSON.parse(localStorage.getItem("recipesPrepar")|| []);

      let send={
        id:"",
        title: "",
      }

      try {
         let recipesPreparMemory= JSON.parse(localStorage.getItem('recipesPreparIn'));
        if (recipesPreparMemory) {
          if (recipesPreparMemory.length > 0) {
            let i = recipesPreparMemory.findIndex(
              o => o === recipe_id);
            if (recipesPreparMemory[i]) exists = true;
            else{
              this.sendData=recipesPreparMemory;
              send.id=recipe_id;
              send.title=this.recipe.title;
              this.sendData.push(send);
               this.$root.store.addToRecipesPrepareList(this.sendData);
            added = true;
            }
          }
        } else {
          send.id=recipe_id;
          send.title=this.recipe.title;
          this.sendData.push(send);
          this.$root.store.addToRecipesPrepareList(this.sendData);
          added = true;
        }
      } catch (error) {
        console.log(error);
      }
          this.$forceUpdate();  


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
.recipe-body {
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: italic;
  font-weight: bold;
}
</style>
