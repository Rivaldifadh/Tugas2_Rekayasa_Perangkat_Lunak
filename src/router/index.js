import { createRouter, createWebHashHistory } from "@ionic/vue-router";
import HomePage from "../views/HomePage.vue";
const routes = [
    {
        path: "/",
        component: HomePage,
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
//# sourceMappingURL=index.js.map