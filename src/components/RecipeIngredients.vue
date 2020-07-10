<template>
  <div>
    <input v-model="new_item" v-bind:placeholder="placeholder" />
    <input v-model="new_item" v-bind:placeholder="placeholder" />
    <button v-on:click="addToList">Add</button>
  </div>
</template>

<script>
export default {
 data() {
    return {
      amount: 0,  
      name: "",
      placeholder: "Add ingredient"
    };
  },
  methods: {
    addToList() {
      this.$emit("new-item-added", this.new_item);
      this.new_item = "";
    }
  }
};

</script>

<style>

</style>