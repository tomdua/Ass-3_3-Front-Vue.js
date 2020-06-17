import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },

  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
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
    path: "/ProfileRecipePage",
    name: "profilerecip",
    component: () => import("./pages/ProfileRecipePage"),
  },
];

export default routes;
