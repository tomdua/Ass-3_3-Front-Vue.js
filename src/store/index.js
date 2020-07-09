const store = {
    username: localStorage.username,
    login(username) {
      localStorage.setItem("username", username);
      this.username = username;
      console.log("login", this.username);
    },
    logout() {
      console.log("logout");
      localStorage.removeItem("username");
      this.username = undefined;
    },
};
  
export default store;
