const store = {
  recipesNum: 0,
  username: localStorage.username,
  lastSearch: localStorage.recipes,
  query: localStorage.keyword,
  cuisine: localStorage.valueCuisine,
  diet: localStorage.valueDiet,
  recipesPrepar: localStorage.recipesPrepar,
  recipePapaerNumber: localStorage.recipePapaerNumber,

  recipesPrepar() {
    localStorage.setItem("recipesPrepar", recipesPrepar);
    this.recipesPrepar = recipesPrepar;
    localStorage.setItem("recipePapaerNumber", recipePapaerNumber);
    this.recipePapaerNumber = recipePapaerNumber;
  },

  login(username) {
    // localStorage.setItem("recipesNum", recipesNum);
    localStorage.setItem("username", username);
    this.username = username;
    console.log("login", this.username);
    // localStorage.setItem("number", 5);
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
    // $cookies.remove("session");

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

// router.beforeEach((to, from, next) => {
//   // if there was a transition from logged in to session expired or localStorage was deleted

//   // if we try to enter auth required pages and we are not authorized
//   if (shared_data.username === undefined || !Vue.$cookies.get("session")) {
//     if (
//       (shared_data.username === undefined && Vue.$cookies.get("session")) ||
//       (shared_data.username !== undefined && !Vue.$cookies.get("session"))
//     ) {
//       shared_data.logout();
//     }

//     // if the route requires Authorization, (and we know the user is not authorized), we redirect to login page
//     if (to.matched.some((route) => route.meta.requiresAuth)) {
//       next({ name: "login" });
//     } else next();
//   } else next();
// });

export default store;
