<template>
  <div style="max-width: 35rem;" class="mb-2">
    <router-link :to="{ name: 'recipe', params: { recipeId: recipe.id } }">
      <b-card bg-variant="dark" text-variant="white" v-bind:img-src=recipe.image img-top class="mb-3 recipe-item">
        <b-card-text>
          <h3>{{recipe.title}}</h3>
          <div class="h5 mb-0" style="float: left">
            <!-- <b-img v-bind:src=vegan style="width: 5%"></b-img> -->
            <!-- <b-icon class="relative" :style="{ backgroundImage: `url(${vegan})` }"></b-icon> -->

            <!-- <span class="mdi mdi-leaf"></span> -->
            <!-- <b-img v-bind:src=vegan style="width: 20%; margin-right:5px "></b-img>
    <b-img v-bind:src=vegeterian style="width: 5%; margin-right:5px"></b-img>
    <b-img v-bind:src=glutenFree style="width: 5%; margin-right:5px"></b-img> -->

            <!-- <i class="icon-vegan"></i> -->
            <!-- <i  v-if="recipe.vegetarian" class="fa fa-leaf" style="color: green; margin-right:5px"></i>
    <i  v-if="recipe.vegan" class="fa fa-envira" style="color: red; margin-right:5px"></i>
    <i  v-if="recipe.glutenFree" class="fa fa-pagelines" style="color: brown; margin-right:5px"></i>
    <span>{{recipe.aggregateLikes}}</span>
    <b-icon icon="hand-thumbs-up" style="color: blue; margin-right:5px"></b-icon>
    <span>{{recipe.readyInMinutes}}</span>
    <b-icon icon="clock" style="color: blue;"></b-icon> -->
            <RecipePreviewData :recipe="recipe" />
          </div>
          <RecipePreviewUserInfo :personal="personal" :recipe="recipe" />
          <!-- <div v-if="!personal">
    <div v-if=this.$root.store.username class="h3 mb-0" style="float: right">
    <b-icon v-if="this.watched" icon="eye-fill" style="color: green; margin-right:5px"></b-icon>
    <b-icon v-if="this.saved" icon="heart-fill" style="color: red;"></b-icon>
    <b-button v-else v-on:click="addToFavorites()" variant="danger">Add To Favorites</b-button>
    </div>  
    </div> -->

        </b-card-text>

      </b-card>
    </router-link>
    <!-- <b-row>
  <b-col></b-col>
  <b-col lg="4" class="pb-2"><b-button v-if=this.$root.store.username v-on:click="addToFavorites()" variant="danger">Add To Favorites</b-button></b-col>
  <b-col></b-col>
</b-row> -->
  </div>
</template>

<script>
// import vegan from "../assets/vegan.png";
// import vegeterian from "../assets/vegeterian.png";
// import glutenFree from "../assets/glutenFree.png";

// import RecipeInfo from "@/components/RecipeInfo.vue";
// import RecipeRating from "@/components/RecipeRating.vue";

import RecipePreviewUserInfo from "./RecipePreviewUserInfo.vue";
import RecipePreviewData from "./RecipePreviewData.vue";
export default {
  // name: "RecipeSummary",
  components: {
    RecipePreviewUserInfo,
    RecipePreviewData
  },

  props: {
    personal: {
      type: Boolean,
      required: true
    },
    recipe: {
      type: Object,
      required: true
    }
  }

  // components: {
  //   // RecipeInfo,
  //   // RecipeRating
  // },
  // data: () => ({
  //    watched: false,
  //    saved: false,
  //   //  recipeInfo: null,
  // }),

  // mounted() {

  //   this.getDetails();

  // },

  //  methods: {
  //   say: function (message) {

  //   },
  //   async addToFavorites() {
  //     try {
  //       if (this.$root.store.username) {
  //         const response = await this.axios.put(
  //           "http://localhost:3000/profile/favoriteRecipes",
  //           {
  //             id: this.recipe.id ,
  //           }
  //         );
  //         alert("message")
  //         // console.log("response=" + response.data + " id= " + this.recipe.id);
  //         // console.log(response.data);
  //         //   this.watched=response.data.watched;
  //         // this.saved=response.data.saved;
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  //   async getDetails() {
  //     try {
  //       if (this.$root.store.username) {
  //         const response = await this.axios.get(
  //           "http://localhost:3000/profile/recipeInfo",
  //           {
  //             params: { id: this.recipe.id },
  //           }
  //         );
  //         // console.log("response=" + response.data + " id= " + this.recipe.id);
  //         // console.log(response.data);
  //           this.watched=response.data.watched;
  //         this.saved=response.data.saved;
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  // // computed: {
  // //   getd: async function () {
  // //     try {
  // //       recipeId=recipe.id;
  // //       const response = await this.axios.get("http://localhost:3000/profile/recipeInfo",
  // //           {
  // //           params: { id: recipeId }
  // //           }
  // //       );
  // //       // console.log(response);
  // //       //const details = response;
  // //       return this.watched=response.data.watched;
  // //       // this.saved=response.data.saved;
  // //     } catch (error) {
  // //       console.log(error);
  // //     }
  // // }
  // // },
  //  }
};
</script>

<style scoped>
/* span {
  font-size: 1.5em;
  line-height: 1.5em;
  font-weight: 400;
} */
/* 
.icon-vegan {
    background-image: url(${vegan});
    background-position: center center;
} */

.recipe-item {
  transition: all 100ms ease-in-out;
}

.recipe-item:hover {
  /* background-color: rgba(0, 0, 0, 0.03); */
  transform: scale(1.01);
}

/* .rating-container {
  position: absolute;
  top: 0;
  right: 0;
} */
</style>
