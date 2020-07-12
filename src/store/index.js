const store = {
  username: localStorage.username,
  lastSearch: localStorage.recipes,
  query: localStorage.keyword,
  cuisine: localStorage.valueCuisine,
  diet: localStorage.valueDiet,
  login(username) {
    localStorage.setItem("username", username);
    this.username = username;
    console.log("login", this.username);
    localStorage.setItem("number", 5);
    this.number = 5;
  },
  lastRecipe(lastSearch, query, cuisine, diet, intolerances, number, value) {
    localStorage.setItem("lastSearch", lastSearch);
    this.lastSearch = lastSearch;
    localStorage.setItem("query", query);
    this.keyword = query;
    localStorage.setItem("cuisine", cuisine);
    this.valueCuisine = cuisine;
    localStorage.setItem("diet", diet);
    this.valueDiet = diet;
    localStorage.setItem("intolerances", intolerances);
    this.valueIntolerances = intolerances;
    localStorage.setItem("number", number);
    this.valueNumber = number;
    localStorage.setItem("value", value);
    this.value = value;
  },
  logout() {
    console.log("logout");
    localStorage.removeItem("username");
    localStorage.removeItem("lastSearch");
    localStorage.removeItem("query");
    localStorage.removeItem("cuisine");
    localStorage.removeItem("diet");
    localStorage.removeItem("intolerances");
    localStorage.removeItem("number");
    localStorage.removeItem("value");
    this.lastSearch = undefined;
    this.username = undefined;
    this.query = undefined;
    this.cuisine = undefined;
    this.diet = undefined;
    this.intolerances = undefined;
    this.number = 5;
    this.value = undefined;
  },
};

export default store;
