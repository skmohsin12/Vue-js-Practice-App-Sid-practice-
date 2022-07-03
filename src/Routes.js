import { createWebHistory, createRouter } from "vue-router";
import HomeCompParent from "./components/RoutingConcept/HomeCompParent.vue";
import LoginComp from "./components/RoutingConcept/RoutComponents/LoginComp.vue";
import ProfileComp from "./components/RoutingConcept/RoutComponents/ProfileComp.vue";
import PageNotFound from './components/RoutingConcept/RoutComponents/PageNotFound.vue'

const routes = [
  {
    name: "HomeCompParent",
    path: "/",
    component: HomeCompParent,
  },
  {
    name: "LoginComp",
    path: "/LoginComp",
    component: LoginComp,
  },
  {
    name: "ProfileComp",
    path: "/ProfileComp",
    component: ProfileComp,
  },
  {
    name: "PageNotFound",
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
