<template>
  <b-container fluid class="bv-example-row">
    <br>
    <h2>Preparing A Meal</h2>
    <br>

    <RecipesMealTable :recipesIds="recipeIDs" :recipesObj="recipesObjToSend" />

    <br>
    <h4># Press The Recipe For Continue Praparing</h4>
    <h4># Change The Order By Drag And Drop Recipe's Name</h4>

  </b-container>

</template>

<script>
import RecipesMealTable from "../components/RecipesMealTable";
export default {
  components: {
    RecipesMealTable
  },
  created() {
    this.getRecipes();
  },
  data() {
    return {
      recipeIDs: [],
      recipesObj: [],
      recipesObjToSend: [],
      recipesBars: []
    };
  },
  methods: {
   getRecipes() {
      this.recipeIDs = JSON.parse(localStorage.getItem("recipesPreparIn"));
      this.recipesObj = JSON.parse(localStorage.getItem("recipesCheckListIn"));
      // if(!this.recipesObj)
      // this.$router.push("/").catch(() => console.log("asd"));
      if (this.recipeIDs.length>0) {
      let recipe_id = "";
      let recipe={
        id:recipe_id,
        name: "",
        stepsTotal: 0,
        curSteps: [],
      }
      
        for (let i = 0; i < this.recipeIDs.length; i++) {
          recipe_id = this.recipeIDs[i].id;
          recipe.name=this.recipeIDs[i].title;
          recipe.id=recipe_id;
          if (this.recipesObj) {
          let index = this.recipesObj.findIndex(o => o.id == recipe_id);
          if (this.recipesObj[index]) {
            this.recipesObjToSend.push(this.recipesObj[index]);
          }
          else 
            this.recipesObjToSend.push(recipe);
   
      } else this.recipesObjToSend.push(recipe);
    }
    
   } else this.$router.push("/").catch(() => console.log("asd"));
   }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  font-family: "Comic Sans MS", cursive, sans-serif;
  text-align: center;
}

.table {
  display: table;
  text-align: center;
  // background-color: black;
}

.row {
  text-align: center;
  position: relative;
  background: #fff;
  background: none;
  font-size: 30px;
}

.row div {
  // margin:0 auto;
  display: table-cell;
  width: 100px;
}

.selected {
  z-index: 1;
}

a {
  cursor: pointer;
  margin-right: 20px;
}

.row-move {
  transition: transform 0.75s;
}
</style>