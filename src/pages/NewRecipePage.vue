<template>
  <b-modal size="lg" id="modal-prevent-closing" ref="modal" title="Create New Recipe" @show="resetModal" @hidden="resetModal" @ok="handleOk">
    <div>
      
      <b-form  @submit="onSubmit" @reset="onReset" v-if="show">
        <b-card>
          <b-card-body>
            <b-row>
              <b-col>
        <b-form-group id="input-group-1" label="Title:" label-for="input-1">
          <b-form-input id="input-1" v-model="form.title" required placeholder="Enter title"></b-form-input>
        </b-form-group>
        </b-col>
        <b-col>
        <b-form-group id="input-group-2" label="ImageURL:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.image" placeholder="Enter image url"></b-form-input>
        </b-form-group>
        </b-col>
            </b-row>
        <b-form-group id="input-group-3">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-3">
            <b-form-checkbox value="vegetarian">Vegetarian</b-form-checkbox>
            <b-form-checkbox value="vegan">Vvegan</b-form-checkbox>
            <b-form-checkbox value="glutenFree">Gluten Free</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

          <b-form-group id="input-group-4" label="aggregateLikes:" label-for="input-4">
          <b-form-input id="input-4" type="number" v-model="form.image" placeholder="Enter likes number"></b-form-input>
        </b-form-group>


        <b-form-group id="input-group-5" label="readyInMinutes:" label-for="input-5">
          <b-form-input id="input-5" type="number" v-model="form.image" placeholder="Enter time in minutes"></b-form-input>
        </b-form-group>
        
        <b-form-group id="input-group-6" label="servings:" label-for="input-6">
          <b-form-input id="input-6" type="number" v-model="form.image" placeholder="Enter number of servings"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-7" label="recipeOwner:" label-for="input-7">
          <b-form-input id="input-7" type="string" v-model="form.image" placeholder="Enter recipe owner"></b-form-input>
        </b-form-group>

         <b-form-group id="input-group-8" label="inEvent:" label-for="input-8">
          <b-form-input id="input-8" type="string" v-model="form.image" placeholder="Enter event name"></b-form-input>
        </b-form-group>

           <b-form-group id="input-group-9" label="Ingrediens:" label-for="input-9">
          <b-form-spinbutton id="input-9" type="number" v-model="form.image" placeholder="Enter amount"></b-form-spinbutton>
          <b-form-input id="input-10" type="string" v-model="form.image" placeholder="Enter ingredient"></b-form-input>
        </b-form-group>

        <!-- <RecipeIngredients /> -->

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>

                  </b-card-body>

        </b-card>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </b-modal>
</template>

<script>
import RecipeIngredients from '../components/RecipeIngredients.vue'
export default {
  components:{
    // RecipeIngredients,
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>