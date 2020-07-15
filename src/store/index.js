const store = {
  username: localStorage.username,
  recipesPrepar: localStorage.recipesPrepar,
  recipePapaerNumber: localStorage.recipePapaerNumber,
  RecipesCheckList: localStorage.RecipesCheckList,

  RecipesCheckList() {
    RecipesCheckList[recipe.id] = {
      title: recipe_title,
      stepsTotal: numberOfSteps,
      curSteps: curSteps,
    };
    localStorage.setItem("RecipesCheckList", RecipesCheckList);
  },
  recipesPrepar(recipesPrepar, recipePapaerNumber) {
    localStorage.setItem("recipesPrepar", recipesPrepar);
    this.recipesPrepar = recipesPrepar;
    localStorage.setItem("recipePapaerNumber", recipePapaerNumber);
    this.recipePapaerNumber = recipePapaerNumber;
  },

  login(username) {
    localStorage.setItem("username", username);
    this.username = username;
    console.log("login", this.username);
    // localStorage.setItem("number", 5);
    this.number = 5;
  },

  logout() {
    console.log("logout");
    // $cookies.remove("session");

    localStorage.removeItem("username");
    localStorage.removeItem("lastSearch");
    localStorage.removeItem("query");
    localStorage.removeItem("cuisine");
    localStorage.removeItem("diet");
    localStorage.removeItem("intolerances");
    localStorage.removeItem("number");
    localStorage.removeItem("value");
    localStorage.removeItem("RecipesCheckList");
    this.RecipesCheckList = undefined;
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
