<template>
  <b-container class="bv-example-row">
  <b-row class="justify-content-md-center">
    <b-col>
           <i  v-if="recipe.vegetarian" class="fa fa-leaf" style="color: green; margin-right:5px"></i>
            <i  v-if="recipe.vegan" class="fa fa-envira" style="color: red; margin-right:5px"></i>
            <i  v-if="recipe.glutenFree" class="fa fa-pagelines" style="color: brown; margin-right:15px"></i>
              
              
              <span style="margin-right:5px">{{recipe.servings}}</span>
              <i v-if="recipe.servings" class="fa fa-cutlery" aria-hidden="true" style="margin-right:15px" ></i>
            <span style="margin-right:5px">{{recipe.aggregateLikes}}</span>
            <b-icon icon="hand-thumbs-up" style="color: blue; margin-right:15px"></b-icon>
            <span style="margin-right:5px">{{recipe.readyInMinutes}}</span>
            <b-icon icon="clock" style="color: blue; "></b-icon>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
export default {
     props: {
    recipe: {
      type: Object,
      required: true,
    }
  },

}
</script>

<style>

</style>