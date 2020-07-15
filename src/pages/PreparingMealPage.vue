<template>
 <b-container fluid class="bv-example-row">
    <br>
    <h2>Preparing A Meal</h2>
    <br>

 <transition-group name="row" tag="div">

   <span v-for="item in items" v-bind:key="item">
     {{ item.id }}
    <div v-for="item in items" v-bind:key="item" v-bind:class="{ selected: selected == item.id }" class="row">
      <div>{{ item.id }}</div>
      <div>{{ item.name }}</div>
      <div>
        <a v-on:click="selected = item.id; move('up', item);">Up</a>
        <a v-on:click="move('down', item)">Down</a>
       </div>
    </div>
       </span>

  </transition-group>


















<!-- <br>
              <b-row  v-for="(r, index) in recipeIDs" :key="index">
                <b-col col lg="2" >
                <li>{{index+1}}  {{ r }}</li>
</b-col >

<b-col col lg="6">
          <b-progress :max="recipesObj[r].stepsTotal" height="2rem" show-progress animated>
              <b-progress-bar :value="recipesObj[r].curSteps.length">
              <strong>{{recipesObj[r].curSteps.length}} /{{recipesObj[r].stepsTotal}}</strong>
             </b-progress-bar>
              </b-progress>

<br>
</b-col>

<b-col md="3" offset="1">
  <b-button variant="danger">Delete</b-button>
    <b-button @click="up(index)">UP</b-button>
    <b-button @click="down(index)">DOWN</b-button>  
</b-col >




                  </b-row> -->


    <br>

    <!-- <RecipePreviewList :recipes="familyRecipes" :personals="personals" class="center" /> -->
  </b-container>








  <!-- <div>
    <b-progress :value="value" :max="max" show-progress animated></b-progress>
    <b-progress class="mt-2" :max="max" show-value>
      <b-progress-bar :value="value * (6 / 10)" variant="success"></b-progress-bar>
      <b-progress-bar :value="value * (2.5 / 10)" variant="warning"></b-progress-bar>
      <b-progress-bar :value="value * (1.5 / 10)" variant="danger"></b-progress-bar>
    </b-progress>

    <b-button class="mt-3" @click="randomValue">Click me</b-button>
  </div> -->
</template>

<script>
  export default {
  created() {
    this.getRecipes();
  },
    data() {
      return {
        recipeIDs: [],
        recipesObj: [],
        selected: null,
        items: [
    		{"id": 1, "name": "Chris"},
    		{"id": 2, "name": "Peter"},
    		{"id": 3, "name": "Jenny"}      
    	]
      }
    },
    methods: {
      getRecipes() {
        this.recipeIDs = this.$root.store.recipesPrepar;
        this.recipesObj = this.$root.store.RecipesCheckList;
        // let x=  this.recipesObj["659169"];
        // let y= this.$root.store.RecipesCheckList[659169].curSteps;
      },
      move(direction, item) {
            var index = this.items.indexOf(item);
            // Move element
            if (direction == 'up' && index != 0) {
                // Remove element
                this.items.splice(index, 1);
                // Put it back at an earlier position
                this.items.splice(index - 1, 0, item);
            } else if (direction == 'down' && index != this.items.length - 1) {
                // Remove element
                this.items.splice(index, 1);
                // Put it back at a later position
                this.items.splice(index + 1, 0, item);
            }
      }
    

    }
  }
</script>

<style lang="scss" scoped>
h2 {
  font-family: "Comic Sans MS", cursive, sans-serif;
  text-align: center;
}

.table {
  display: table;
}

.row {
  position: relative;
  background: #fff;
}

.row div {
  display: table-cell;
  width: 100px;
}

.selected {
  z-index: 1;
}

a {
  cursor: pointer;
  margin-right: 20px
}

.row-move {
  transition: transform 0.75s;
}
</style>