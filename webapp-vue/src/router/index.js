import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../components/First10Films.vue"),
        },
        {
            path: '/:id',
            name: 'film',
            component: () => import("../components/IndividualFilm.vue")
        }
    ],
});

export default router;