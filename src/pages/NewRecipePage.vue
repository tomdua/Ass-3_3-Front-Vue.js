<template>
  <b-modal :body-bg-variant="bodyBgVariant" size="xl" id="modal-prevent-closing" ref="modal" title="Create New Recipe">
    <div >

      <b-form  @submit.prevent="onSubmit" @reset="onReset" v-if="show">
        <b-container>
          <b-row>
            <b-col>
              <b-form-group id="input-group-1" label="Title:" label-for="input-1">
                <b-form-input  id="input-1" v-model="form.title" required placeholder="Enter recipe title"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group id="input-group-2" label="ImageURL:" label-for="input-2">
                <b-form-input  id="input-2" v-model="form.image" required placeholder="Enter image url"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <br> 
          <b-row class="justify-content-md-center">             
            <b-form-checkbox style="margin-right:60px" v-model="form.vegetarian" :indeterminate.sync="indeterminate">Vegetarian</b-form-checkbox>
            <b-form-checkbox style="margin-right:60px" v-model="form.vegan" :indeterminate.sync="indeterminate">Vegan</b-form-checkbox>
            <b-form-checkbox style="margin-right:60px" v-model="form.glutenFree" :indeterminate.sync="indeterminate">Gluten Free</b-form-checkbox>
          </b-row>
          <br> 
          <b-row> 
            <b-col>
          <b-form-group id="input-group-4" label="aggregateLikes:" label-for="input-4">
            <b-form-input id="input-4"  v-model="form.aggregateLikes" required placeholder="Enter likes number"></b-form-input>
          </b-form-group>
           </b-col>
            <b-col>
          <b-form-group id="input-group-5" label="readyInMinutes:" label-for="input-5">
            <b-form-input id="input-5"  v-model="form.readyInMinutes" required placeholder="Enter time in minutes"></b-form-input>
          </b-form-group>
           </b-col>
            <b-col>
          <b-form-group id="input-group-6" label="servings:" label-for="input-6">
            <b-form-input id="input-6"  v-model="form.servings" required placeholder="Enter number of servings"></b-form-input>
          </b-form-group>
           </b-col>
          </b-row> 
         

          ingredients:

          <RecipeIngredients :initialTasks="form.ingredients"  />

          instructions:

          <RecipeInstructions :initialTasks="form.analyzedInstructions.steps"  />


           <b-form-group id="input-group-7" label="type(pesonal/family):" label-for="input-7">
            <b-form-input id="input-7"  v-model="form.type" required placeholder="Enter type"></b-form-input>
          </b-form-group>
          
          <div v-if="form.type=='family'">
            <b-form-group id="input-group-8" label="recipeOwner:" label-for="input-8">
              <b-form-input id="input-8"  v-model="form.recipeOwner" required placeholder="Enter recipe owner"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-9" label="inEvent:" label-for="input-9">
              <b-form-input id="input-9"  v-model="form.inEvent" required placeholder="Enter event name"></b-form-input>
            </b-form-group>
          </div>
          
          <b-row class="justify-content-md-center">             
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
          </b-row>

        </b-container>

      </b-form>

      <b-card class="mt-3" header="Recipe Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </b-modal>
</template>

<script>
import RecipeIngredients from "../components/RecipeIngredients.vue";
import RecipeInstructions from "../components/RecipeInstructions.vue";
// import background from "../assets/backgrounds3.jpg";

export default {
  components: {
    RecipeIngredients,
    RecipeInstructions
  },
  data() {
    return {
       indeterminate: true,
      bodyBgVariant: "light",

      // background: { backgroundImage: "url(../assets/backgrounds3.jpg)" },
      form: {
        title: "",
        image: "",
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        aggregateLikes: "",
        readyInMinutes: "",
        type: "",
        email: "",
        name: "",
        servings: "",
        recipeOwner: "",
        inEvent: "",
        ingredients: [
        
        ],
        analyzedInstructions: 
        {
          
            steps: [
            
            ]
          
        }
      },
      show: true
    };
  },
  methods: {
    // addToIngredients(new_item) {
    //   this.form.ingredients.push(new_item);
    //   this.new_item = "";
    // },
    // addToIntructions(new_item){
    //   this.form.analyzedInstructions.steps.push(new_item);
    //   this.new_item = "";
    // },

    removeItem(index) {
      this.tasks.splice(index, 1);
    },

    async onSubmit() {
      // evt.preventDefault();
          try {
            // let v1,v2,g;

        //console.log(this.form.username);
        // const response = await this.axios.post(
        //   "http://localhost:3000/profile/newRecipe",
        //   {
        //     title: this.form.title,
        //     image: this.form.image,
        //     vegetarian: this.form.vegetarian*1,
        //     vegan: this.form.vegan*1,
        //     glutenFree: this.form.glutenFree*1,
        //     aggregateLikes: this.form.aggregateLikes,
        //     readyInMinutes: this.form.readyInMinutes,
        //     ingredients: this.form.ingredients,
        //     analyzedInstructions: this.form.analyzedInstructions,
        //     servings: this.form.servings,
        //     type: this.form.type,
        //     recipeOwner: this.form.recipeOwner,
        //     inEvent: this.form.inEvent,
        //   }
        // );
        // t;
        // this.$router.push("/login");
        alert("Recipe added successfully!!!")
        console.log(response);
      } catch (err) {
        console.log(err);
        // this.form.submitError = err.response.data.message;
      }





      // alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      // this.form.email = "";
      // this.form.name = "";
      // this.form.food = null;
      // this.form.checked = [];
      this.form.title= "",
      this.form.image="",
      this.form.vegetarian=false,
       this.form.vegan=false,
       this.form.glutenFree=false,
        this.form.aggregateLikes="",
        this.form.readyInMinutes="",
         this.form.ingredients=[],
         this.form.analyzedInstructions.steps=[],
         this.form.servings="",
        this.form.type="",
         this.form.recipeOwner="",
        this.form.inEvent="",

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style lang="scss" >
// .mymodal > div {
//     // position: absolute;
//     // top: 300px;
//     // right: 100px;
//     background-color: yellow;
//   }
// .back {
//   background-image: url("./assets/backgrounds3.jpg");
//   background-size: cover;
//   // background-position: center;
// }
</style>