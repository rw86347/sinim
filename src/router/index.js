import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BibleView from "@/views/BibleView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", name: "home", component: HomeView },
        { path: "/bible", name: "bible", component: BibleView },
        { path: "/about", name: "about", component: AboutView },
    ],
});

export default router;
