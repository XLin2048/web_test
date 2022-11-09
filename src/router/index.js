import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/Home.vue'
import PersonalPage from "@/components/PersonalPage";
import FacultyNews from "@/components/FacultyNews";
import Index from "@/components/Index";
import historyLearning from "@/components/historyLearning";

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: '/personal',
                    name: 'personalPage',
                    component: PersonalPage,
                },
                {
                    path: '/faculty',
                    name: 'FacultyNews',
                    component: FacultyNews,
                },
                {
                    path: '/index',
                    name: 'Index',
                    component: Index,
                },
                {
                    path: '/historyLearning',
                    name: 'historyLearning',
                    component: historyLearning,
                },
            ]
        },
        {path: '/', redirect: '/index'},


    ]
})
export default router