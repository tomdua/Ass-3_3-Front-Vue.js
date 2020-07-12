<template>
  <div v-if="!personal">
    <div v-if="this.$root.store.username" class="h3 mb-0" style="float: right">
      <b-icon
        v-if="this.watched"
        icon="eye-fill"
        style="color: green; margin-right:5px"
      ></b-icon>
      <b-icon v-if="this.saved" icon="heart-fill" style="color: red;"></b-icon>
      <b-button v-else v-on:click="addToFavorites()" variant="danger"
        >Add To Favorites</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    personal: {
      type: Boolean,
      required: true,
    },
    recipe: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    watched: false,
    saved: false,
    //   recipe: recipe,
    //   favorite: false,
  }),

  async created() {
    try {
      console.log(this.recipe.id);
      if (this.$root.store.username) {
        const response = await this.axios.get(
          "http://localhost:3000/profile/recipeInfo",
          {
            params: { id: this.recipe.id },
          }
        );
        // console.log("response=" + response.data + " id= " + this.recipe.id);
        // console.log(response.data);
        this.watched = response.data.watched;
        this.saved = response.data.saved;
        //this.$router.push("/").catch(()=>console.log("asd"));
      }
    } catch (error) {
      console.log(error);
    }

    //   this.getFavorites();
  },

  methods: {
    //      async getFavorites() {
    //     try {
    //       if (this.$root.store.username) {
    //         const response = await this.axios.get(
    //           "http://localhost:3000/profile/favoriteRecipesID"
    //         );

    //         if(response.includes(this.recipe.id))
    //                 this.favorite=true;

    //         // console.log("response=" + response.data + " id= " + this.recipe.id);
    //         // console.log(response.data);
    //         //   this.watched=response.data.watched;
    //         // this.saved=response.data.saved;
    //       }

    //     } catch (error) {
    //       console.log(error);
    //     }
    //   },
    async addToFavorites() {
      try {
        if (this.$root.store.username) {
          const response = await this.axios.put(
            "http://localhost:3000/profile/favoriteRecipes",
            {
              id: this.recipe.id,
            }
          );
          alert("The recipe has been saved");
          // console.log("response=" + response.data + " id= " + this.recipe.id);
          // console.log(response.data);
          //   this.watched=response.data.watched;
          // this.saved=response.data.saved;
        }
      } catch (error) {
        console.log(error);
      }
    },
    //   async getDetails() {
    //     try {
    //         console.log(this.recipe.id);
    //       if (this.$root.store.username) {
    //         const response = await this.axios.get(
    //           "http://localhost:3000/profile/recipeInfo",
    //           {
    //             params: { id: this.recipe.id }
    //           }
    //         );
    //         // console.log("response=" + response.data + " id= " + this.recipe.id);
    //         // console.log(response.data);
    //         this.watched = response.data.watched;
    //         this.saved = response.data.saved;
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
  },
};
</script>

<style></style>
