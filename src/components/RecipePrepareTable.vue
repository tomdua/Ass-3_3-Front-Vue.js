<template>
  <div>
    <b-table hover ref="selectableTable" :select-mode="selectMode" :items="itemsIn" :fields="fields" @row-selected="onRowSelected" responsive="sm">
      <!-- Example scoped slot for select state illustrative purposes -->
      <template v-slot:cell(selected)="row">

        <b-form-group>
          <input type="checkbox" v-model="row.item.selected" />

        </b-form-group>

       
      </template>

    </b-table>
 
  </div>
</template>

<script>
export default {
  data() {
    return {
      //  modes: ['multi', 'single', 'range'],
      fields: ["selected", "Equipment", "Ingredients", "Instructions"],
      selectMode: "multi",
      selected: [],
      itemsIn: this.items,
      sendData: []
    };
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    recipe: {
      type: Object,
      requred: true
    }
  },
  mounted() {
    this.test();
    this.startPreper();
  },
  beforeDestroy() {
    this.sendData2();
  },
  methods: {
    startPreper() {
      //  if(this.preparing){
      let recipe_id = this.recipe.id;
            // let a= localStorage.getItem("recipesCheckListIn");

      try {
        let recipesFromMemory=JSON.parse(localStorage.getItem('recipesCheckListIn'));
        if (recipesFromMemory) {
          let oldSeleted = recipesFromMemory.find(
            e => e.id === recipe_id
          );
          if (oldSeleted) {
            for (let i = 0; i < this.itemsIn.length; i++)
              this.itemsIn[i].selected = oldSeleted.curSteps[i];
          }
        }
      } catch (error) {
        console.log(error);
      }

      //     }
    },
    onRowSelected(items) {
      this.selected = items;
      console.log(this.selected);
    },
    test() {
      console.log(this.itemsIn);
      console.log("asasd");
    },
    sendData2() {
      //  if(this.preparing){
      //   let send2=[];
      //   let id=this.recipe.id;

      this.selected = this.itemsIn.map(el => {
        return el.selected;
      });
      let replaced = false;
      let added = false;
      let send = {
        id: this.recipe.id,
        name: this.recipe.title,
        stepsTotal: this.items.length,
        curSteps: this.selected
      };
        let recipesFromMemory=JSON.parse(localStorage.getItem('recipesCheckListIn'));
      if (recipesFromMemory) {
        try {
          if (recipesFromMemory.length > 0) {
            let i = recipesFromMemory.findIndex(
              o => o.id === send.id
            );
            if (recipesFromMemory[i]) {
              recipesFromMemory[i] = send;
              replaced = true;
              this.$root.store.addToRecipesCheckList(recipesFromMemory);

            } else {
              this.sendData = recipesFromMemory;
              // this.sendData.push(send);
              added = true;
             }
          } 
        } catch (error) {
          console.log(error);
        }

      } 
      
      // else this.sendData.push(send);
      if (!replaced || added){
        this.sendData.push(send);
        this.$root.store.addToRecipesCheckList(this.sendData);
      }
      this.$forceUpdate();  
    }
  }
};
</script>

<style>

input[type=checkbox]
{

  -webkit-transform: scale(3); /* Safari and Chrome */

  transform: scale(3);
  padding: 10px;
}


</style>