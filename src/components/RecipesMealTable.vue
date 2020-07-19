<template>
      <table align="center" class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Recipe Name</th>
            <th scope="col">Progress</th>
          </tr>
        </thead>
        <draggable tag="tbody">
          <tr v-for="(item,index) in recipesObj" :key="index">
                        <router-link style="color: azure;   font-weight: bold; font-size:20px" :to="{ name: 'preparing', params: { recipeId: item.id } }">
            <td style="width:50%" scope="row">{{ item.name }}</td>
                        </router-link>
            <td style="width:50%">
              <b-progress :max="item.stepsTotal" height="2rem" width=200px show-progress animated>
                <b-progress-bar :value="item.curSteps.length">
                  <strong>{{item.curSteps.filter(Boolean).length}} /{{item.stepsTotal}}</strong>
                </b-progress-bar>
              </b-progress>
            </td>
          </tr>
        </draggable>
      </table>
    

</template>

<script>
import draggable from "vuedraggable";
export default {

  components: {
    draggable
  },
    props: {
    recipesObj: {
      type: Array,
      required: true
    },
      recipesIds: {
      type: Array,
      required: true
    },

    },
  data() {
    return {
    recipes: [], 
    dragging: false
    };
  },
 
};
</script>
<style scoped>
table {
  width: 70%;
}
.buttons {
  margin-top: 35px;
}
</style>