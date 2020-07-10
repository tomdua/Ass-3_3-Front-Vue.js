// import Main from "./pages/MainPage";
// import NotFound from "./pages/NotFoundPage";

// export const router = new Router({
//   mode: 'history',
//   routes: [
//     { path: '/', component: HomePage },
//     { path: '/login', component: LoginPage },
//     { path: '/register', component: RegisterPage },

//     // otherwise redirect to home
//     { path: '*', redirect: '/' }
//   ]
// });

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("./pages/HomePage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: () => import("./pages/NotFoundPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "/profile/favorite",
    name: "favorite",
    component: () => import("./pages/FavoriteRecipesPage"),
  },
  {
    path: "/profile/personal",
    name: "personal",
    component: () => import("./pages/PersonalRecipesPage"),
  },
  {
    path: "/profile/family",
    name: "family",
    component: () => import("./pages/FamilyRecipesPage"),
  },
  {
    path: "/recipe/preparing/:recipeId",
    name: "preparing",
    component: () => import("./pages/PreparingRecipePage"),
  },
  {
    path: "/profile/newRecipe",
    name: "new",
    component: () => import("./pages/NewRecipePage"),
  },






];

export default routes;
