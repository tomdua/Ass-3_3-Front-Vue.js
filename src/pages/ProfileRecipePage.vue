<template>
  <div class="container">
    <br>
    <RecipePreviewListFavorite title="Profile Recipe" :class="{
        RandomRecipes: true,
        blur: !$root.store.username,
        center: false
      }" disabled>
      </RecipePreviewListFavorite>
    <!-- <router-link v-if="!$root.store.username" to="/login" tag="button"></router-link>
    <RecipePreviewList title="Last Viewed Recipes" :class="{
        RandomRecipes: true,
        blur: !$root.store.username,
        center: true
      }" disabled>
    </RecipePreviewList> -->
  </div>
</template>

<script>
import RecipePreviewListFavorite from "../components/RecipePreviewListFavorite";
export default {
  components: {
    RecipePreviewListFavorite
  }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  display:none;
  // float:right;
  // text-align:right;
  //  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  //  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>