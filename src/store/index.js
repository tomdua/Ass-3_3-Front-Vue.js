const store = {
  username: localStorage.username,
  lastSearch: localStorage.recipes,
  login(username) {
    localStorage.setItem("username", username);
    this.username = username;
    console.log("login", this.username);
  },
  lastRecipe(lastSearch) {
    localStorage.setItem("lastSearch", lastSearch);
    this.lastSearch = lastSearch;
  },
  logout() {
    console.log("logout");
    localStorage.removeItem("username");
    localStorage.removeItem("lastSearch");
    this.lastSearch = undefined;
    this.username = undefined;
  },
};

export default store;
