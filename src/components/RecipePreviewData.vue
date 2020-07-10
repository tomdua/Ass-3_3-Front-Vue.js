<template>
  <b-container class="bv-example-row">
  <b-row>
    <b-col>
           <i  v-if="recipe.vegetarian" class="fa fa-leaf" style="color: green; margin-right:5px"></i>
              <i  v-if="recipe.vegan" class="fa fa-envira" style="color: red; margin-right:5px"></i>
              <i  v-if="recipe.glutenFree" class="fa fa-pagelines" style="color: brown; margin-right:5px"></i>
            <span>{{recipe.aggregateLikes}}</span>
            <b-icon icon="hand-thumbs-up" style="color: blue; margin-right:5px"></b-icon>
            <span>{{recipe.readyInMinutes}}</span>
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